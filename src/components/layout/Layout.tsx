import * as React from 'react';

import Header from './Header';
type LayoutProps = {
  children: React.ReactNode;
  inputSearch?: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function Layout({
  inputSearch,
  children,
  onSearch,
}: LayoutProps) {
  return (
    <div>
      <Header inputSearch={inputSearch} onSearch={onSearch} />
      <div className='m-auto max-w-screen-2xl'>{children}</div>
    </div>
  );
}
