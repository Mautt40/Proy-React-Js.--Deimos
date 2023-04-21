import "./App.css";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Navbar} from "./components/Navbar/Navbar";

function App() {
  

  
  return (

<BrowserRouter>
   <Routes>
      
    <Route element ={<Navbar/>}>
       
       <Route path="/" element={<ItemListContainer/>}/>
       <Route path="/itemDetail" element={<ItemDetailContainer/>}/>
       <Route path="*" element={<h1> error 404 cagate </h1>} />
    
    </Route>
    
    </Routes>



</BrowserRouter>


  
  );
}

export default App;
