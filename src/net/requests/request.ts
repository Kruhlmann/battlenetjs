import { ClientRequest, IncomingMessage, RequestOptions } from "node:http";
import { request } from "node:https";

import { Logger } from "../../logger/logger";
import { HTTPEvent } from "../http_event";
import { QuerySerializerFactory } from "../query/serializer_factory";
import { HTTPResponseParser } from "../response/parser";

export abstract class HTTPRequest<RequestType, ResponseType> {
    protected readonly options: RequestOptions;
    protected readonly payload: RequestType;
    protected readonly response_parser: HTTPResponseParser<ResponseType>;
    protected readonly serializer_factory: QuerySerializerFactory;
    protected readonly query: Record<string, unknown>;
    protected readonly logger: Logger;

    public constructor(
        options: RequestOptions,
        response_parser: HTTPResponseParser<ResponseType>,
        payload: RequestType,
        query: Record<string, unknown> = {},
    ) {
        this.options = options;
        this.response_parser = response_parser;
        this.payload = payload;
        this.query = query;
        this.serializer_factory = new QuerySerializerFactory();
        this.logger = Logger.get_logger(this);
    }

    public async send(): Promise<ResponseType> {
        const options = this.generate_request_options();
        this.logger.debug(`Sending HTTPS request to ${options.host}${options.path}`);

        return new Promise((resolve, reject) => {
            const chunks: Buffer[] = [];
            const request_handle = request(options, (response: IncomingMessage) => {
                response.on(HTTPEvent.ERROR, reject);
                response.on(HTTPEvent.NEW_DATA, (chunk: Buffer) => {
                    chunks.push(chunk);
                });
                response.on(HTTPEvent.END, () => {
                    const string_response = Buffer.concat(chunks).toString();
                    const parsed_response = this.response_parser.parse(string_response);
                    resolve(parsed_response);
                });
            });
            this.write_to_request(request_handle);
            request_handle.end();
        });
    }

    private generate_request_options(): RequestOptions {
        const query_string_serializer = this.serializer_factory.get_serializer(this.query);
        const query_string = query_string_serializer.serialize(this.query);
        const options = { ...this.options };
        options.path = this.options.path + query_string;
        return options;
    }

    protected abstract write_to_request(request: ClientRequest): void;
}
