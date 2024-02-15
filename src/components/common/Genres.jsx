import React from 'react'

export default function Genres({ data }) {
    return (
        <>
            {data?.slice(0, 2)?.map((genres, index) => {
                return (
                    <span key={index} className="py-1 px-2 select-none bg-[#1F2937] text-xs rounded-sm">{genres}</span>
                )
            })
            }
        </>
    )
}
