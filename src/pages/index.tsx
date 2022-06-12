import * as React from 'react';

import Layout from '@/components/layout/Layout';
import HomePageContainer from '@/container/home-page';

export default function HomePage() {
  const [searchText, setSeachText] = React.useState('');

  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeachText(e.target.value);
  };
  return (
    <Layout inputSearch={searchText} onSearch={handleSearchText}>
      <HomePageContainer searchParams={searchText} />
    </Layout>
  );
}
