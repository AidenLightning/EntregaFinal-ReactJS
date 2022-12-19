// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error404 from './components/404/Error404';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";


function App() {

  let carrito = [];

  return (
    <Router>
      <div className="App">
        <header>
          <Navbar numItems={carrito.length} />
        </header>

        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
          <Route path='/item/detail/:id' element={<ItemDetailContainer/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
