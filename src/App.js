import logo from './logo.svg';
import './App.css';
import { HeaderContainer } from "./containers/header.js"
import { FilterContainer } from "./containers/filter.js"

function App() {
  return (
    <>
      <HeaderContainer/>
      <FilterContainer/>
      <HeaderContainer/>
    </>
  );
}

export default App;
