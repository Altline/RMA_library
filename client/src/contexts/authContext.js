import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { clearuserDBref, setUserDBref } from "../firebase/firebasedb";


const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}



export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true)
  function signup(email,password){
    return createUserWithEmailAndPassword(auth,email,password)
  }

  function login(email, password){
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout(){
    return signOut(auth)
  }

 


  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user)=>{
      setCurrentUser(user)
      if(user){
        setUserDBref(user.uid);
      }else{
        clearuserDBref();
      }
      
      setLoading(false)   
  })
  return unsubscribe    
  }, [])

  
  
  

  const value = {
    currentUser,
    login,
    signup,
    logout
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
