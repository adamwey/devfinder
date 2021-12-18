import dayjs from 'dayjs';

interface UserHeaderProps {
  avatar: string;
  name: string;
  login: string;
  created_at: string;
}

export function UserHeader({ avatar, name, login, created_at }: UserHeaderProps) {
  return (
    <div className='flex items-start grid grid-cols-4'>
      <div className='col-span-1 flex-shrink-0 col-start-1 col-end-2'>
        <img
          src={avatar}
          alt={name}
          className='w-[70px] h-[70px] md:w-[117px] md:h-[117px] rounded-full overflow-hidden object-cover'
        />
      </div>

      <div className='flex flex-col lg:flex-row items-start justify-between w-full col-start-2 col-end-5'>
        <div>
          <h2 className='lg:text-2xl font-bold'>{name}</h2>
          <a
            href={`https://github.com/${login}`}
            className='text-primary-100 hover:underline'
          >
            @{login}
          </a>
        </div>

        <p className='text-sm'>
          Joined{' '}
          <time dateTime={created_at}>
            {dayjs(created_at).format('DD MMM YYYY')}
          </time>
        </p>
      </div>
    </div>
  );
}
