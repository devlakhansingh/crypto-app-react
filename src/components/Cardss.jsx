import React from 'react'
import { Avatar, Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom';
const Cardss = ({ item }) => {
    return (
        <>
            <Grid xs={12} sm={6} lg={4} spacing={4}>
                <Card sx={{ minWidth: 275, mt: "40px" }} >
                    <CardContent>
                        <Typography variant='h2' color="text.secondary" gutterBottom>
                            {item.symbol}
                        </Typography>
                        <Avatar sx={{ height: "80px", width: "80px" }} alt="Remy Sharp" src={item.large} />


                    

                    </CardContent>
                    <CardActions>
                        <Link to={`/coin/${item.id}`}>
                            <Button color='warning' variant='contained' size="small">Get  More Info</Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default Cardss
