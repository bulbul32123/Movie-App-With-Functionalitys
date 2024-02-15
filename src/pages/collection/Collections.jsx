import React, { useContext } from 'react'
import { Contexts } from '../../context/ContextApi';
import CollectionsCard from '../../components/common/CollectionsCard';

export default function Collections() {
    const {  getCollections } = useContext(Contexts)
    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className='text-3xl font-extrabold mb-8 border-l-4 border-green-500 pl-2'>Your Collections</h1>
                    <div className="flex flex-wrap -m-4">
                        {getCollections?.map((item) => {
                            return (
                               <CollectionsCard key={item?._id} item={item} />
                            )
                        })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
