import Card from '../components/Card';
import data from '../data.json';

const Home = () => {
  return (
    <>
      <header className="overflow-hidden h-[calc(20vh-5px)] bg-mobile-texture bg-left bg-no-repeat bg-desaturated-dark-cyan bg-cover sm:bg-desktop-pattern" />
      <main className="text-[15px] container mx-auto my-16">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </main>
    </>
  );
};

export default Home;
