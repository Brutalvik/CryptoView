import React, {useEffect, useState} from 'react'
import './Crypto.css'

function Crypto(props) {

    const apiKey = process.env.REACT_APP_API_KEY
    const url = `https://min-api.cryptocompare.com/data/blockchain/list?api_key=${apiKey}`;
    
    const [ticker, setTicker] = useState([]);
    // const [crypto, setCrypto] = useState("");
    

    useEffect (() => {
      fetch(url)
      .then(response => response.json())
      .then(json => {
        setTicker(json.Data)
      })
    }, [url])

  return (
    <div>
      <div className="dropdown">
          <select onChange={(e) => props.getCrypto(e.target.value)}>
            <option>Crypto</option>
            {
              Object.keys(ticker).map((crypto, key) => <option key={key}>{crypto}</option>)
            }
          </select>
      </div>
      
    </div>
  )
}

export default Crypto
