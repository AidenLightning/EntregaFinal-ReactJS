import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error404 from './components/404/Error404';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import CarritoContextProvider from "./context/CarritoContext";


function App() {


  return (
    <Router>
      <CarritoContextProvider>
      <div className="App">
        <header>
          <Navbar/>
        </header>

        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
          <Route path='/item/detail/:id' element={<ItemDetailContainer/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
        
      </div>
      </CarritoContextProvider>
    </Router>
  );
}

export default App;
