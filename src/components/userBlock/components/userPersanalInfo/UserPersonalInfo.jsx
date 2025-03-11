import {useContext} from 'react'
import {ProductDataContext, UserDataContext} from "../../../../contextAPI/index.js";

export const UserPersonalInfo = () => {
    // Деструктуризация UserDataContext
    const {userData, dispatch: userDispatch} = useContext(UserDataContext)
    const {name, age} = userData

    // Деструктуризация UserDataContext
    const {productData, dispatch: productDispatch} = useContext(ProductDataContext)
    const {grade, price} = productData

    // Обновление данных пользователя (возраст)
    const updateUserName = () => {
        const newUserName = {...userData, name: 'Pavel'}
        userDispatch({
            type: 'SET_USER_DATA', payload: newUserName
        })
    }

    const updateUserPhone = () => {
        userDispatch({type: 'SET_USER_PHONE_NUMBER', payload: userData})
    }

    const updateProductGrade = () => {
        productDispatch({type: 'SET_PRODUCT_NAME', payload: productData})
    }

    return (
        <>
            <h3>Personal data: </h3>
            <div>Name: {name}</div>
            <div>Age: {age}</div>

            <h3>Product Data: </h3>
            <div>Grade: {grade}</div>
            <div>Price: {price} руб</div>

            <button
                onClick={updateUserName}
                style={{
                    marginTop: '20px'
                }}
            >
                Обновить имя пользователя
            </button>

            <button
                onClick={updateUserPhone}
                style={{
                    marginTop: '20px'
                }}
            >
                Обновить телефон пользователя
            </button>

            <button
                onClick={updateProductGrade}
                style={{
                    marginTop: '20px'
                }}
            >
                Обновить сорт продукта
            </button>
        </>
    )
}
