import { PaginationResponse } from "./pagination";

export type SearchItemResponse = PaginationResponse<{ data: { id: number } }>;
