import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'


const Navbar = () => {
  return (
    <nav>
        <AppBar position='static'>
          <Container>
          <Toolbar sx={{display: 'flex' , justifyContent: 'space-between'}}>
              <Typography variant='h5'>
                  My App 
              </Typography>
                <Box sx={{display:'flex', alignItems: 'center', gap: '50px'}}>
                  <NavLink to='/'>Customers Detail</NavLink>
                  <NavLink to='/post'>Add Customer</NavLink>
                  <NavLink to='/about'>About</NavLink>
                  <NavLink to='/login'>Login</NavLink>
                </Box>
          </Toolbar>
          </Container>
        </AppBar>
    </nav>
  )
}

export default Navbar