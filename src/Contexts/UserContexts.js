import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext();

const UserContexts = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const signUpInfo = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInInfo = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signUpGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    } ,[])

    const AuthUser = {user, loading, signUpInfo, signInInfo, signUpGoogle, logout}
    return (
        <AuthContext.Provider value={AuthUser}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContexts;