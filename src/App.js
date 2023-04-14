import "./App.css";
import FetchingData from "./components/FetchingData/FetchingData";

import ItemListContainer from "./components/ItemList/ItemListContainer";
import {Navbar} from "./components/Navbar/Navbar"

function App() {
  
 let saludo = "DEIMOS - Librería especializada -";  
  
 return (
    <div className="App">
      <Navbar />
      <ItemListContainer/>
      
    
    </div>
  )
}

export default App;
