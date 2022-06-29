import { BattleNetBaseNamespace } from "./data/namespace/base_namespace";
import { BattleNetNamespace } from "./data/namespace/namespace";
import { BattleNetRegion } from "./data/region";
import { BattleNetOauthService } from "./domain/auth/oauth_service";
import { BattleNetClient } from "./domain/client";

module.exports = {
    BattleNetClient,
    BattleNetOauthService,
    BattleNetNamespace,
    BattleNetBaseNamespace,
    BattleNetRegion,
}
