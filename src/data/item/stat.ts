import { BattleNetLocalizationContextualizedType } from "../common/localization_contextualized_type";
import { BattleNetAttributeType } from "./attribute_type";
import { BattleNetItemColorString } from "./color_string";

export interface BattleNetItemStat extends BattleNetLocalizationContextualizedType<BattleNetAttributeType> {
    value: number;
    is_equip_bonus?: boolean;
    display: BattleNetItemColorString;
}
