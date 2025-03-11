import './App.css'
import {Header, UserBlock} from "./components/index.js"
import {AppContextProvider} from "./contextAPI/AppContextProvider.jsx";
import {useEffect, useState} from "react";


const getUserFromServer = () => ({
    id: 'user_1',
    name: 'Nik',
    age: 23,
    email: 'puch@gmail.com',
    phone: '8-888-888-88-88',
})

const getProductFromServer = () => ({
    id: 'product_1',
    sort: 'Antonovka',
    price: 34,
    country: 'Russia'
})

const getAnotherUserFromServer = () => ({
    id: 'user_1',
    name: 'Igor',
    age: 23,
    email: 'puch@gmail.com',
    phone: '8-888-888-88-88',
})


export default function App() {
    const [userData, setUserData] = useState({})
    const [productData, setProductData] = useState({})

    useEffect(() => {
        const userDataFromServer = getUserFromServer()
        setUserData(userDataFromServer)

        const productDataFromServer = getProductFromServer()
        setProductData(productDataFromServer)
    }, [])

    const onUserChange = () => {
        const anotherUserDataFromServer = getAnotherUserFromServer()
        setUserData(anotherUserDataFromServer)
    }

    return (
        <AppContextProvider userValue={userData} productValue={productData}>
            <Header/>
            <hr/>

            <UserBlock/>
            <button onClick={onUserChange}>Сменить пользователя</button>
        </AppContextProvider>
    )
}
