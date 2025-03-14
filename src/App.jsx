import './App.css'
import { Header, UserBlock } from './components/index.js'
import { AppContextProvider } from './contextAPI/AppContextProvider.jsx'
import { useEffect, useState } from 'react'

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
  grade: 'Antonovka',
  price: 34,
  country: 'Russia',
})

// Получение измененных данных пользователя с "сервера"
const getAnotherUserFromServer = () => ({
  id: 'user_2',
  name: 'Igor',
  age: 46,
  email: 'igor@mail.ru',
  phone: '7-777-777-77-77',
})

const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_USER_DATA':
      return payload
    case 'SET_USER_PHONE_NUMBER':
      return {
        ...state,
        phone: '8-999-999-99-99',
      }
    case 'SET_PRODUCT_NAME':
      return {
        ...state,
        grade: 'Gala',
      }
    default:
      return state
  }
}

export default function App() {
  // Хранение данных о пользователе
  const [userData, setUserData] = useState({})

  // Хранение данных о продукте
  const [productData, setProductData] = useState({})

  const dispatch = (action) => {
    const newUserState = reducer(userData, action)
    setUserData(newUserState)

    const newProductState = reducer(productData, action)
    setProductData(newProductState)
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
    <AppContextProvider
      userValue={{ userData, dispatch }}
      productValue={{ productData, dispatch }}
    >
      <Header />
      <hr />

      <UserBlock />
      <button
        onClick={onUserChange}
        style={{
          marginTop: '20px',
        }}
      >
        Сменить пользователя
      </button>
    </AppContextProvider>
  )
}
