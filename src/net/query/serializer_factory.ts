import { EmptyQuerySerializer } from "./empty_query_serializer";
import { QuerySerializer } from "./query_serializer";

export class QuerySerializerFactory {
    public get_serializer(query: Record<string, unknown>) {
        if (Object.keys(query).length > 0) {
            return new QuerySerializer();
        }
        return new EmptyQuerySerializer();
    }
}
