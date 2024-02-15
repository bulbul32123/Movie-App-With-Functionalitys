import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { Contexts } from '../../context/ContextApi';
import { useAuth0 } from '@auth0/auth0-react';
import Toast from '../common/Toast';


export default function Navbar() {
    const [isSeachBarOpen, setIsSeachBarOpen] = useState(false);
    const { setShowToast,showToast } =  useContext(Contexts)
    const { isAuthenticated } = useAuth0();
    const { getCollections } = useContext(Contexts)
    const [query, setQuery] = useState()
    const navigate = useNavigate()
    const hanldeSearchQuery = (e) => {
        if (e.key === 'Enter' && query?.length > 0) {
            navigate(`/search/${query}`)
            setIsSeachBarOpen(false)
        }
    }

    const handleNavigate = () => {
        if (isAuthenticated) {
            navigate('/collections')
        }
        else {
            setShowToast(true)
        }
    }
    return (
        <>
            <header className="text-gray-400  body-font sticky top-0 z-[20]">
                <div className="container relative mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                {showToast && <Toast />}
                    {isSeachBarOpen &&
                        <div className="absolute -bottom-16 left-0 w-full h-16 bg-black transition-all duration-500">
                            <input type="text" className='w-full bg-black text-white h-full pl-2 pr-12 outline-none border-none' value={query} placeholder='Search Movies or Tv/Shows....' onChange={(e) => setQuery(e.target.value)} onKeyUp={hanldeSearchQuery} />
                            <span onClick={() => setQuery('')} className='absolute right-3 top-4 bg-gray-800  p-1 rounded-sm'><RxCross2 size={20} color='green' /></span>
                        </div>}
                    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                        <Link to='/explore/movies' className="mr-5 hover:text-white">Movies</Link>
                        <Link to='/explore/shows' className="mr-5 hover:text-white">Tv/Shows</Link>
                        <button className="mr-5 hover:text-white" onClick={() => setIsSeachBarOpen((prev) => !prev)}>Search</button>
                    </nav>
                    <Link to='/' className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl xl:block lg:hidden">MovieSpace</span>
                    </Link>
                    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                        <button onClick={handleNavigate} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded mr-2 text-base mt-4 md:mt-0">Collections{getCollections?.length > 0 ? <div className="pl-1 ">{(getCollections?.length)} </div> : null}
                        </button>
                        <Link to='/profile' className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Profile
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}
