import React from 'react'
import VCard from '../components/VCard';
import { useGetAllAgencyQuery, useGetAllHotelsQuery, useGetAllResturantQuery } from '../services/API'
import Agency from './Agency';
import Hotel from './Hotel';
import Resturent from './Resturent';

function Home() {
  const hotelRes = useGetAllHotelsQuery();
  console.log(hotelRes.data);
  const agencyRes = useGetAllAgencyQuery();
  return (
    <div className='container m-5'>
      <div className='mt-5'>
        <h1 className='text-xl p-3 font-bold'>List of Hotel</h1>
        <Hotel />
      </div>
      <div className='mt-8'>
        <h1 className='text-xl p-3 font-bold'>List of Hotel</h1>
        <Resturent />
      </div>
      <div className='mt-8'>
        <h1 className='text-xl p-3 font-bold'>List of Hotel</h1>
        <Agency />
      </div>

    </div>
  )
}

export default Home;