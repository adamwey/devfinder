import clsx from 'clsx';

import { BuildingIcon, LinkIcon, LocationIcon, TwitterIcon } from './Icons';

interface UserLinksProps {
  location: string;
  blog: string;
  twitter: string;
  company: string;
}

export function UserLinks({ location, blog, twitter, company }: UserLinksProps) {
  return (
    <div className='col-start-1 col-end-5 lg:col-start-2'>
      <div className='flex flex-col space-x-0 space-y-4 lg:flex-row lg:space-y-0 lg:space-x-10 text-primary-300 dark:text-dark-mode-100'>
        <ul className='flex flex-col space-y-4'>
          <li
            className={clsx('flex items-center space-x-2', {
              'text-primary-300 text-opacity-50': !location,
            })}
          >
            <LocationIcon />
            <p>{location ? location : 'Not Available'}</p>
          </li>

          <li
            className={clsx('flex items-center space-x-2', {
              'text-primary-300 text-opacity-50': !blog,
            })}
          >
            <LinkIcon />
            <a href={blog} target='_blank' className='hover:underline'>
              {blog ? blog : 'Not Available'}
            </a>
          </li>
        </ul>
        {/* : 'text-opacity-75 text-primary-200' */}
        <ul className='flex flex-col space-y-4'>
          <li
            className={clsx('flex items-center space-x-2', {
              'text-primary-300 text-opacity-50': !twitter,
            })}
          >
            <TwitterIcon />
            <a
              href={twitter && `https://twitter.com/${twitter}`}
              target='_blank'
              className={twitter && 'hover:underline truncate'}
            >
              {twitter ? twitter : 'Not Available'}
            </a>
          </li>

          <li
            className={clsx('flex items-center space-x-2', {
              'text-primary-300 text-opacity-50': !company,
            })}
          >
            <BuildingIcon />
            <span>{company ? company : 'Not Available'}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
