import { HTTPResponseParser } from "./parser";

export class HTTPModelResponseParser<ModelType> implements HTTPResponseParser<ModelType> {
    public parse(response: string): ModelType {
        return JSON.parse(response);
    }
}
