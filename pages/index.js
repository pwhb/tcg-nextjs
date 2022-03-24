import Card from '../components/card'
import Layout from '../components/layout'
import Filter from '../components/filter'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import useCard, { BASE_URL, PAGE_SIZE } from '../lib/hooks/useCard'
import CircularProgress from '../components/circular_progress'



export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${BASE_URL}/cards?pageSize=${PAGE_SIZE}`)
  const { data: initialCards } = await res.json()

  return { props: { initialCards } }
}



export default function Home({ initialCards, types, sets }) {
  const { loading, filters } = useSelector((state) => state.cards)
  const { initialFetch, fetchMore, filteredCards } = useCard()


  const cards = filteredCards()
  useEffect(() => {
    initialFetch(initialCards)
  }, [])

  return (
    <Layout>

      <Filter />
      {cards ? <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10 p-10'>

        {cards.map((card, idx) => <Card card={card} idx={idx} key={idx} />)}
      </div> : <p>Loading...</p>
      }

      {loading ? <CircularProgress /> :

        <button className='btn btn-ghost normal-case rounded-full text-gray-400 hover:text-gray-600 gap-4' onClick={fetchMore}>
          <img src='https://www.svgrepo.com/show/14071/search.svg' className='w-4 h-4' />
          <p>show more</p>
        </button>}


    </Layout >

  )
}
