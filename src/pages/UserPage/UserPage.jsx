import React from 'react'
import Img from '../../components/common/Img';
import { useAuth0 } from "@auth0/auth0-react";

export default function UserPage() {
    const { loginWithRedirect, logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <>
            <h1 className='text-white font-light text-4xl pt-40 pb-10 pl-5 md:pl-20'>{user?.nickname ? user?.nickname + "'s" : 'Guest'} Profile</h1>
            <div className='flex justify-center items-center h-full w-full mb-40'>
                <div className="">
                    {isAuthenticated ?
                        <>
                            <Img src={user?.picture} className='w-40 h-40 pointer-events-none select-none object-cover object-center rounded-full' alt={user?.nickname} />
                            <h1 className='text-white text-3xl font-bold mt-2 mb-2'>{user?.nickname}</h1>
                            <h3 className='text-gray-300 text-xl mb-5 font-semibold'>{user?.email}</h3>
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='py-2 px-3 bg-green-500 rounded-md'>
                                Log Out
                            </button>
                        </>
                        :
                        <>
                            <Img src='/images/astro.jpg' className='w-40 h-40 pointer-events-none select-none object-cover object-center rounded-full' />
                            <h1 className='text-white text-3xl font-bold text-center mt-2 mb-2'>Guest</h1>
                            <h3 className='text-gray-300 text-xl mb-5 text-center font-semibold'>guest369@gmail.com</h3>
                            <button onClick={() => loginWithRedirect()} className='py-2 px-3 bg-green-500 rounded-md'>Login</button>
                        </>
                    }
                </div>
            </div>
        </>
    )
}
