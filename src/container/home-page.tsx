import { Row, Spin } from 'antd';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';

import MovieItems from '@/components/movies';

import { API_KEY, END_POINT, LANGUGE } from '@/contants/URL.constants';
import { GET_MOVIES_API } from '@/utils/contants';
import { ResponseMoviesType } from '@/utils/type';

// eslint-disable-next-line unused-imports/no-unused-vars
const HomePageContainer = ({ searchParams }: { searchParams: string }) => {
  const { ref, inView } = useInView();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    GET_MOVIES_API,
    async ({ pageParam = 1 }) => {
      const { data }: ResponseMoviesType = await axios.get(
        `${END_POINT}?api_key=${API_KEY}&language=${LANGUGE}&page=${pageParam}`
      );
      return data;
    },
    {
      getNextPageParam: ({ page, total_pages }) => {
        const nextPage = page + 1;
        const hasNext = nextPage <= total_pages ? nextPage : undefined;
        return hasNext;
      },
    }
  );

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, hasNextPage]);

  return (
    <div className='p-5'>
      <h3>Movie List </h3>

      {status === 'loading' ? (
        <div className='w-full text-center'>
          <Spin />
        </div>
      ) : (
        <Row className='gap-4'>
          {data?.pages.map((movie, i) => (
            <div key={i} className='flex flex-row flex-wrap'>
              {movie.results.map((movies, key) => (
                <MovieItems key={key} moives={movies} />
              ))}
            </div>
          ))}
        </Row>
      )}
      <div ref={ref} />
      <div className='w-full text-center'>
        {isFetching && !isFetchingNextPage ? <Spin /> : null}
      </div>
    </div>
  );
};

export default HomePageContainer;
