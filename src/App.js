import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainter/ItemListContainer";
import ItemDetailCointainer from "./components/itemListContainter/detail/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import CartWidgetContext from "./components/context/CartContext";
import Form from "./components/form/Form";

function App() {
  return (
    <>
      <CartWidgetContext>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoria"
              element={<ItemListContainer />}
            />
            <Route exact path="/item/:id" element={<ItemDetailCointainer />} />
            <Route exact path="/form" element={<Form />} />
          </Routes>
        </BrowserRouter>
      </CartWidgetContext>
    </>
  );
}

export default App;
