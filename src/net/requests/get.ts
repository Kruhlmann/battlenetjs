import { ClientRequest, RequestOptions } from "node:http";

import { HTTPResponseParser } from "../response/parser";
import { HTTPRequest } from "./request";

export class GETHTTPRequest<ResponseType> extends HTTPRequest<undefined, ResponseType> {
    public constructor(
        options: RequestOptions,
        response_parser: HTTPResponseParser<ResponseType>,
        query: Record<string, unknown> = {},
    ) {
        options.method = "GET";
        super(options, response_parser, undefined, query);
    }

    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    protected write_to_request(_request: ClientRequest): void {
        return;
    }
}
