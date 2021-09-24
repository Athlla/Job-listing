import Image from 'next/image';

import Tag from './Tag';
import { dataType } from '../interface';

const Card = ({
  company,
  logo,
  New,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}: dataType) => {
  return (
    <div
      className={`flex flex-col lg:flex-row border-l-[6px] lg:items-center w-4/5 lg:h-32 px-6 md:px-10 mx-auto lg:mb-6 mb-16 mt- bg-white rounded-lg shadow-lg ${
        featured ? 'border-desaturated-dark-cyan' : 'border-transparent'
      }`}
    >
      <div className="relative flex items-center w-16 h-16 mr-10 -mt-10 md:w-20 md:h-20 lg:mt-0">
        <Image src={logo} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col h-full py-5 space-y-4 lg:space-y-0 lg:justify-between lg:flex-1">
        <div className="flex items-center space-x-2 text-sm md:space-x-4">
          <p className="font-bold text-desaturated-dark-cyan">{company}</p>
          {New && (
            <span className="px-2 pt-1 text-xs text-white rounded-3xl bg-desaturated-dark-cyan">
              NEW!
            </span>
          )}
          {featured && (
            <span className="px-2 pt-1 text-xs text-white rounded-3xl bg-very-dark-grayish-cyan">
              FEATURED
            </span>
          )}
        </div>
        <h2 className="text-lg font-bold">{position}</h2>
        <p className="flex space-x-1 text-xs md:text-[15px] md:space-x-3 text-dark-grayish-cyan">
          <span>{postedAt}</span>
          <span>&bull;</span>
          <span>{contract}</span>
          <span>&bull;</span>
          <span>{location}</span>
        </p>
      </div>
      <div className="flex flex-wrap gap-4 py-4 border-t-2 lg:border-none lg:flex-1 lg:p-4 lg:items-center lg:justify-end">
        <Tag>{role}</Tag>
        <Tag>{level}</Tag>
        {languages.map((lang) => (
          <Tag key={lang}>{lang}</Tag>
        ))}
        {tools.map((tool) => (
          <Tag key={tool}>{tool}</Tag>
        ))}
      </div>
    </div>
  );
};

export default Card;
