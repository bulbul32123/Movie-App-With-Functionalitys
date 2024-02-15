import React, { useState } from 'react';
import dayjs from 'dayjs'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import { BsFillBookmarkPlusFill, BsFillBookmarkCheckFill } from "react-icons/bs";
import Genres from './Genres';
import Img from './Img';

export default function Carousels({ data, loading }) {
    const [isSave, setIsSave] = useState(false);
    return (
        <div className="banner mb-36">
            <h1 className='text-white font-extrabold text-4xl mb-10 border-l-4 border-green-500 pl-2'>Enjoy with Movies</h1>
            <Carousel
                className=""
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
            >
                {data?.movies?.map((item) => (
                    <div
                        style={{ textDecoration: "none", color: "white" }} key={item?._id}
                    >
                        <Link to={`/movie/${item?._id}`} className="poster">
                            <Img
                                src={item?.backdrop_path} alt={item?.original_title} loading='lazy' className='pointer-events-none select-none'
                            />
                        </Link>
                        <div className="poster-overlay rounded-md">
                            <button onClick={() => setIsSave(true)} className='absolute -top-4 select-none -right-5 p-2 px-3 rounded-sm mt-2 text-sm '>
                                {isSave ? <BsFillBookmarkCheckFill size={50} className=' hover:scale-110 transition-all duration-500 text-[#2EC55E] hover:text-white' /> : <BsFillBookmarkPlusFill size={50} className='transition-all duration-1000 hover:scale-105  text-[#2EC55E] hover:text-white' />}
                            </button>
                            <div className="poster-title text-white">
                                {item?.original_title}
                            </div>
                            <div className="poster text-gray-200">
                                {dayjs(item?.release_date).format('MMM D, YYYY')}
                                <span className="flex items-center gap-2">
                                    <Genres data={item?.genres} />
                                </span>
                            </div>
                            <div className="poster-description text-gray-300">
                                {(item?.overview).slice(0, 350) + '...'}
                            </div>
                        </div>

                    </div>
                ))
                }


                {/* ))} */}
            </Carousel>
        </div>
    )
}
