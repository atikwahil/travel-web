import React from "react";
import VCard from "../components/VCard";
import { useGetAllHotelsQuery } from "../services/API";

function Hotel() {
  const response = useGetAllHotelsQuery();
  return (
    <div className="flex md:flex-row flex-col gap-5">
    {
      response.data?.map((value) =>
      <div key={value.id}>
        <VCard title={value.name} img={value.image}/>
      </div>
      )
    }
    </div>
  )
}

export default Hotel;
