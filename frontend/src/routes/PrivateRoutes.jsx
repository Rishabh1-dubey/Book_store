import { useAuth } from '@/context/AuthContext'
import { Loader2 } from 'lucide-react'
import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
const {currentUser,loading}= useAuth()

if(loading){
 return <div className=''><Loader2 className='mx-auto items-center animate-spin'/></div>
}
if(currentUser){
    return children
}

  return (
   <Navigate to="/login"  replace/>
  )
}

export default PrivateRoutes