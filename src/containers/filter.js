import React, { useContext } from 'react';
import { Filter } from "../components"
import { AbvWeak, AbvMedium, AbvStrong, IbuMedium, IbuWeak, IbuStrong } from "../icons"
import { BeerContext } from "../context/beerContext"


export function FilterContainer() {
  const {
    allBeers,
    abvValue,
    ibuValue,
    setAbvValue,
    setIbuValue, 
    page, 
    setPage
  } = useContext(BeerContext)

  return (
    <>
      <Filter>
        <Filter.Group>
          <Filter.Card>
            <Filter.Text>Alcohol Vol (ABV):</Filter.Text>
            <Filter.Wrapper>
              <Filter.Form>
                <Filter.Item
                  value="all"
                  checked={abvValue === "all"} 
                  onChange={e => setAbvValue(e.target.value)}
                >
                  <Filter.FormText>All</Filter.FormText>
                </Filter.Item>
                <Filter.Item 
                  value="weak" 
                  checked={abvValue === "weak"} 
                  onChange={e => setAbvValue(e.target.value)}
                >
                  <AbvWeak />
                </Filter.Item>
                <Filter.Item
                  value="medium"
                  checked={abvValue === "medium"} 
                  onChange={e => setAbvValue(e.target.value)}
                >
                  <AbvMedium />
                </Filter.Item>
                <Filter.Item
                  value="strong" 
                  checked={abvValue === "strong"} 
                  onChange={e => setAbvValue(e.target.value)}
                >
                  <AbvStrong />
                </Filter.Item>

              </Filter.Form>
            </Filter.Wrapper>
          </Filter.Card>

          <Filter.Card>
            <Filter.Text>Hoppiness (IBU):</Filter.Text>
            <Filter.Wrapper>
              <Filter.Form>
              <Filter.Item
                  value="all"
                  checked={ibuValue === "all"} 
                  onChange={e => setIbuValue(e.target.value)}
                >
                  <Filter.FormText>All</Filter.FormText>
                </Filter.Item>
                <Filter.Item 
                  value="weak" 
                  checked={ibuValue === "weak"} 
                  onChange={e => setIbuValue(e.target.value)}
                >
                  <IbuWeak />
                </Filter.Item>
                <Filter.Item
                  value="medium"
                  checked={ibuValue === "medium"} 
                  onChange={e => setIbuValue(e.target.value)}
                >
                  <IbuMedium />
                </Filter.Item>
                <Filter.Item
                  value="strong"
                  checked={ibuValue === "strong"} 
                  onChange={e => setIbuValue(e.target.value)}
                >
                  <IbuStrong />
                </Filter.Item>

              </Filter.Form>
            </Filter.Wrapper>
          </Filter.Card>

          <Filter.Card>
            <Filter.Text>Page: {page}</Filter.Text>
            <Filter.Wrapper>
              <Filter.PageButton onClick={() => setPage(page => page > 1 && page - 1)} disabled={ page === 1 }>
                <i className="far fa-caret-square-left"></i>
              </Filter.PageButton>
              <Filter.PageButton onClick={() => setPage(page => page + 1)} disabled={allBeers.length < 24}>
                <i className="far fa-caret-square-right"></i>
              </Filter.PageButton>
            </Filter.Wrapper>
          </Filter.Card>

        </Filter.Group>
      </Filter>
    </>
  )
}