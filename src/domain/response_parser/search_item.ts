import { SearchItemResponse } from "../../data/response/search_item";
import { HTTPModelResponseParser } from "../../net/response/model";
import { HTTPResponseParser } from "../../net/response/parser";

export class SearchItemResponseParser implements HTTPResponseParser<number> {
    public parse(response: string): number {
        const search_results = new HTTPModelResponseParser<SearchItemResponse>().parse(response);
        return search_results.results[0].data.id;
    }
}
