import axios from 'axios';

import { QueryParams } from '@/contants/common.constants';
import { API_KEY, END_POINT, LANGUGE } from '@/contants/URL.constants';
import { MoviesType } from '@/utils/type';

type ResponseType = {
  data: MoviesType;
};
export const getMovies = async ({ page }: QueryParams) => {
  const { data }: ResponseType = await axios.get(
    `${END_POINT}?api_key=${API_KEY}&language=${LANGUGE}&page=${page}`
  );
  return data;
};
