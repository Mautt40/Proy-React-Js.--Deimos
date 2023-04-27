import "./App.css";
import {ItemDetailContainer} from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Error from "./components/Error/Error";
import CartContainer from "./components/Carrito/CartContainer";
import Form from "./components/Form/Form";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryName" element={<ItemListContainer />} />
          <Route path="/ItemDetail/:id" element= {<ItemDetailContainer />} />
          <Route path="/cart" element ={<CartContainer/>}/>
          <Route path="/form" element={<Form />}/>
          <Route path="*" element= {<Error/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
