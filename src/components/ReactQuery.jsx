import React from "react";
import { useQuery } from "react-query";

export default function ReactQuery() {
  const [pokemon, setPokemon] = React.useState('')
  async function getPokemon() {
    return await (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)).json()
  }
  const { data, isLoading, isFetching, refetch } = useQuery("pokemon", getPokemon, {
    enabled: false
  })
  console.log({isLoading, isFetching})
  
  return(
    <div style={{display: "flex", flexDirection: "column"}}>
      <input type="text" onChange={e => setPokemon(e.target.value)} />
      <button onClick={() => refetch()}>GET POKEMON</button>
      {isFetching || isLoading
        ? 
        <div>Something is happening...</div>
        :
        <div>
          <div>{JSON.stringify(data?.name)}</div>
          <div>{JSON.stringify(data?.id)}</div>
          <div>{JSON.stringify(data?.types)}</div>
        </div>
      }
    </div>
  )
}
