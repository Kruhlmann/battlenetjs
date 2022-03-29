import { BattleNetItem } from "../data/item/item";

export interface BattleNet {
    get_item_by_id(item_id: number): Promise<BattleNetItem>;
    get_item_by_name(item_name: string): Promise<BattleNetItem>;
}
