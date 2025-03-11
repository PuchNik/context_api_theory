import './App.css'
import {Header, UserBlock} from "./components/index.js"
import {AppContextProvider} from "./contextAPI/AppContextProvider.jsx";
import {useEffect, useState} from "react";


// Получение первичных данных пользователя с "сервера"
const getUserFromServer = () => ({
    id: 'user_1',
    name: 'Nik',
    age: 23,
    email: 'puch@gmail.com',
    phone: '8-888-888-88-88',
})

// Получение данных продукта с "сервера"
const getProductFromServer = () => ({
    id: 'product_1',
    sort: 'Antonovka',
    price: 34,
    country: 'Russia'
})

// Получение измененных данных пользователя с "сервера"
const getAnotherUserFromServer = () => ({
    id: 'user_1',
    name: 'Igor',
    age: 23,
    email: 'puch@gmail.com',
    phone: '8-888-888-88-88',
})

export default function App() {
    // Хранение данных о пользователе
    const [userData, setUserData] = useState({})

    // Хранение данных о продукте
    const [productData, setProductData] = useState({})

    const dispatch = (action) => {
        const {type, payload} = action

        switch (type) {
            case 'SET_USER_DATA':
                setUserData(payload)
                break
            default:
                // Ничего не делаем
        }
    }

    useEffect(() => {

        // Внесение в состояние измененных данных о пользователе
        const userDataFromServer = getUserFromServer()
        setUserData(userDataFromServer)

        // Внесение в состояние измененных данных о продукте
        const productDataFromServer = getProductFromServer()
        setProductData(productDataFromServer)
    }, [])

    // Изменение данных пользователя в UI
    const onUserChange = () => {
        const anotherUserDataFromServer = getAnotherUserFromServer()
        setUserData(anotherUserDataFromServer)
    }

    return (
        <AppContextProvider userValue={{userData, dispatch}} productValue={productData}>
            <Header/>
            <hr/>

            <UserBlock/>
            <button
                onClick={onUserChange}
                style={{
                    marginTop: '20px'
                }}
            >
                Сменить пользователя
            </button>
        </AppContextProvider>
    )
}
