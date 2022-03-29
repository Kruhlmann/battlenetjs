import { BattleNetItem } from "../data/item/item";
import { BattleNetNamespace } from "../data/namespace/namespace";
import { OauthSource } from "./auth/oauth_source";
import { BattleNet } from "./battlenet";
import { GetItemRequest } from "./requests/get_item";
import { SearchItemRequest } from "./requests/search_item";

export class BattleNetClient implements BattleNet {
    private oauth_source: OauthSource;
    private namespace: BattleNetNamespace;
    private locale: string;

    public constructor(oauth_source: OauthSource, namespace: BattleNetNamespace, locale = "en_US") {
        this.oauth_source = oauth_source;
        this.namespace = namespace;
        this.locale = locale;
    }

    public async get_item_by_id(item_id: number): Promise<BattleNetItem> {
        const oauth_token = await this.oauth_source.get_token();
        return new GetItemRequest(item_id, oauth_token, this.namespace, this.locale).send();
    }

    public async get_item_by_name(item_name: string): Promise<BattleNetItem> {
        const oauth_token = await this.oauth_source.get_token();
        const item_id = await new SearchItemRequest(item_name, oauth_token, this.namespace, this.locale).send();
        return this.get_item_by_id(item_id);
    }
}
