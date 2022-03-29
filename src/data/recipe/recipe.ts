import { BattleNetPreviewItem } from "../item/preview_item";
import { BattleNetRecipeReagentContext } from "./recipe_reagent_context";

export interface BattleNetRecipe {
    item: BattleNetPreviewItem;
    reagents: BattleNetRecipeReagentContext[];
    reagents_display_string: string;
}
