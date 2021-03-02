import './App.css';
import { HeaderContainer } from "./containers/header.js"
import { FilterContainer } from "./containers/filter.js"
import { GlobalStyles } from "./globalStyles"

function App() {
  return (
    <>
      <GlobalStyles/>
      <HeaderContainer/>
      <FilterContainer/>
    </>
  );
}

export default App;
