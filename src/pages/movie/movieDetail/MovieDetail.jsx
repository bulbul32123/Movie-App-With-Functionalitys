import React, { useContext, useState } from 'react'
import Img from '../../../components/common/Img'
import Rating from '../../../components/common/Rating'
import PlayIcon from '../../../components/common/PlayIcon'
import { BsFillBookmarkCheckFill, BsFillBookmarkPlusFill } from 'react-icons/bs'
import PosterCards from '../../../components/common/PosterCards'
import { useParams } from 'react-router-dom'
import useFetch from '../../../hooks/UseFetch'
import Genres from '../../../components/common/Genres'
import dayjs from 'dayjs'
import Player from '../../../components/videoPlayer/Player'
import { Contexts } from '../../../context/ContextApi'

export default function MovieDetail() {
  const { id } = useParams()
  const { data, loading } = useFetch(`/movie/${id}`)
  const [isOpenVideoPlayer, setIsOpenVideoPlayer] = useState(false);
  let ratings = data?.movie?.vote_average
  const { addCollectionsData, getCollections } = useContext(Contexts)
  return (
    <div className='w-full h-full -mt-20 '>
      <div className="relative w-full h-full">
        {loading ? (
          <div className='w-full h-[33rem] object-cover relative object-center  duration-150 bg-[#262525] animate-pulse'></div>
        ) : (
          <Img
            src={data?.movie?.backdrop_path}
            alt={data?.movie?.original_title}
            className='w-full h-[33rem] object-cover relative object-center opacity-60 select-none pointer-events-none'
          />
        )}
        <div className="h-36 w-full bg-black absolute bottom-0 blur-3xl opacity-60" />
      </div>
      <div className="flex  -mt-60 justify-center md:justify-start w-full h-full items-center pl-2 sm:pl-5 md:pl-28">
        <div className="flex flex-col md:flex-row ">
          {loading ?
            <div className='h-96 w-64 object-cover relative object-center duration-150 bg-[#262525] animate-pulse'></div>
            :
            <Img src={data?.movie?.poster_path} alt={data?.movie?.original_title} className='select-none rounded-md h-96 w-64 shadow-xl shadow-black pointer-events-none' />
          }
          <div className="relative pt-3">
            {!loading &&
              <span className='absolute max-sm:-bottom-24 max-sm:left-0  sm:right-2 md:top-16 z-20 flex gap-3 items-center'>
                <span onClick={() => setIsOpenVideoPlayer(true)}>
                  <PlayIcon />
                </span>
                <span onClick={()=>addCollectionsData(data?.movie)}>
                {getCollections?.some((item) => item?._id === data?.movie?._id) ?  
                            <BsFillBookmarkCheckFill size={50} className=' hover:scale-110 transition-all duration-500 text-[#2EC55E] hover:text-white' /> 
                            : 
                            <BsFillBookmarkPlusFill size={50} className='transition-all duration-1000 hover:scale-105  text-[#2EC55E] hover:text-white' />
                            }
                </span>
              </span>
            }

            <h1 className='text-white relative z-1 sm:pl-4 font-extrabold text-3xl'>{data?.movie?.original_title} ({dayjs(data?.movie?.release_date).format('YYYY')})</h1>
            <div className="flex gap-2 text-gray-200 sm:pl-5 pr-2 mt-2 z-1 relative">
              <Genres data={data?.movie?.genres} />
            </div>
            <div className="flex gap-2 items-center">
              <p className='relative z-1 sm:pl-5 mt-2'><Rating rating={ratings} /></p>
              <p className='text-gray-300 relative z-1  pl-2 font-bold mt-2'>{data?.movie?.vote_count} Votes Count</p>
            </div>
            <div className="max-w-lg mt-2 sm:pl-5 relative z-1">
              <h2 className='text-white font-extrabold text-xl'>Overview</h2>
              <p className='text-gray-300 text-sm' >{data?.movie?.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-2 sm:pl-10 mt-36">
        <h1 className='font-extrabold text-3xl text-white mt-5 border-l-4 border-green-500 pl-2'>More like this</h1>
        <PosterCards data={data?.similarMovies}  />
      </div>
      {isOpenVideoPlayer && <Player url={data?.movie?.youtube_trailer} setIsOpenVideoPlayer={setIsOpenVideoPlayer} />}
    </div>
  )
}
