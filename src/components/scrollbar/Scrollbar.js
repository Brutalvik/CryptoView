import React, {useEffect, useState}from 'react'
import './Scrollbar.css'

function Scrollbar() {

    const url = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`
    const [topten, setTopTen] = useState({})

    useEffect (() => {
        fetch(url)
        .then(response => response.json())
        .then(res => setTopTen(res.Data))
    }, [url])
    
    return (
        <div className="h-scroll">
                {Object.keys(topten).map((crypto, key) => 
                {
                    return <div className="box" key={key}>
                                <h3 className="name_header">{(topten[crypto]).CoinInfo.Name}</h3>
                                <h6 className="algo" >{(topten[crypto]).CoinInfo.Algorithm}</h6>
                                <img key={key} src={(topten[crypto]).CoinInfo.ImageUrl} alt="logo"/>
                                <h5>US$ {topten[crypto].RAW.USD.PRICE}</h5>
                           </div>
                }
                )}
            
        </div>
    )
}

export default Scrollbar
