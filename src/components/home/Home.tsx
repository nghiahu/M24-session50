import React from 'react'
import './home.scss'
import { Outlet } from 'react-router-dom'
export default function Home() {
  return (
    <div>Home

        <Outlet></Outlet>
    </div>
  )
}
