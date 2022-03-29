export interface HTTPResponseParser<ResponseType> {
    parse(response: string): ResponseType;
}
