import { BattleNetLink } from "../common/link";
import { BattleNetMedia } from "../common/media";
import { BattleNetItemClass } from "./class";
import { BattleNetItemInventoryCharacteristics } from "./inventory_characteristics";
import { BattleNetPreviewItem } from "./preview_item";
import { BattleNetItemQuality } from "./quality";
import { BattleNetItemSubclass } from "./subclass";

export interface BattleNetItem {
    _links: Record<string, BattleNetLink>;
    id: number;
    name: string;
    quality: BattleNetItemQuality;
    level: number;
    required_level?: number;
    media: BattleNetMedia;
    item_class: BattleNetItemClass;
    item_subclass: BattleNetItemSubclass;
    inventory_type: BattleNetItemInventoryCharacteristics;
    purchase_price: number;
    sell_price: number;
    max_count: number;
    is_equippable: boolean;
    is_stackable: boolean;
    preview_item: BattleNetPreviewItem;
}
