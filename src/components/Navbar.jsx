import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <AppBar position='static'>
                <Toolbar>
                    <Link to={"/"}>
                    <Typography align='center' variant='h4'>
                        crypto-traker
                    </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
