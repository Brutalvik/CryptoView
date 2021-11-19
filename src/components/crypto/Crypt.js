import React, {useEffect, useState} from 'react'
import './Crypto.css'

function Crypto(props) {

    const apiKey = process.env.REACT_APP_API_KEY
    const url = `https://min-api.cryptocompare.com/data/blockchain/list?api_key=${apiKey}`;
    
    const [ticker, setTicker] = useState([]);
    const [search, setSearch] = useState("");

    useEffect (() => {
      fetch(url)
      .then(response => response.json())
      .then(json => {
        Object.keys(json.Data).map(tick => setTicker([tick]));
      })
    }, [url])

    const getTicker = (e) =>
    {
        e.preventDefault();
        setSearch(e.target.value) 
        props.getCrypto(e.target.value)
    }
    
  return (
    <div>
      <div className="dropdown">
          <input
            placeholder="Search"
            onChange={getTicker}
          />
              {
                  ticker.filter((tick) => {
                      if(search === "")
                      {
                          return ticker
                      }
                      else if (tick.toLowerCase().includes(search.toLowerCase()))
                      {
                         return tick
                      }
                      else return false;
                  }) 
              }
      </div>
      
    </div>
  )
}

export default Crypto
