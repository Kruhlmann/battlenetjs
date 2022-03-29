import { BattleNetItemLevelRequirement } from "./level_requirement";
import { BattleNetItemSkillRequirement } from "./skill_requirement";

export interface BattleNetItemRequirements {
    level?: BattleNetItemLevelRequirement;
    skill?: BattleNetItemSkillRequirement;
}
