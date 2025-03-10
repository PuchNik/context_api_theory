import './App.css'
import { AppContext } from './components/context.js';
import {Header, UserBlock} from "./components/index.js";


const getUserFromServer = () => ({
    id: 'user_1',
    name: 'Nik',
    age: 23,
    email: 'puch@gmail.com',
    phone: '8-888-888-88-88',
})

export default function App() {
    const userData = getUserFromServer()

    return (
        <AppContext.Provider value={userData}>
            <Header />
            <hr/>

            <UserBlock />
        </AppContext.Provider>
    )
}
