import React from 'react'
import UserNavbar from '../../components/User/UserNavbar'
import UserFooter from '../../components/User/UserFooter'
import {Outlet} from 'react-router-dom'
function UserRoot() {
  return (
    <>
        <UserNavbar/>
        <Outlet/>
        <UserFooter/>
    </>
      
    
  )
}

export default UserRoot
