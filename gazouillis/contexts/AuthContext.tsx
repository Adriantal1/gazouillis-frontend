"use client"

import React, { createContext, FormEvent, SyntheticEvent, useState } from 'react'

interface IAuthContext {
  tokens: string[] | null,
  user: string | null,
  login: (e:SyntheticEvent<HTMLFormElement>) => void,
  logout: () => void,
}

const AuthContextDefault = {
  tokens: [],
  user: null,
  login: () => {},
  logout: () => {},
}

const AuthContext = createContext<IAuthContext>(AuthContextDefault)

export const AuthProvider = ({children}:{children:React.ReactNode}) => {
  const [tokens,setTokens] = useState<string[] | null>(null)
  const [user,setUser] = useState<string | null>(null)

  const login = (e:SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(e.currentTarget.elements[0].value)

    // const data = await fetch("https://gazouillis-b.up.railway.app/users/get-tokens", {
    //   method:"POST",
    //   headers:{'Content-Type':'application/json'},
    //   body:JSON.stringify({"email":e.target.email.value,"password":e.target.password.value})
    // })
  }

  const logout = () => {
    
  }

  const contextData = {
    user:user,
    tokens:tokens,
    login:login,
    logout:logout
  }

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  )
}

export default AuthContext