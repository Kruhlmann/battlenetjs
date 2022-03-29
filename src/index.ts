import { BattleNetBaseNamespace } from "./data/namespace/base_namespace";
import { BattleNetNamespace } from "./data/namespace/namespace";
import { BattleNetRegion } from "./data/region";
import { BattleNetOauthService } from "./domain/auth/oauth_service";
import { BattleNetClient } from "./domain/client";

(async () => {
    const service = new BattleNetOauthService(process.env.CLIENTID || "", process.env.CLIENTSECRET || "");
    const namespace = new BattleNetNamespace(
        BattleNetBaseNamespace.WOW_CLASSIC_PROGRESSION,
        BattleNetRegion.NORTH_AMERICA,
    );
    const client = new BattleNetClient(service, namespace);
    const item = await client.get_item_by_id(19_019);
    console.log(item.name);
    const item2 = await client.get_item_by_name("Thunderfury");
    console.log(item2.name);
})();
