import React, { useState, useEffect, createContext } from 'react';

const BeerContext = createContext();

function BeerContextProvider({children}) {
  const [allBeers, setAllBeers] = useState([])

  useEffect(() => {
    const url = "https://api.punkapi.com/v2/beers"

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setAllBeers(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <BeerContext.Provider value={{allBeers}}>
      {children}
    </BeerContext.Provider>
  )
}

export {BeerContextProvider, BeerContext}

