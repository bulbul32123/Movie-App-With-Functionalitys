import React, { useContext } from 'react';
import Img from '../../components/common/Img';
import Genres from '../../components/common/Genres';
import dayjs from 'dayjs'
import { Contexts } from '../../context/ContextApi';

export default function Hero({ data, loading }) {
    const { addCollectionsData, getCollections } = useContext(Contexts)

    return (
        <>
            <div className="bg-transparent pb-6 sm:pb-8 lg:pb-12 pt-5 border-b border-gray-500 ">
                <div className="mx-auto px-4 md:px-8">
                    <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-start overflow-hidden rounded-lg  py-16  md:py-20 xl:py-48">
                        {loading ?
                            <div className='absolute top-0 h-full w-full object-cover object-center duration-150 bg-[#262525] animate-pulse'></div>
                            :
                            <Img src={data?.backdrop_path} alt={data?.original_title} className="absolute top-0 h-full pointer-events-none select-none w-full object-cover object-center" loading='lazy' height={100} width={100} />
                        }
                        <div className="absolute -bottom-5 w-full h-60 bg-black blurBg"></div>
                        <div className="relative  flex flex-col items-start p-4 pl-10  sm:max-w-xl">
                            <h1 className="fontFamaily text-left  text-white  mb-3 md:text-5xl">{data?.original_title}</h1>
                            <div className="flex gap-3 items-center text-white mb-3">
                                <Genres data={data?.genres} />
                                <span>{dayjs(data?.release_date).format('MMM D, YYYY')}</span>
                            </div>
                            <p className="text-left text-xs text-indigo-200 sm:text-sm mb-4">{(data?.overview)?.slice(0, 250)}</p>

                            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-start">
                                <button onClick={()=>addCollectionsData(data)} className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">{getCollections?.some((item) => item?._id == data?._id) ? 'Collection is Added' : 'Add to Collection'}</button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
