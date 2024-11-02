import { useContext, useState, createContext, useEffect } from 'react'
import { getAuth, onAuthStateChanged , signOut} from 'firebase/auth'
import  { auth } from '../firebase/firebase'

const Authcontext = createContext();

export function useAuth() {
    return useContext(Authcontext);

}

export function AuthProvider({ children }){
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const logout = () => {
        return signOut(auth);//firebase signout function
    }


    //these are the values that are provided to the context user

    const value = { 
        currentUser ,
        logout,

    };


    return (
        <Authcontext.Provider value = {value}>
            {!loading && children}
        </Authcontext.Provider>
    )
}