import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import Cards from '../../components/common/Cards';
import useFetch from '../../hooks/UseFetch';

export default function Explore() {
  const { media } = useParams();
  const [visibleItems, setVisibleItems] = useState(10);
  const { data, loading, setLoading } = useFetch(`/${media}`)

  const handleLoadMore = async () => {
    setLoading(true);
    await setVisibleItems(prevVisibleItems => prevVisibleItems + 10);
    setLoading(false)
  };

  return (
    <>
      <h1 className='font-extrabold border-l-4 border-green-500  text-3xl ml-10 pl-2 mt-10 mb-5 text-white'>{media === 'movies' ? 'Movies' : 'Tv/Shows'}</h1>
      <div className='flex justify-center items-center h-full w-full'>
        <div className='grid md:grid-cols-4 gap-4 pl-10 pr-10'>
          {data?.movies?.slice(0, visibleItems)?.map((item, index) => (
            <Cards key={index} item={item} loading={loading} />
          ))}
        </div>
      </div>
      {visibleItems < data?.movies?.length && (
        <div className="flex justify-center mt-4 mb-10 w-full h-full">
          <button onClick={handleLoadMore} className="bg-green-500 hover:bg-green-600 transition-all duration-500  text-white font-bold py-2 px-4 rounded">
            {loading ? <div className='flex gap-1 justify-center rounded-md items-center w-full h-full '> <p className='text-sm '>Loading More</p> <Spinner /> </div> : 'Load More'}
          </button>
        </div>
      )}
    </>
  );
}
