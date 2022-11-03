import React from 'react'
import SidebarTab from './SidebarTab'
import { faHouse, faUser, faBars, faCircle} from '@fortawesome/free-solid-svg-icons'
import type { FontawesomeObject } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = ({nickname,username}:{nickname:string,username:string}) => {
  console.log(typeof faHouse)
  return (
    <div className='w-1/6 bg-gray-800 h-screen p-4 text-white border-r border-gray-700'>
      <div className=' text-2xl font-bold mb-12'>Gazouillis</div>

      <SidebarTab icon={faHouse} text={"Home"}/>
      <SidebarTab icon={faUser} text={"Profile"}/>
      <SidebarTab icon={faBars} text={"Options"}/>

      <div className='mt-60 hover:bg-gray-700 rounded-full flex items-center pl-4'>
      <FontAwesomeIcon icon={faCircle} className='w-12'/>
        <div className='p-4'>
          <span className='font-bold'>Username</span><br/>
          <span className='text-gray-400'>@Username</span>
        </div>
      </div>

      <div className='bg-green-600 rounded-full p-4 w-32 text-center font-bold ml-auto mt-4 hover:bg-green-500'>
        Logout
      </div>
      
    </div>
  )
}

export default Sidebar