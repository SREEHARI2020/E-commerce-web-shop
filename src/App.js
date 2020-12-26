import React,{useState,useEffect} from 'react';
import './App.css';
import {Products,Navbar} from './components';
import { commerce } from './lib/commerce';

function App() {

  const[products,setProducts]=useState([]);
  const[cart,setCart]=useState({});

const fetchProducts=async() => {

const {data}=await commerce.products.list();


setProducts(data);
}
const fetchCart=async() => {

  
  
  setCart(await commerce.products.list());

  
  }

  

const handleAddToCart=async(productId,quantity) => {

  const item=await commerce.cart.add(productId,quantity);
  
  
  setCart(item);
  }

useEffect(()=>{

  fetchProducts();
  fetchCart();

},[])



  return (
    <div className="App">
      <Navbar cart={cart}/>
    <Products products={products} onAddToCart={handleAddToCart}/>
    </div>
  );
}

export default App;
