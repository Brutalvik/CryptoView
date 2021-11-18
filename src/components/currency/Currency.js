import React, {useEffect, useState} from 'react'
function Currency(props) {

    const url = `https://openexchangerates.org/api/currencies.json`
    const [currency, setCurrency] = useState([])

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then(json => {
            setCurrency(json)
        })
    }, [url])

    return (
        <div>
            <select onChange={(e) => props.getCurrency(e.target.value)}>
            <option>Currency</option>
                {Object.keys(currency).map((item, key) => <option key={key}>{item}</option>)}
            </select>
        </div>
    )
}

export default Currency
