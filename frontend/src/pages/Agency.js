import React from 'react'
import VCard from '../components/VCard';
import { useGetAllAgencyQuery } from '../services/API'

const Agency = () => {
  const agencyRes = useGetAllAgencyQuery();
  return (
    <div className='flex md:flex-row flex-col gap-3 justify-center hover:justify-evenly'>
      <div className='flex flex-row gap-5 mb-5'>
        {agencyRes.data?.map((value) =>
          <div key={value.id}><VCard title={value.name} img={value.image} /></div>)}
      </div>
    </div>
  )
}

export default Agency