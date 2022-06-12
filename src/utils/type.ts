export type MoviesType = {
  dates: DATES_TYPE;
  page: number;
  results: Array<I_RESULTS>;
  total_pages: number;
  total_results: number;
};

export type DATES_TYPE = {
  maximum: string;
  minimum: string;
};
export interface I_RESULTS {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
}

export type ResponseMoviesType = {
  data: MoviesType;
};
