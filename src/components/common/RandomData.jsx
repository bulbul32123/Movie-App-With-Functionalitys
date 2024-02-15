import React, { useEffect, useState } from 'react'

export default function RandomData({ data }) {
  const [randomData, setRandomData] = useState([]);
  console.log(data);

  useEffect(() => {

    let RandomElement = Math.floor(Math.random() * length)
    setRandomData(data[RandomElement])
    console.log(randomData);
  }, [data])
  return randomData
}
