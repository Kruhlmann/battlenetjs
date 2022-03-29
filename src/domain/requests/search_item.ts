import { BattleNetNamespace } from "../../data/namespace/namespace";
import { GETHTTPRequest } from "../../net/requests/get";
import { SearchItemResponseParser } from "../response_parser/search_item";

export class SearchItemRequest extends GETHTTPRequest<number> {
    public constructor(item_name: string, oauth_token: string, namespace: BattleNetNamespace, locale: string) {
        const options = {
            host: "us.api.blizzard.com",
            path: "/data/wow/search/item",
            headers: {
                Authorization: `Bearer ${oauth_token}`,
            },
        };
        const response_parser = new SearchItemResponseParser();
        const query: Record<string, string> = {
            namespace: namespace.namespace,
            locale: locale,
            [`name.${locale}`]: item_name,
            orderby: "id",
        };
        super(options, response_parser, query);
    }
}
