import React from 'react'
import useFetch from '../Utils/Hooks/useFetch'

const PruebaFetchUno = () => {

const {data} = useFetch("https://jsonplaceholder.typicode.com/users",[])

console.log (data)



  return (
    <div>
      {

      data?.map ( user => <h4 key={user.id}>{user.name}</h4> )

      }

      <h2>acá finaliza el componente 1 ----------</h2>
    </div>
  )
}

export default PruebaFetchUno