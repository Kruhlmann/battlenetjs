import { BattleNetItem } from "../data/item/item";
import { BattleNetItemMedia } from "../data/item/media";
import { BattleNetNamespace } from "../data/namespace/namespace";
import { BattleNetMediaResolvedItem } from "../data/resolved/media_resolved_item";
import { ItemNotFoundError } from "../error/item_not_found";
import { OauthSource } from "./auth/oauth_source";
import { BattleNet } from "./battlenet";
import { GetItemRequest } from "./requests/get_item";
import { GetItemIconRequest } from "./requests/get_item_icon";
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

    public async get_item_by_id(item_id: number): Promise<BattleNetMediaResolvedItem> {
        const oauth_token = await this.oauth_source.get_token();
        return Promise.all([
            new GetItemRequest(item_id, oauth_token, this.namespace, this.locale).send().catch(() => {
                throw new ItemNotFoundError(`ID: ${item_id}`);
            }),
            new GetItemIconRequest(item_id, oauth_token, this.namespace, this.locale).send().catch(() => {
                throw new ItemNotFoundError(`ID: ${item_id}`);
            }),
        ]).then((responses: [BattleNetItem, BattleNetItemMedia]) => {
            const media = responses[1];
            const item = responses[0];
            return { ...item, ...{ thumbnail: media.assets[0].value } }
        })
    }

    public async get_item_by_name(item_name: string): Promise<BattleNetItem> {
        const oauth_token = await this.oauth_source.get_token();
        const item_id = await new SearchItemRequest(item_name, oauth_token, this.namespace, this.locale)
            .send()
            .catch(() => {
                throw new ItemNotFoundError(`Name: ${item_name}`);
            });
        return this.get_item_by_id(item_id);
    }
}
