import { BattleNetLocalizationContextualizedValue } from "../common/localization_contextualized_value";
import { BattleNetWeaponDamage } from "./weapon_damage";

export interface BattleNetWeapon {
    damage: BattleNetWeaponDamage;
    attack_speed: BattleNetLocalizationContextualizedValue<number>;
    dps: BattleNetLocalizationContextualizedValue<number>;
    additional_damage: BattleNetWeaponDamage[];
}
