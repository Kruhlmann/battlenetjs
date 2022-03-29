import { HTTPResponseParser } from "./parser";

export class HTTPJSONResponseParser implements HTTPResponseParser<Record<string, unknown>> {
    public parse(response: string): Record<string, unknown> {
        return JSON.parse(response);
    }
}
