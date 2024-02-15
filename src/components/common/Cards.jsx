import React, { useContext } from 'react'
import Img from './Img'
import { Link } from 'react-router-dom';
import dayjs from 'dayjs'

import Genres from './Genres'
import { Contexts } from '../../context/ContextApi';

export default function Cards({ item, loading }) {
    const { addCollectionsData, getCollections } = useContext(Contexts)
    return (
        <div className="slider">
            <Link to={`/movie/${item?._id}`}>
                {loading ? <div className="h-80 rounded-md duration-150 bg-[#262525] animate-pulse w-full"></div> :
                    <Img src={item?.poster_path} alt={item?.original_title || item?.title} className="select-none shadows" loading="lazy" />
                }
            </Link>
            <div className="flex justify-between pl-2 pr-1 mt-2 cursor-default select-none">
                <div className="">
                    <h2 className="text-white tracking-wide text-base">{(item?.original_title || item?.title)?.slice(0, 16) + '...'}</h2>
                </div>
                <h4 className="text-gray-300 text-xs font-extralight ">{item?.release_date || item?.first_aired ? dayjs(item?.release_date || item?.first_aired).format('MMM D, YYYY') : ''}</h4>
            </div>
            <div className="flex gap-2 text-gray-200 pl-2 pr-2 mt-2">
                <Genres data={item?.genres} />
            </div>
            <button className='py-1 px-2 select-none bg-green-500 text-black font-medium tracking-wide ml-2 pr-2 mt-2 rounded-sm' onClick={() => addCollectionsData(item)}>{getCollections?.some((data) => data?._id == item?._id) ? 'Collection is Added' : 'Add to Collection'}</button>
        </div>
    )
}
