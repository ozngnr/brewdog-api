import React from 'react';
import { Filter } from "../components"

export function FilterContainer() {
  return (
    <>
      <Filter>
        <Filter.Group>

          <Filter.Card>
            <Filter.Text>Alcohol Vol (ABV)</Filter.Text>
            <Filter.Wrapper>
              <Filter.Form>
                <Filter.FormText>All</Filter.FormText>
                <Filter.Input type="radio" />
                <Filter.Input type="radio" />
                <Filter.Input type="radio" />
              </Filter.Form>
            </Filter.Wrapper>
          </Filter.Card>

          <Filter.Card>
            <Filter.Text>Hoppiness</Filter.Text>
            <Filter.Wrapper>
              <Filter.Form>
                <Filter.Input type="radio" />
                <Filter.Input type="radio" />
                <Filter.Input type="radio" />
              </Filter.Form>
            </Filter.Wrapper>
          </Filter.Card>

          <Filter.Card>
            <Filter.Text>Page: 1</Filter.Text>
            <Filter.Wrapper>
              <Filter.PageButton>prev</Filter.PageButton>
              <Filter.PageButton>next</Filter.PageButton>
            </Filter.Wrapper>
          </Filter.Card>

        </Filter.Group>
      </Filter>
    </>
  )
}