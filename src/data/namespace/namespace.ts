import { BattleNetRegion } from "../region";
import { BattleNetBaseNamespace } from "./base_namespace";

export class BattleNetNamespace {
    public readonly namespace: string;

    public constructor(base_ns: BattleNetBaseNamespace, region: BattleNetRegion) {
        this.namespace = `${base_ns}-${region}`;
    }
}
