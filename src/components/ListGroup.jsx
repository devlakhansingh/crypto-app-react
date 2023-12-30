import { Button, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import CoinContext from '../context/coin/CoinContext'
import { SearchCoin } from '../context/coin/CoinAction'

const ListGroup = () => {

    const { dispatch } = useContext(CoinContext)

    const [text, settext] = useState("")

    const Handlesubmit = async (e) => {
        e.preventDefault()
        const data =await  SearchCoin(text)
        console.log(data)
        dispatch({
            type: "SEARCH_COIN",
            payload: data
        })
        settext("")
    }

    return (
        <>
            <div className="container">
                <form onSubmit={Handlesubmit} >

                    <TextField value={text} onChange={(e) => settext(e.target.value)} sx={{ marginTop: "40px" }} fullWidth id="outlined-basic" label="search here" variant="outlined" />

                    <Button sx={{ marginTop: "40px" }} type='submit' fullWidth variant="contained">search</Button>
                </form>
            </div>
        </>
    )
}

export default ListGroup
