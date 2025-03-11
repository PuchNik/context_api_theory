import {useContext} from 'react'
import {ProductDataContext, UserDataContext} from "../../../../contextAPI/index.js";

export const UserContacts = () => {
    const {email, phone} = useContext(UserDataContext)
    const {country} = useContext(ProductDataContext)

    return (
        <>
            <h3>Contacts: </h3>
            <div>Mail: {email}</div>
            <div>Phone: {phone}</div>
            <div>Country: {country}</div>
        </>
    )
}
