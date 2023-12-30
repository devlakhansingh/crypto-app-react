import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Cardss from './Cardss'
import CoinContext from '../context/coin/CoinContext'

const CoinsContainer = () => {

    const { coins } = useContext(CoinContext)
    

    if (!coins ) {
        return (
            <Typography sx={{ marginTop: "30px" }} align='center' variant='h2'>
                No search Coins here !!
            </Typography>
        )
    }

    return (
        <>
            <Grid sx={{ mt: "40px" }} container spacing={2}>
                {
                    coins.map(item => <Cardss key={item.id} item={item} />)
                }

            </Grid>
        </>
    )
}

export default CoinsContainer
