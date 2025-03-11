import {useContext} from 'react'
import {ProductDataContext, UserDataContext} from "../../../../contextAPI/index.js";

export const UserPersonalInfo = () => {
    const {name, age} = useContext(UserDataContext)
    const {sort, price} = useContext(ProductDataContext)

    return (
        <>
            <h3>Personal data: </h3>
            <div>Name: {name}</div>
            <div>Age: {age}</div>

            <h3>Product Data: </h3>
            <div>Sort: {sort}</div>
            <div>Sort: {price}</div>
        </>
    )
}
