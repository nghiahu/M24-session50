import React, { useState } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
export default function PrivateRouter() {
    const test:boolean = false
  return (
    
    <div>PrivateRouter
       {test ? <Outlet /> : <Navigate to={"/login"} />}
    </div>
  )
}
