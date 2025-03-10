import { useContext } from 'react'
import { AppContext } from '../../../context'


export const UserPersonalInfo = () => {
  const { name, age } = useContext(AppContext)

  return (
    <>
      <h3>Personal data: </h3>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
    </>
  )
}
