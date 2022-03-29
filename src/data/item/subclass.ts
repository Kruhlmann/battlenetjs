import { HasKey } from "../common/has_key";
import { BattleNetItemSubclassType } from "./subclass_type";

export interface BattleNetItemSubclass extends HasKey {
    name: string;
    id: BattleNetItemSubclassType;
}
