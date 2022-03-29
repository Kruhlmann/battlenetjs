export interface Serializable<TargetType> {
    serialize(target: TargetType): string;
}
