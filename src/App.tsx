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
    setQuery('');
  }

  return (
    <div className='flex flex-col items-center justify-center w-full min-h-screen px-4'>
      <div className='w-full max-w-sm sm:max-w-xl lg:max-w-screen-md'>
        <Header />

        <Search
          value={query}
          onChange={(e: any) => setQuery(e.target.value)}
          onSubmit={handleSubmit}
        />

        {data && (
          <div className='flex flex-col p-8 space-y-5 bg-dark-mode-100 dark:bg-dark-mode-200 rounded-2xl lg:space-y-0'>
            <UserHeader
              avatar={data.avatar_url}
              name={data.name}
              login={data.login}
              created_at={data.created_at}
            />

            <div className='grid grid-cols-4 grid-rows-3 space-y-8'>
              {data.bio && (
                <p className='col-start-1 col-end-5 lg:col-start-2 text-primary-300 dark:text-dark-mode-100'>
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
