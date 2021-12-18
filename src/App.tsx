import { useState } from 'react';

import { Header, Search, UserHeader, UserLinks, UserStats } from './components';
import { useProfile } from './hooks/useProfile';
import './index.css';

export function App() {
  const [query, setQuery] = useState('');
  const [username, setUsername] = useState('abdiweyrah');
  const { data } = useProfile(username);

  function handleSubmit(e: any) {
    e.preventDefault();
    setUsername(query);
  }

  return (
    <div className='flex w-full items-center justify-center min-h-screen flex-col px-4'>
      <div className='w-full max-w-sm sm:max-w-xl lg:max-w-screen-md'>
        <Header />

        <Search
          value={query}
          onChange={(e: any) => setQuery(e.target.value)}
          onSubmit={handleSubmit}
        />

        {data && (
          <div className='bg-dark-mode-100 dark:bg-dark-mode-200 p-8 rounded-2xl flex flex-col space-y-5 lg:space-y-0'>
            <UserHeader
              avatar={data.avatar_url}
              name={data.name}
              login={data.login}
              created_at={data.created_at}
            />

            <div className='flex flex-col space-y-8 grid grid-rows-3 grid-cols-4'>
              {data.bio && (
                <p className='col-start-1 lg:col-start-2 col-end-5 text-primary-300 dark:text-dark-mode-100'>
                  {data.bio}
                </p>
              )}
              <UserStats
                repos={data.public_repos}
                followers={data.followers}
                following={data.following}
              />

              <UserLinks
                location={data.location}
                blog={data.blog}
                twitter={data.twitter_username}
                company={data.company}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
