import { ClientRequest, RequestOptions } from "node:http";

import { HTTPResponseParser } from "../response/parser";
import { HTTPRequest } from "./request";

export class POSTHTTPRequest<RequestType, ResponseType> extends HTTPRequest<RequestType, ResponseType> {
    public constructor(
        options: RequestOptions,
        response_parser: HTTPResponseParser<ResponseType>,
        payload: RequestType,
        query: Record<string, unknown> = {},
    ) {
        options.method = "POST";
        super(options, response_parser, payload, query);
    }

    protected write_to_request(request: ClientRequest): void {
        request.write(this.payload);
    }
}
