import React from 'react'
import useFetch from '../Utils/useFetch'

const PruebaFetchUno = () => {
 //aca usamos nuestro customhook//

const {data} = useFetch("https://jsonplaceholder.typicode.com/users",[])
console.log (data);



  return (
    <div>PruebaFetchUno</div>
  )
}

export default PruebaFetchUno