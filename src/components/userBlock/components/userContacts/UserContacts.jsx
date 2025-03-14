import { useContext } from 'react'
import { UserDataContext } from '../../../../contextAPI/index.js'

export const UserContacts = () => {
  const { userData } = useContext(UserDataContext)
  const { email, phone } = userData

  return (
    <>
      <h3>Contacts: </h3>
      <div>Mail: {email}</div>
      <div>Phone: {phone}</div>
    </>
  )
}
