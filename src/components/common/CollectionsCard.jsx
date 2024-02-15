import React, { useContext, useEffect, useState } from 'react';

import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from 'react-router-dom';
import dayjs from 'dayjs';
import Genres from './Genres';
import Img from './Img';
import { Contexts } from '../../context/ContextApi';
import Player from '../videoPlayer/Player';

export default function CollectionsCard({ item }) {
    const { setGetCollections } = useContext(Contexts)
    const [isOpenVideoPlayer, setIsOpenVideoPlayer] = useState(false);
    const [showCrossIcon, setShowCrossIcon] = useState(true);
    const location = useLocation()
    console.log((location.pathname).slice(0, 8));

    useEffect(() => {
        if ((location.pathname).slice(0, 8) === '/search/') {
            setShowCrossIcon(false)
        }
        else {
            setShowCrossIcon(true)
        }
    }, item)
    if (!item) return
    return (
        <>
            {item ? (
                <>
                    <div className="p-4 md:w-1/3" key={item?._id}>
                        <div className="h-full relative border-2 border-gray-800 rounded-lg overflow-hidden">
                            <Link to={`/movie/${item?._id}`}><Img className="h-full pointer-events-none select-none w-full object-cover object-center" src={item?.poster_path} alt="blog" /> </Link>
                            {showCrossIcon && <span onClick={() => setGetCollections((prev) => prev?.filter((data) => data?._id !== item?._id))} className='absolute z-10 top-3 cursor-pointer right-3 bg-black/50 p-2 rounded-full'><RxCross2 size={20} className='hover:scale-110 text-green-500 transition-all duration-300 ' /></span>}
                            <div className="p-6">
                                <h1 className="title-font text-xl tracking-wider text-white font-light mb-1">{(item?.original_title || item?.title)?.slice(0, 16) + '...'}</h1>
                                <p className="leading-relaxed text-sm mb-3 text-gray-300">{(item?.overview)?.slice(0, 100)}</p>
                                <div className="flex items-center flex-wrap ">
                                    <div className="flex gap-2 text-gray-200 pl-2 pr-2 mt-2">
                                        <Genres data={item?.genres} />
                                    </div>
                                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                        {item?.release_date || item?.first_aired ? dayjs(item?.release_date || item?.first_aired).format('MMM D, YYYY') : ''}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {isOpenVideoPlayer && <Player url={item?.youtube_trailer} setIsOpenVideoPlayer={setIsOpenVideoPlayer} />}

                </>
            ) : <h1 className="text-white font-bold text-3xl text-center">Sorry Movies or Tv/Show Not Found...</h1>
            }
        </>
    )
}
