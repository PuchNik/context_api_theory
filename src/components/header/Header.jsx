import {CurrentUser} from "./components/index.js";

export const Header = ({currentUser}) => {
    return (
        <>
            <div>Information in the application header</div>
            <CurrentUser currentUser={currentUser}/>
        </>
    )
}