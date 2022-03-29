import { Serializable } from "../../data/serializable";

export class QuerySerializer implements Serializable<Record<string, unknown>> {
    public serialize(query: Record<string, unknown>): string {
        const query_strings: string[] = [];
        for (const [paramter_name, parameter_value] of Object.entries(query)) {
            const encoded_name = encodeURIComponent(paramter_name);
            const encoded_value = encodeURIComponent(`${parameter_value}`);
            query_strings.push(`${encoded_name}=${encoded_value}`);
        }
        const query_string = query_strings.join("&");
        return `?${query_string}`;
    }
}
