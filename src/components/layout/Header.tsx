import { Input } from 'antd';
import Image from 'next/image';
import React from 'react';

const LOGO = '/images/dark-logo.webp';
type HeaderProps = {
  inputSearch?: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function Header({ inputSearch, onSearch }: HeaderProps) {
  return (
    <header className='sticky top-0 z-50 bg-white shadow-md'>
      <div className='layout flex h-14 items-center justify-between gap-10'>
        <Image
          src={LOGO}
          width={160}
          height={48}
          alt='[logo]'
          className='sm:w-full'
        />
        <Input
          placeholder='Search Movie ...'
          onChange={onSearch}
          defaultValue={inputSearch}
        />
      </div>
    </header>
  );
}
