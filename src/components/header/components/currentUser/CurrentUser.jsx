import { useContext } from "react"
import {UserDataContext} from "../../../../contextAPI/index.js";


export const CurrentUser = () => {
    const {name} = useContext(UserDataContext)

    return (
        <>
            <div>Current User: {name}</div>
        </>
    )
}
