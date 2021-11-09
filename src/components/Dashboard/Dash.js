import React, {useState} from 'react'
import axios from 'axios';

function Dash() {

    const apiKey = 'cea3b6e1d525e7743a9a2d803db00d8518755a1fd9e7df73c126a4911feb36ce'
    const url = `https://min-api.cryptocompare.com/data/blockchain/list?api_key=${apiKey}`;
    
    const [ticker, setTicker] = useState([]);

    axios.get(url)
    .then(response => {return response.data.Data})
    .then(response => {
      console.log(response)
      let tickerArray = []
      for (let ticker in response)
      {
        tickerArray.push(ticker)
      }
      
    })


    

  return (
    <div>
      
    </div>
  )
}

export default Dash
