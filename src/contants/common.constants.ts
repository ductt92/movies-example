export interface QueryParams {
  page: number;
  search?: string;
}

export const QUERY_PARAMS: QueryParams = {
  page: 1,
  search: '',
};
