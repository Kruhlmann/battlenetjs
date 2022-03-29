import { HasKey } from "../common/has_key";
import { BattleNetItemClassType } from "./class_type";

export interface BattleNetItemClass extends HasKey {
    name: string;
    id: BattleNetItemClassType;
}
