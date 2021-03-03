import React, {useContext} from 'react';
import { Beer } from "../components"
import { BeerContext } from "../context/beerContext"

export function BeerContainer() {
  const { allBeers } = useContext(BeerContext)
  console.log(allBeers)
  return (
    <>
      <Beer.Group>
        {allBeers.map(beer => (
          <Beer key={beer.id}>
            <Beer.Card>
              <Beer.Item>
                <Beer.Image src={beer.image_url}/>
                <Beer.SubTitle>{beer.name}</Beer.SubTitle>
                <Beer.Info>
                  <Beer.ItemText>ABV: {beer.abv}%</Beer.ItemText>
                  <Beer.ItemText>IBU: {beer.ibu}</Beer.ItemText>
                </Beer.Info>
              </Beer.Item>
              <Beer.Content>
                <Beer.Title>{beer.name}</Beer.Title>
                <Beer.Tagline>{beer.tagline}</Beer.Tagline>
                <Beer.ContentText>{beer.description}</Beer.ContentText>
                <Beer.ContentTextItalic>Pair with: {beer.food_pairing.join(', ')}</Beer.ContentTextItalic>
              </Beer.Content>
            </Beer.Card>
          </Beer>
        ))}

      </Beer.Group>
    </>
  )
}