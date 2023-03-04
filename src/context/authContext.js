import { createContext } from 'react';

export const context = createContext();

/**
 * This function prevents the import of the context and the useContext in each component
 */

const useAuth = () => { // eslint-disable-line

}

/**
 * function that allows me to manipulate the data that each page needs
 * @param {AuthProvider} param0 
 * @returns 
 */

export function AuthProvider ( {children} ) {

    const user = {
        login: true,
    }

    return (
        <context.Provider value={{user}}>
            {children}
        </context.Provider>
    )
}