import React from 'react';

export default function Stats() {
    return (
        <>
            <div className="bg-gray-900 py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">Our Team by the numbers</h2>

                        <p className="mx-auto max-w-screen-md text-center text-gray-300 md:text-lg">Ours Movies and Tv/Shows Collections are the Best Platform in the World</p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x text-gray-300">
                        <div className="flex flex-col items-center md:p-4 ">
                            <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">10,000+</div>
                            <div className="text-sm font-semibold sm:text-base">Movies</div>
                        </div>
                        <div className="flex flex-col items-center md:p-4">
                            <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">10,000+</div>
                            <div className="text-sm font-semibold sm:text-base">Tv/Shows</div>
                        </div>
                        <div className="flex flex-col items-center md:p-4">
                            <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">1,000+</div>
                            <div className="text-sm font-semibold sm:text-base">Customers</div>
                        </div>
                        <div className="flex flex-col items-center md:p-4">
                            <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">2,000+</div>
                            <div className="text-sm font-semibold sm:text-base">People</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
