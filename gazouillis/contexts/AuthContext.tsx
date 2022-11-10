"use client"

import { error } from 'console'
import React, { createContext, FormEvent, SyntheticEvent, useState } from 'react'

interface IAuthContext {
  tokens: string[] | null,
  user: string | null,
  login: (e:React.FormEvent<HTMLFormElement>) => void,
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

  const login = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    fetch("https://gazouillis-b.up.railway.app/users/get-tokens/", {
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({"email":e.currentTarget.email.value,"password":e.currentTarget.password.value})
    })
    .then(response => response.json())
    .then(data => {
      setTokens(data)
      setUser
    })
    .catch(error => console.log(error))
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