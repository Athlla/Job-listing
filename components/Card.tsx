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
  console.log(New);

  return (
    <div className="flex items-center w-4/5 h-32 px-10 mx-auto mb-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center h-full mr-10 ">
        <Image src={logo} width="80" height="80" />
      </div>
      <div className="flex flex-col justify-between flex-1 h-full py-5">
        <div className="flex items-center space-x-4 text-sm">
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
        <p className="flex space-x-3 text-dark-grayish-cyan">
          <span>{postedAt}</span>
          <span>&bull;</span>
          <span>{contract}</span>
          <span>&bull;</span>
          <span>{location}</span>
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-end flex-1 gap-4 p-4">
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
