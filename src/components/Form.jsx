import React from 'react'
import { useForm } from 'react-hook-form'

export default function Form() {

  const form = useForm()
  const { getValues, register } = form
  function hanldeSubmit(e) {
    e.preventDefault()
    console.log(getValues())
  }

  return (
    <form style={{display: "flex", flexDirection: "column"}}>
      <div>
        <label htmlFor='username'>Username: </label>
        <input type='text' id='username' name='username' {...register('username')}></input>
      </div>
      <div>
        <label htmlFor='password'>Password: </label>
        <input type='text' id='password' name='password' {... register('password')}></input>
      </div>
      <button onClick={hanldeSubmit}>Submit</button>
    </form>
  )
}
