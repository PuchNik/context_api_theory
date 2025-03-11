import './App.css'
import {Header, UserBlock} from "./components/index.js"
import {AppContextProvider} from "./contextAPI/AppContextProvider.jsx";


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

export default function App() {
    const userData = getUserFromServer()

    const productData = getProductFromServer()

    return (
        <AppContextProvider userValue={userData} productValue={productData}>
            <Header/>
            <hr/>

            <UserBlock/>
        </AppContextProvider>
    )
}
