import React from 'react'
import SidebarTab from './SidebarTab'
import { faHouse, faUser, faBars} from '@fortawesome/free-solid-svg-icons'
import type { FontawesomeObject } from '@fortawesome/fontawesome-svg-core'

const Sidebar = ({nickname,username}:{nickname:string,username:string}) => {
  console.log(typeof faHouse)
  return (
    <div className='w-1/6 bg-gray-800 h-screen p-4 text-white'>
      <div className=' text-2xl font-bold mb-12'>Gazouillis</div>

      <SidebarTab icon={faHouse} text={"Home"}/>
      <SidebarTab icon={faUser} text={"Profile"}/>
      <SidebarTab icon={faBars} text={"Options"}/>

      <div className='mt-60 '>
        <span>nickname</span>
        <span>username</span>
      </div>
      
    </div>
  )
}

export default Sidebar