import Card from '../components/Card';
import data from '../data.json';
import Tag from '../components/Tag';
import { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';

const Home = () => {
  const { tags, clear } = useContext(FilterContext);

  console.log(tags);

  return (
    <>
      <header className="overflow-hidden h-[calc(20vh-5px)] bg-mobile-texture bg-left bg-no-repeat bg-desaturated-dark-cyan bg-cover sm:bg-desktop-pattern" />
      <main className="text-[15px] container mx-auto my-16 relative">
        <div className="flex w-4/5 px-8 py-4 mx-auto mb-16 -mt-24 bg-white rounded-lg shadow-lg lg:mb-6 mb-16lg:mb-6">
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
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </main>
    </>
  );
};

export default Home;
