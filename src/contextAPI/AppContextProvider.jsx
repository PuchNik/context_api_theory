import {UserDataContext, ProductDataContext} from "./index.js";

export const AppContextProvider = ({userValue, productValue, children}) => {
    return (
        <UserDataContext.Provider value={userValue}>
            <ProductDataContext.Provider value={productValue}>
                {children}
            </ProductDataContext.Provider>
        </UserDataContext.Provider>
    )
}