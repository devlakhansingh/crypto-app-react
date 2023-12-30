const CoinReducer = (state, action) => {
    switch (action.type) {
 case 'SEARCH_COIN' :
    return{
        ...state,
        coins : action.payload
    }


case "GET_DETAILS":
    return{
        ...state ,
        coindata : action.payload
    }
        default:
            return state
    }
}

export default CoinReducer