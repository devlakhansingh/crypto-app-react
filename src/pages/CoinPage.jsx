import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, LinearProgress, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getcoindetail } from '../context/coin/CoinAction'
import CoinContext from '../context/coin/CoinContext'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const CoinPage = () => {

  const { dispatch, coindata } = useContext(CoinContext)
  // console.log(coindata)

  const params = useParams()

  // if (!coindata) {
  //   return (
  //     <LinearProgress color="secondary" />
  //   )
  // }



  const fetchdetails = async () => {
    const data = await getcoindetail(params.coinId)
    console.log(data)

    dispatch({
      type: "GET_DETAILS",
      payload: data
    })

  }

  useEffect(() => {
    fetchdetails()
  }, [])


  if (!coindata) {
    return (
      <LinearProgress color="secondary" />
    )
  }


  return (
    <>
      {
        <Container>
          <img src={coindata.image.large} alt="" />

          <Typography variant='h4'>
            {coindata.symbol}
          </Typography>
          <Typography variant='h4'>
            {coindata.name}
          </Typography>


          <Typography variant='body1'>
         {coindata.description.en}
          </Typography>

          <Typography variant='body1'>
            <a href={coindata.links.repos_url.github[0]}></a>
          </Typography>






          <Button>
            <a href={coindata.links.repos_url.github[0]}></a>
          </Button>

          <Typography variant='h4'>
          USD : $ {coindata.market_data.current_price.inr}

          </Typography>
          <Typography variant='h4'>
           INR : <CurrencyRupeeIcon/> {coindata.market_data.current_price.usd}
          </Typography>




        </Container>
      }

    </>
  )
}

export default CoinPage
