import React from 'react'
import { Sidebar } from './dashboard/components/Sidebar'
import NavBarDashboard from './dashboard/components/NavbarDashboard/NavBarDashboard'

export default function LayoutDashboard({children}: {children: React.ReactNode}) {
  return (
    <div className='flex w-full h-full'>
        <div className='hidden h-full xl:block w-80 xl:fixed'>
        <Sidebar></Sidebar>
        </div>
        <div className='w-full h-full xl:ml-80'>
            <NavBarDashboard />
            <div className='p-6 h-max'>{children}</div>
        </div>
    </div>
  )
}
