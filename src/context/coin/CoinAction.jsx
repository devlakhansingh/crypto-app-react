export const SearchCoin = async (coinname) => {
  try {
   const res = await fetch(`https://api.coingecko.com/api/v3/search?query=${coinname}`)
   const data = await res.json()
   return data.coins
  } catch (error) {
   console.log(error)
  }
}

export const getcoindetail = async (coinId) => {
 try {
   const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)

   const data = await res.json()
   return data
   
 } catch (error) {
   console.log(error)
 }

}

