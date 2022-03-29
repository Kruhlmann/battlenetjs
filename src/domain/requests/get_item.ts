import { BattleNetItem } from "../../data/item/item";
import { BattleNetNamespace } from "../../data/namespace/namespace";
import { GETHTTPRequest } from "../../net/requests/get";
import { HTTPModelResponseParser } from "../../net/response/model";

export class GetItemRequest extends GETHTTPRequest<BattleNetItem> {
    public constructor(item_id: number, oauth_token: string, namespace: BattleNetNamespace, locale: string) {
        const options = {
            host: "us.api.blizzard.com",
            path: `/data/wow/item/${item_id}`,
            headers: {
                Authorization: `Bearer ${oauth_token}`,
            },
        };
        const response_parser = new HTTPModelResponseParser<BattleNetItem>();
        const query: Record<string, string> = {
            namespace: namespace.namespace,
            locale: locale,
        };
        super(options, response_parser, query);
    }
}
