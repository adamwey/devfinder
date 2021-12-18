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
    <div className='col-start-1 lg:col-start-2 col-end-5'>
      <ul className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-10 text-primary-300 dark:text-dark-mode-100'>
        <div className='flex flex-col space-y-4'>
          <li className='flex space-x-2 items-center'>
            <LocationIcon />
            <p>{location ? location : 'Not Available'}</p>
          </li>

          <li className='flex space-x-2 items-center'>
            <LinkIcon />
            <p>{blog ? blog : 'Not Available'}</p>
          </li>
        </div>

        <div className='flex flex-col space-y-4'>
          <li className='flex space-x-2 items-center'>
            <TwitterIcon />
            <a>{twitter ? twitter : 'Not Available'}</a>
          </li>

          <li className='flex space-x-2 items-center'>
            <BuildingIcon />
            <span>{company ? company : 'Not Available'}</span>
          </li>
        </div>
      </ul>
    </div>
  );
}
