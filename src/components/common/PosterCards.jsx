import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from "./Cards";
import LoadingSkeleton from './LoadingSkeleton'

const PosterCards = ({ data,loading, title }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 550) {
                setIsSmallScreen(1);
            }
            else {
                setIsSmallScreen(2)
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: isSmallScreen,
            slidesToSlide: 1
        }
    };
    if (!data) return <div className="flex gap-5 justify-center items-center overflow-hidden h-full w-full">
        {
            [...Array(3)].map((_, index) => (
                <LoadingSkeleton key={index} />
            ))
        }
    </div>
    return (
        <div className="parent mb-36">
            <h1 className="text-white font-bold  text-xl sm:text-3xl ml-3 border-l-4 border-green-500 pl-2">{title}</h1>
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={true}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
            >
                {data?.map((item) => {
                    return (
                        <Cards key={item?._id} item={item} loading={loading} />
                    );
                })}
            </Carousel>
        </div>
    );
};
export default PosterCards;






// <div className="slider" key={index}>
//                             <Link to='/movie/24234'><Img src={item?.url} alt="movie" className="select-none shadows" loading="lazy" /></Link>
//                             <div className="absolute bottom-36 -right-3 cursor-default select-none"  >
//                                 <Rating rating={4.94} />
//                             </div>
//                             <div className="flex justify-between pl-2 pr-2 mt-2 cursor-default select-none">
//                                 <div className="">
//                                     <h2 className="text-white tracking-wide text-base">{('Puss in Boots: The Last Wish').slice(0, 16) + '...'}</h2>
//                                     <span className="text-sm font-light text-gray-300">Movie</span>
//                                 </div>
//                                 <h4 className="text-gray-300 text-sm font-extralight ">21 Jan 2023</h4>
//                             </div>
//                             <div className="flex gap-2 text-gray-200 pl-2 pr-2 mt-2">
//                                 <span className="py-1 px-2 select-none bg-[#1F2937] text-sm rounded-sm">Action</span>
//                                 <span className="py-1 px-2 select-none bg-[#1F2937] text-sm rounded-sm">Fiction</span>
//                             </div>
//                         </div>