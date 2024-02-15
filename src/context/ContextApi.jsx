import React, { createContext, useEffect, useState } from "react";
export const Contexts = createContext()


const getLocalCollectiondItems = () => {
    let items = localStorage.getItem('addedItemsToCollections');
    if (items) {
        return JSON?.parse(localStorage.getItem('addedItemsToCollections'));
    } else {
        return []
    }
}

export default function ContextApi({ children }) {
    const [getCollections, setGetCollections] = useState(getLocalCollectiondItems());
    const [showToast, setShowToast] = useState(false);
    const addCollectionsData = (data) => {
        const isAlreadyHas = getCollections.some((item) => item?._id === data?._id)
        if (isAlreadyHas) {
            setGetCollections((prev) => prev.filter((items) => items?._id !== data?._id))

        } else {
            setGetCollections((prev) => [...prev, data])
        }
    }
    useEffect(()=>{
        localStorage.setItem('addedItemsToCollections', JSON.stringify(getCollections))
      },[getCollections])


    return (
        <Contexts.Provider value={{
            getCollections, setGetCollections,
            showToast, setShowToast,
            addCollectionsData,
        }}>
            {children}
        </Contexts.Provider>
    )
}
