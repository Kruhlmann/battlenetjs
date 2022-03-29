import { BattleNetLocalizationContextualizedType } from "../common/localization_contextualized_type";
import { BattleNetDamageType } from "./damage_type";

export interface BattleNetWeaponDamage {
    min_value: number;
    max_value: number;
    display_string: string;
    damage_class: BattleNetLocalizationContextualizedType<BattleNetDamageType>;
}
