interface UserStatsProps {
  repos: number;
  followers: number;
  following: number;
}

export function UserStats({ repos, followers, following }: UserStatsProps) {
  return (
    <div className='flex items-center bg-primary-500 dark:bg-dark-mode-300 rounded-[10px] px-8 py-3 col-start-1 lg:col-start-2 col-end-5'>
      <ul className='flex justify-between text-center w-full'>
        <li className='flex flex-col space-y-1'>
          <p className='text-xs dark:text-opacity-75 dark:text-dark-mode-100 text-primary-400 text-opacity-75 text-sm'>
            Repos
          </p>
          <h3 className='lg:text-2xl font-bold'>{repos}</h3>
        </li>
        <li className='flex flex-col space-y-1'>
          <p className='text-xs dark:text-opacity-75 dark:text-dark-mode-100 text-primary-400 text-opacity-75 text-sm'>
            Followers
          </p>
          <h3 className='lg:text-2xl font-bold'>{followers}</h3>
        </li>
        <li className='flex flex-col space-y-1'>
          <p className='text-xs dark:text-opacity-75 dark:text-dark-mode-100 text-primary-400 text-opacity-75 text-sm'>
            Following
          </p>
          <h3 className='lg:text-2xl font-bold'>{following}</h3>
        </li>
      </ul>
    </div>
  );
}
