import { HasKey } from "../common/has_key";

export interface BattleNetItemSpell extends HasKey {
    name: string;
    id: number;
}
