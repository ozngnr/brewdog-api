import './App.css';
import { HeaderContainer } from "./containers/header.js"
import { FilterContainer } from "./containers/filter.js"
import { BeerContainer } from "./containers/beer.js"
import { GlobalStyles } from "./globalStyles"

function App() {
  return (
    <>
      <GlobalStyles/>
      <HeaderContainer/>
      <FilterContainer/>
      <BeerContainer />
    </>
  );
}

export default App;
