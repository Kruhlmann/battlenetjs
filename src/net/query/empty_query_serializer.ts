import { Serializable } from "../../data/serializable";

export class EmptyQuerySerializer implements Serializable<Record<string, unknown>> {
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    public serialize(_query: Record<string, unknown>): string {
        return "";
    }
}
