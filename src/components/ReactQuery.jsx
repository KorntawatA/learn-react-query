import React from "react";
import { useQuery } from '@tanstack/react-query'

export default function ReactQuery() {
  const [input, setInput] = React.useState('')
  const getPokemon = async ({ queryKey }) => {
    const [_key, { input: pokemon }] = queryKey
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const responseFormatted = await response.json()
    return responseFormatted
  }
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["pokemon", { input }],
    queryFn: getPokemon,
  })
  
  return(
    <div style={{display: "flex", flexDirection: "column"}}>
      <input type="text" onChange={e => setInput(e.target.value)} />
      {isFetching || isLoading
        ? 
        <p>Something is happening...</p>
        :
        <div>
          <p>{JSON.stringify(data?.name)}</p>
          <p>{JSON.stringify(data?.id)}</p>
          <p>{JSON.stringify(data?.types)}</p>
        </div>
      }
    </div>
  )
}
