import { useContext } from 'react';

import { FilterContext } from '../context/FilterContext';
import Attribution from '../components/Attribution';
import Card from '../components/Card';
import Tag from '../components/Tag';
import data from '../data.json';

const Home = () => {
  const { tags, clear } = useContext(FilterContext);

  const newData = data.map((item) => ({
    ...item,
    tags: [item.role, item.level, ...item.languages, ...item.tools],
  }));

  const filteredData = newData.filter((itemData) =>
    tags.every((tag) => itemData.tags.includes(tag))
  );

  return (
    <>
      <header className="overflow-hidden h-[calc(20vh-5px)] bg-mobile-texture bg-left bg-no-repeat bg-desaturated-dark-cyan bg-cover sm:bg-desktop-pattern" />
      <main className="text-[15px] container mx-auto my-16 relative">
        <div
          className={`flex w-4/5 px-8 py-4 mx-auto mb-16 -mt-24 bg-white rounded-lg shadow-lg lg:mb-6 mb-16lg:mb-6 ${
            tags.length === 0 && 'hidden'
          }`}
        >
          <div className="flex flex-wrap items-center flex-1 gap-2">
            {tags.map((tag) => (
              <Tag key={tag} close>
                {tag}
              </Tag>
            ))}
          </div>
          <div className="flex items-center">
            <p
              className="text-sm font-bold underline cursor-pointer text-desaturated-dark-cyan"
              onClick={clear}
            >
              Clear
            </p>
          </div>
        </div>
        {filteredData.map((item) => (
          <Card key={item.id} {...item} />
        ))}

        <Attribution />
      </main>
    </>
  );
};

export default Home;
