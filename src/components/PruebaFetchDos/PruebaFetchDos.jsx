import React from "react";
import useFetch from '../Utils/Hooks/useFetch'
const PruebaFetchDos = () => {
  
    const { data } = useFetch("https://jsonplaceholder.typicode.com/albums", []);

  return (
    <div>
      
      {data?.map(album => (
        <h3 key={album.id}>{album.title}</h3>
      ))}
      <h2>acá finaliza el componente 2 ----------</h2>
    </div>
  );
};

export default PruebaFetchDos;
