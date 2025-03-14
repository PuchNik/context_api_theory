import {UserPersonalInfo, UserContacts} from "./components/index.js";


export const UserBlock = () => {
    return (
        <>
            <h2>User: </h2>
            <UserPersonalInfo />
            <UserContacts />
        </>
    )
}