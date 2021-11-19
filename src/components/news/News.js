import React, { useEffect, useState } from 'react'
import './News.css'

export default function News() {
    const [newsArray, setNewsArray] = useState({})

    const url = `https://min-api.cryptocompare.com/data/v2/news/?lang=EN`
    
    setInterval(useEffect (() => {
        fetch(url)
        .then(response => response.json())
        .then(res => {
          setNewsArray(res.Data)
        })
      }, [url]), 5000)

  return (
      <div className="news_widget">
          {Object.keys(newsArray).map(news =>
          <>
              <img className="news_icon" src={newsArray[news].imageurl} alt="news_image"/>
                  <div className="news" >
                      <h4>{newsArray[news].title}</h4>
                      <p>{newsArray[news].body}</p>    
                  </div>
          </>
              )}
      </div>
  )
}