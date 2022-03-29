import { Profession } from "../profession/profession";

export interface BattleNetItemSkillRequirement {
    profession: Profession;
    level: number;
    display_string: number;
}
