import './App.css'
import {Header, UserBlock} from "./components/index.js";


const getUserFromServer = () => ({
    id: 'user_1',
    name: 'Nik',
    age: 23,
    email: 'puch@gmail.com',
    phone: '8-888-888-88-88',
})

export default function App() {
    const {name, age, email, phone} = getUserFromServer()

    return (
        <>
            <Header currentUser={name}/>
            <hr/>

            <UserBlock
                name={name}
                age={age}
                email={email}
                phone={phone}
            />
            <div>Test</div>
        </>
    )
}
