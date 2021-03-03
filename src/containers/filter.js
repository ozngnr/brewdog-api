import React, {useState} from 'react';
import { Filter } from "../components"
import { AbvWeak, AbvMedium, AbvStrong, IbuMedium, IbuWeak, IbuStrong } from "../icons"



export function FilterContainer() {
  const [abvValue, setAbvValue] = useState("all")
  const [ibuValue, setIbuValue] = useState("all")
  
  function handleAbv (e) {
    console.log(abvValue)
    setAbvValue(e.target.value)
  }

  function handleIbu (e) {
    console.log(abvValue)
    setIbuValue(e.target.name)
  }

  return (
    <>
      <Filter>
        <Filter.Group>
          <Filter.Card>
            <Filter.Text>Alcohol Vol (ABV):</Filter.Text>
            <Filter.Wrapper>
              <Filter.Form>
                <Filter.Item
                  name="all" 
                  value="all"
                  checked={abvValue === "all"} 
                  onChange={handleAbv}
                >
                  <Filter.FormText>All</Filter.FormText>
                </Filter.Item>
                <Filter.Item 
                  name="weak" 
                  value="weak" 
                  checked={abvValue === "weak"} 
                  onChange={handleAbv}
                >
                  <AbvWeak />
                </Filter.Item>
                <Filter.Item
                  name="medium" 
                  value="medium"
                  checked={abvValue === "medium"} 
                  onChange={handleAbv}
                >
                  <AbvMedium />
                </Filter.Item>
                <Filter.Item
                  name="strong" 
                  value="strong" 
                  checked={abvValue === "strong"} 
                  onChange={handleAbv}
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
                  name="all" 
                  value="all"
                  checked={ibuValue === "all"} 
                  onChange={handleIbu}
                >
                  <Filter.FormText>All</Filter.FormText>
                </Filter.Item>
                <Filter.Item 
                  name="weak" 
                  value="weak" 
                  checked={ibuValue === "weak"} 
                  onChange={handleIbu}
                >
                  <IbuWeak />
                </Filter.Item>
                <Filter.Item
                  name="medium" 
                  value="medium"
                  checked={ibuValue === "medium"} 
                  onChange={handleIbu}
                >
                  <IbuMedium />
                </Filter.Item>
                <Filter.Item
                  name="strong" 
                  value="strong"
                  checked={ibuValue === "strong"} 
                  onChange={handleIbu}
                >
                  <IbuStrong />
                </Filter.Item>

              </Filter.Form>
            </Filter.Wrapper>
          </Filter.Card>

          <Filter.Card>
            <Filter.Text>Page: 1</Filter.Text>
            <Filter.Wrapper>
              <Filter.PageButton disabled>
                <i class="far fa-caret-square-left"></i>
              </Filter.PageButton>
              <Filter.PageButton>
                <i class="far fa-caret-square-right"></i>
              </Filter.PageButton>
            </Filter.Wrapper>
          </Filter.Card>

        </Filter.Group>
      </Filter>
    </>
  )
}