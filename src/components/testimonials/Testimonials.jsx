import React from 'react'
import { testimonialDatas } from '../../utils/data';
import Img from "../common/Img";

export default function Testimonials() {
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">What Other Peoples Thinks</h2>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        {testimonialDatas?.map((item,index) => (
                            <div key={index} className="items-center bg-gray-50 pt-10 rounded-lg shadow sm:flex flex-col dark:bg-gray-800 dark:border-gray-700">
                                <div>
                                    <Img className="w-36 h-36 rounded-full select-none  object-cover object-center" src={item?.imgUrl} alt={item?.userName} loading="lazy"  />
                                </div>
                                <div className="p-5 cursor-default flex flex-col justify-center items-center">
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <p >{item?.userName}</p>
                                    </h3>
                                    <span className="text-gray-500 dark:text-gray-400">{item?.profession}</span>
                                    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{item?.description}</p>
                                </div>
                            </div>
                        ))
                        }

                    </div>
                </div>
            </section>
        </>
    )
}
