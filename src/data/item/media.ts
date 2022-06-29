import { BattleNetLink } from "../common/link"
import { BattleNetItemAsset } from "./asset"

export interface BattleNetItemMedia {
    _links: Record<string, BattleNetLink>;
    assets: BattleNetItemAsset[]
    id: number;
}
