import { useContext } from 'react'
import {
  ProductDataContext,
  UserDataContext,
} from '../../../../contextAPI/index.js'

export const UserPersonalInfo = () => {
  // Деструктуризация UserDataContext
  const { userData, dispatch } = useContext(UserDataContext)
  const { name, age } = userData

  // Обновление данных пользователя (возраст)
  const updateUserName = () => {
    const newUserName = { ...userData, name: 'Pavel' }
    dispatch({
      type: 'SET_USER_DATA',
      payload: newUserName,
    })
  }

  return (
    <>
      <h3>Personal data: </h3>
      <div>Name: {name}</div>
      <div>Age: {age}</div>

      <button
        onClick={updateUserName}
        style={{
          marginTop: '20px',
        }}
      >
        Обновить имя пользователя
      </button>
    </>
  )
}
