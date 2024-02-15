import React from 'react'

export default function Spinner() {
    return (
        <div className='flex justify-center bg-transparent items-center'>
            <img src="/images/Spinner.gif" alt="Loading" title='Loading' className={`bg-transparent w-9 h-9`} />
        </div>
    )
}
