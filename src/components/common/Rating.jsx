import React from 'react'

export default function Rating({ rating }) {
    return (
        <div className='flex justify-center items-center h-12 w-12 rounded-full bg-[#2EC55E] shadowss'>
            <span className='text-white text-sm'>{(rating)?.toFixed(1)}</span>
        </div>
    )
}
