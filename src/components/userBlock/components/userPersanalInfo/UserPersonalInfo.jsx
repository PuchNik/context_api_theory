import {useContext} from 'react'
import {ProductDataContext, UserDataContext} from "../../../../contextAPI/index.js";

export const UserPersonalInfo = () => {
    // Деструктуризация UserDataContext
    const {userData, dispatch} = useContext(UserDataContext)
    const {name, age, email, phone} = userData

    // обновление данных пользователя (возраст)
    const onUserUpdate = () => {
        const newUserData = {...userData, age: 30}
        dispatch({
            type: 'SET_USER_DATA', payload: newUserData
        })
    }

    // Деструктуризация UserDataContext
    const {sort, price} = useContext(ProductDataContext)

    return (
        <>
            <h3>Personal data: </h3>
            <div>Name: {name}</div>
            <div>Age: {age}</div>

            <h3>Product Data: </h3>
            <div>Sort: {sort}</div>
            <div>Sort: {price}</div>

            <button onClick={onUserUpdate}>Обновить имя пользователя</button>
        </>
    )
}
