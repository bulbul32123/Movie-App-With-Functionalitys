import React, { useContext} from 'react';
import { BsFillBookmarkPlusFill, BsFillBookmarkCheckFill } from "react-icons/bs";
import Img from './Img';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs'
import Genres from './Genres';
import { Contexts } from '../../context/ContextApi';

export default function MovieBanner({ data, loading ,title}) {
    const { addCollectionsData, getCollections } = useContext(Contexts)

    return (
        <>
            <h1 className='ml-5 border-l-4 border-green-500 pl-2 text-white font-extrabold text-xl sm:text-2xl md:text-4xl mb-5 md:mb-10'>{title}</h1>
            <div className='h-[17rem]  sm:h-[20rem] md:h-[26rem] w-full rounded-xl relative mb-64 sm:mb-36 '>
                <Link to={`/movie/${data?._id}`}>
                    {loading ?
                        <div className='absolute top-0 h-full w-full object-cover object-center duration-150 bg-[#262525] animate-pulse'></div>
                        :
                        <Img src={data?.backdrop_path} alt={data?.original_title} className='w-full h-[26rem] pointer-events-none select-none object-cover object-center rounded-lg' />
                    }
                </Link>
                <div className="absolute top-20 sm:top-0  h-full flex flex-col justify-center items-start pl-0 md:pl-16">
                    <div className="sm:max-w-xl bg-black/50 rounded-md p-4 md:p-9 cursor-default  relative">
                        <h1 className='text-2xl md:text-5xl text-white fontFamaily '>{data?.original_title} </h1>
                        <h1 className='text-gray-300 text-sm'>{(data?.overview)?.slice(0, 150) + '...'}</h1>
                        <div className="flex flex-col sm:flex-row gap-2 md:gap-4 items-start md:items-center">
                            <h3 className='text-gray-300 font-bold text-base mt-2'>{dayjs(data?.release_date).format('MMM D, YYYY')}</h3>
                            <div className="flex items-center gap-3 text-white">
                                <Genres data={data?.genres} />
                            </div>
                            <Link to='/movie/2344' className='sm:hidden inline py-2 px-3 text-sm rounded-sm bg-[#2EC55E] text-[#1F2937] transition-all duration-500 hover:bg-[#1F2937] hover:text-[#2EC55E]'>More Details</Link>
                        </div>
                        <button onClick={() => addCollectionsData(data)} className='absolute -top-4 select-none -right-5 p-2 px-3 rounded-sm mt-2 text-sm '>
                            {getCollections?.some((datas) => datas?._id === data?._id) ?  
                            <BsFillBookmarkCheckFill size={50} className=' hover:scale-110 transition-all duration-500 text-[#2EC55E] hover:text-white' /> 
                            : 
                            <BsFillBookmarkPlusFill size={50} className='transition-all duration-1000 hover:scale-105  text-[#2EC55E] hover:text-white' />
                            }
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
