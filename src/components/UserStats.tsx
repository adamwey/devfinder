interface UserStatsProps {
  repos: number;
  followers: number;
  following: number;
}

export function UserStats({ repos, followers, following }: UserStatsProps) {
  return (
    <div className='flex items-center bg-primary-500 dark:bg-dark-mode-300 rounded-[10px] px-8 lg:py-3 py-0 col-start-1 lg:col-start-2 col-end-5'>
      <ul className='flex justify-between w-full text-center'>
        <li className='flex flex-col space-y-1'>
          <p className='text-xs text-sm text-opacity-75 dark:text-opacity-75 dark:text-dark-mode-100 text-primary-400'>
            Repos
          </p>
          <h3 className='font-bold lg:text-2xl'>{repos}</h3>
        </li>
        <li className='flex flex-col space-y-1'>
          <p className='text-xs text-sm text-opacity-75 dark:text-opacity-75 dark:text-dark-mode-100 text-primary-400'>
            Followers
          </p>
          <h3 className='font-bold lg:text-2xl'>{followers}</h3>
        </li>
        <li className='flex flex-col space-y-1'>
          <p className='text-xs text-sm text-opacity-75 dark:text-opacity-75 dark:text-dark-mode-100 text-primary-400'>
            Following
          </p>
          <h3 className='font-bold lg:text-2xl'>{following}</h3>
        </li>
      </ul>
    </div>
  );
}
