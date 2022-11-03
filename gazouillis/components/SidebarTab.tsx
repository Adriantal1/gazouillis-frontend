import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'

const SidebarTab = ({icon,text}:{icon:IconProp,text:string}) => {
  return (
    <div className='flex gap-x-5 items-center p-5 m-5 rounded-full hover:bg-gray-700'>
      <FontAwesomeIcon icon={icon} className='w-7' />
      <span className='text-xl'>{text}</span>
    </div>
  )
}

export default SidebarTab