import { useContext } from 'react'
import { AppContext } from '../../../context'


export const UserContacts = () => {
  const { email, phone } = useContext(AppContext)
  return (
    <>
      <h3>Contacts: </h3>
      <div>Mail: {email}</div>
      <div>Phone: {phone}</div>
    </>
  )
}
