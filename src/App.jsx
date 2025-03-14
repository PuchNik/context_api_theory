import './App.css'
import { Header, UserBlock } from './components/index.js'
import { AppContextProvider } from './contextAPI/AppContextProvider.jsx'
import { useEffect, useReducer } from 'react'

// Получение первичных данных пользователя с "сервера"
const getUserFromServer = () => ({
  id: 'user_1',
  name: 'Nik',
  age: 23,
  email: 'puch@gmail.com',
  phone: '8-888-888-88-88',
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
    default:
      return state
  }
}

export default function App() {
  // Хранение данных о пользователе
  const [userData, dispatch] = useReducer(reducer, {})

  useEffect(() => {
    // Внесение в состояние измененных данных о пользователе
    const userDataFromServer = getUserFromServer()
    dispatch({ type: 'SET_USER_DATA', payload: userDataFromServer })
  }, [])

  // Изменение данных пользователя в UI
  const onUserChange = () => {
    const anotherUserDataFromServer = getAnotherUserFromServer()
    dispatch({ type: 'SET_USER_DATA', payload: anotherUserDataFromServer })
  }

  return (
    <AppContextProvider userValue={{ userData, dispatch }}>
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
