/* eslint-disable @next/next/no-img-element */
import { StarFilled } from '@ant-design/icons';
import { Col } from 'antd';
import React from 'react';

import { I_RESULTS } from '@/utils/type';

type MovieItemsProps = {
  moives: I_RESULTS;
};
const MovieItems = ({ moives }: MovieItemsProps) => {
  const URL_IMAGE = `https://image.tmdb.org/t/p/w342${moives.poster_path}`;

  return (
    <Col span={6} xs={12} lg={6} md={6} className='cursor-pointer p-4 '>
      <div className='relative'>
        <img
          src={`${URL_IMAGE}`}
          alt={`[${moives.poster_path}]`}
          className='h-full w-full '
        />
        <p className='fon-bold absolute top-1 left-2 mb-1 flex flex-row items-center justify-start gap-2  p-4 text-[16px] '>
          <span className='text-[red]'>{`${moives.vote_average}/10`}</span>
          <StarFilled className='text-[red]' />
        </p>
        <p className='text-center text-[18px] font-bold'> {moives.title}</p>
      </div>
    </Col>
  );
};

export default MovieItems;
