import React, { useState, useEffect, createContext } from 'react';

const BeerContext = createContext();

function BeerContextProvider({children}) {
  const [allBeers, setAllBeers] = useState([])
  const [page, setPage] = useState(1)
  const [abvValue, setAbvValue] = useState("all")
  const [ibuValue, setIbuValue] = useState("all")

  let abvOption = "" 
  let ibuOption = ""

  function filterAbv() {
    switch (abvValue) {
      case "weak":
        abvOption = "&abv_lt=4.6"
        break;
      case "medium" :
        abvOption = "&abv_gt=4.5&abv_lt=7.6"
        break;
      case "strong" :
        abvOption = "&abv_gt=7.6"
        break;
      default:
        abvOption = ""
    }

    setPage(1)
    return abvOption
  }

  function filterIbu() {
    console.log(ibuValue)
    switch (ibuValue) {
      case "weak":
        ibuOption = "&ibu_lt=35";
        break
      case "medium":
        ibuOption = "&ibu_gt=34&ibu_lt=75";
        break
      case "strong":
        ibuOption = "&ibu_gt=74";
        break
      default:
        ibuOption = ""
    }
    
    setPage(1)
    return ibuOption
  }

  
  
  useEffect(() => {
    filterAbv()
  }, [abvValue])
  
  useEffect(() => {
    filterIbu()
  }, [ibuValue]) 

  
  useEffect(() => {
    const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=24${abvOption}${ibuOption}`

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setAllBeers(data)
      })
      .catch(err => console.log(err))

  }, [page, abvValue, ibuValue])

  return (
    <BeerContext.Provider value={{
      allBeers, 
      abvValue, 
      ibuValue,
      setAbvValue,
      setIbuValue,
      page,
      setPage, 
    }}>
      {children}
    </BeerContext.Provider>
  )
}

export {BeerContextProvider, BeerContext}

