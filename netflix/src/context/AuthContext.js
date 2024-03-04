import {creatContext, useContext, useEffect, useState} from 'react';

const AuthContext = creatContext()

export function AuthContextprovider({children}){

  return (
   <AuthContext.Provider>
       {children}
   </AuthContext.Provider>
)
}


export function UserAuth(){
  return useContext(AuthContext)
}