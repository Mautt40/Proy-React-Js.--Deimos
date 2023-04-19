import "./App.css";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import  {products} from "./productMock";



function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      
    </div>
  );
}

export default App;
