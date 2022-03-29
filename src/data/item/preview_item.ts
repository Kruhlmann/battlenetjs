import { HasKey } from "../common/has_key";
import { BattleNetLocalizationContextualizedValue } from "../common/localization_contextualized_value";
import { BattleNetMedia } from "../common/media";
import { BattleNetRecipe } from "../recipe/recipe";
import { BattleNetItemBinding } from "./binding";
import { BattleNetItemClass } from "./class";
import { BattleNetItemInventoryCharacteristics } from "./inventory_characteristics";
import { BattleNetItemQuality } from "./quality";
import { BattleNetItemRequirements } from "./requirements";
import { BattleNetItemSellPrice } from "./sell_price";
import { BattleNetItemSpellContext } from "./spell_context";
import { BattleNetItemStat } from "./stat";
import { BattleNetItemSubclass } from "./subclass";
import { BattleNetWeapon } from "./weapon";

export interface BattleNetPreviewItem extends HasKey {
    item: BattleNetMedia;
    quality: BattleNetItemQuality;
    name: string;
    media: BattleNetMedia;
    item_class: BattleNetItemClass;
    item_subclass: BattleNetItemSubclass;
    inventory_type: BattleNetItemInventoryCharacteristics;
    binding: BattleNetItemBinding;
    unique_equipped: string;
    weapon: BattleNetWeapon;
    armor?: BattleNetItemStat;
    stats: BattleNetItemStat[];
    spells: BattleNetItemSpellContext[];
    sell_price: BattleNetItemSellPrice;
    requirements: BattleNetItemRequirements;
    recipe?: BattleNetRecipe;
    durability: BattleNetLocalizationContextualizedValue<number>;
    is_subclass_hidden?: boolean;
}
