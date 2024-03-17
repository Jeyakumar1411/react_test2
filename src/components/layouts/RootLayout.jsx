import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'

const RootLayout = () => {
  return (
    <div>
        <Navbar />
        <Container sx={{p:8}}>
        <Outlet/>
        </Container>
    </div>
  )
}

export default RootLayout