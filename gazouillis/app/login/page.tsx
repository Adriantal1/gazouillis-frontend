"use client"

import {useContext} from 'react'
import AuthContext from '../../contexts/AuthContext'

const Page = () => {
  const {login} = useContext(AuthContext)
  return (
    <div>
      <form onSubmit={login}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Page