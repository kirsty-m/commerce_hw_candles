import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar";
import Products from './components/Products';
import Basket from './components/Basket';
import Home from './components/Home';
import Product from './components/Product';

function App() {

  let candles = [
    {
        id: 1,
        scent: "Vanilla",
        price: 10,
        burnTime: 12,
        stock: 20
    },

    {
        id: 2,
        scent: "Rose",
        price: 15,
        burnTime: 20,
        stock: 10
    },
    {
        id: 3,
        scent: "Citrus",
        price: 15,
        burnTime: 20,
        stock: 12
    },
    {
        id: 4,
        scent: "Sandlewood",
        price: 12,
        burnTime: 10,
        stock: 30,
    },
    {
        id: 5,
        scent: "Lavendar",
        price: 15,
        burnTime: 20,
        stock: 15 
    }
];

const [products, setProducts] = useState([candles]);
const [basket] = useState('');

const handleAddToBasket = (id) => {
  const updatedProducts = products.map((product) => {
    return product.id === id? {...product, isAdded: !product.isAdded}
    : product    
  })
  setProducts(updatedProducts)
};

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={< Home />} />
        <Route path='/products' element={< Products products={products} onClick={handleAddToBasket}/>} />
        <Route path='/basket' element={< Basket products={products} basket={basket}/>} />
      </Routes>
    </Router>
  )
};


export default App;
