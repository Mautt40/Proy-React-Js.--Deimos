import "./App.css";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import {Navbar} from "./components/Navbar/Navbar"
import PruebaFetchUno from "./components/PruebaFetchUno/PruebaFetchUno";
import PruebaFetchDos from "./components/PruebaFetchUno/PruebaFetchDos";

function App() {
  
 
  
 return (
    <div className="App">
      <Navbar />
      <ItemListContainer/>
      <PruebaFetchUno/>
      <PruebaFetchDos/>
    
    </div>
  )
}

export default App;
