import React, {useContext} from 'react';
import { Beer } from "../components"
import { BeerContext } from "../context/beerContext"

export function BeerContainer() {
  const {allBeers} = useContext(BeerContext)

  return (
    <>
      <Beer.Group>

        <Beer>
          <Beer.Card>
            <Beer.Item>
              <Beer.Image src="https://images.punkapi.com/v2/23.png"/>
              <Beer.SubTitle>Storm</Beer.SubTitle>
              <Beer.Info>
                <Beer.ItemText>4% ABV</Beer.ItemText>
                <Beer.ItemText>9 IBU</Beer.ItemText>
              </Beer.Info>
            </Beer.Item>
            <Beer.Content>
              <Beer.Title>Storm</Beer.Title>
              <Beer.Tagline>Beer tagline goes here</Beer.Tagline>
              <Beer.ContentText>Desciption</Beer.ContentText>
              <Beer.ContentTextItalic>FoodParing</Beer.ContentTextItalic>
            </Beer.Content>
          </Beer.Card>
        </Beer>

      </Beer.Group>
    </>
  )
}