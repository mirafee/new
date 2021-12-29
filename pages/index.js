import BigGuy from '../components/bigguy';
import Hero from '../components/hero';

export default function Home() {

    return (
      <>
      <div className="bg-gray-50 flex items-center justify-center">
        <div className="m-2 bg-gray-200 w-full h-full relative overflow-hidden flex justify-center items-center">
          <div className="blur-xl opacity-60 h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
          <div className="blur-xl opacity-60 h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
            <Hero />
        </div>
      </div>
      <BigGuy />
      </>
    )
}


