import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchDataFromApi } from '../../api/api'
import CollectionsCard from '../../components/common/CollectionsCard';

export default function SearchResult() {
    const { query } = useParams()
    const [searchdata, setSearchData] = useState([]);
    const [loading, setLoading] = useState(false);
    const getSearchData = async () => {
        try {
            setLoading(true)
            const data = await fetchDataFromApi('/search', { query: query })
            setSearchData(data)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getSearchData()
    }, [query])
    if (searchdata?.contents?.length <= 0) return <h1 className='font-bold text-xl md:text-3xl text-white mb-20 pl-5 mt-10   capitalize'>Sorry Movies or Tv/Shows not Found....</h1>
    return (
        <>
            <div className="container px-5 py-24 mx-auto">
                <h1 className='font-bold text-3xl text-white mb-5  capitalize'>{searchdata?.query}</h1>
                <div className="flex flex-wrap -m-4">
                    {
                        searchdata?.contents?.map((item) => (
                            <CollectionsCard key={item?._id} item={item} loading={loading} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
