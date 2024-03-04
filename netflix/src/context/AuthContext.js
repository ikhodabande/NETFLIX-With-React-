import {creatContext, useContext, useEffect, useState} from 'react';
import { Auth } from 'firebase/auth';
import {
  createUserWithEmailAndPassword,
   signInWithEmailAndPassword, 
   signOut,
   onAuthStateChanged
} from 'firebase/auth'
import { auth, auth, auth } from '../firebase';

const AuthContext = creatContext()

export function AuthContextprovider({children}){
  const [user, setUser] = useState({})

  function signUp(email,password){
    return createUserWithEmailAndPassword(auth,email,password);
  }

  function logIn(email,password){
    return signInWithEmailAndPassword(auth,email,password)

  }
  
  function logOut(){
    return signOut(auth)
  }


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
    });
    return ()=>{
      unsubscribe();
    };
  });

  
  return (
   <AuthContext.Provider value={{signUp, logIn, logOut, user}}>
       {children}
   </AuthContext.Provider>
)
}


export function UserAuth(){
  return useContext(AuthContext)
}