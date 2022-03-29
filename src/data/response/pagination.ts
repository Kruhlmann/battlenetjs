export interface PaginationResponse<ResultType> {
    page: number;
    pageSize: number;
    maxPageSize: number;
    pageCount: number;
    results: ResultType[];
}
