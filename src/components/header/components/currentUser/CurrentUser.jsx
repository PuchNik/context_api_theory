import { useContext } from "react"
import {UserDataContext} from "../../../../contextAPI/index.js";


export const CurrentUser = () => {
    const {userData} = useContext(UserDataContext)
    const {name} = userData

    return (
        <>
            <div>Current User: {name}</div>
        </>
    )
}
