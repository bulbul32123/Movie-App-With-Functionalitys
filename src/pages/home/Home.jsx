import React from 'react'
import Hero from './Hero'
import PosterCards from '../../components/common/PosterCards'
import MovieBanner from '../../components/common/MovieBanner'
import OtherSections from '../../components/othersections/OtherSections'
import useFetch from '../../hooks/UseFetch'

export default function Home() {
  const { data, loading } = useFetch('/home')
  return (
    <>
      <div className='mb-20'>
        <Hero data={data[0]?.movies?.[Math.floor(Math.random() * 25)]} loading={loading}
        />
        <div className="mt-20 pb-10 md:pl-10 pl-4 overflow-hidden pr-4 md:pr-10">
          <PosterCards data={data[0]?.movies} loading={loading} title='Trending Movies' />
          <PosterCards data={data[1]?.movies} loading={loading} title='New Movies' />
          <MovieBanner data={data[7]?.movies?.[Math.floor(Math.random() * 25)]} loading={loading} title='Get a shot of Adrenaline' />
          <PosterCards data={data[2]?.movies} loading={loading} title='Best Animation Movies' />
          <PosterCards data={data[5]?.movies} loading={loading} title='Most Trending Shows' />
          <MovieBanner data={data[9]?.movies?.[Math.floor(Math.random() * 25)]} loading={loading} title='World Best Movies' />
          <PosterCards data={data[8]?.movies} loading={loading} title='Sci-Fi' />
          <PosterCards data={data[4]?.movies} loading={loading} title='Famility Time' />
          <PosterCards data={data[3]?.movies} loading={loading} title='Movies you can watch for Free' />
          <MovieBanner data={data[0]?.movies?.[Math.floor(Math.random() * 25)]} loading={loading} title='Enjoys With These' />
          <PosterCards data={data[6]?.movies} loading={loading} title='New Shows' />
          <OtherSections />
        </div>
      </div>

    </>
  )
}
