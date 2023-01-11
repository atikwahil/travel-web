import React from 'react'
import VCard from '../components/VCard'
import { useGetAllResturantQuery } from '../services/API'

function Resturent() {
  const resturantRes = useGetAllResturantQuery();
  return (
    <div className='flex md:flex-row flex-col gap-3 justify-center hover:justify-evenly'>

      <div className='flex flex-row gap-5 mb-5'>
        {resturantRes.data?.map((value) =>
          <div key={value.id}><VCard title={value.name} img={value.image}/></div>)}
      </div>
    </div>

  )
}

export default Resturent