import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import ReactPlayer from 'react-player'

export default function Player({ url, setIsOpenVideoPlayer }) {
    return (
        <div className='fixed top-0 flex justify-center items-center h-screen w-full bg-black/50  z-20'>
            <span onClick={() => setIsOpenVideoPlayer(false)} className='absolute z-10 top-5 cursor-pointer right-5 bg-white/50 p-2 rounded-full'><RxCross2 size={35} className='hover:scale-110 text-white transition-all duration-300 ' /></span>
            <ReactPlayer url={url} playing loop controls />
        </div>
    )
}
