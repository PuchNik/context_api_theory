import {UserPersonalInfo, UserContacts} from "./components/index.js";


export const UserBlock = ({name, age, email, phone}) => {
    return (
        <>
            <h2>User: </h2>
            <UserPersonalInfo name={name} age={age}/>
            <UserContacts email={email} phone={phone}/>
        </>
    )
}