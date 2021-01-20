import React,{useState,useEffect} from 'react';
import './App.css';
import {Products,Navbar,Cart} from './components';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

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
cart.cart?  console.log(cart.cart.line_items):console.log("no");
  return (<Router>
    <div className="App">
      <Navbar cart={cart}/>
      
      <Switch>
        <Route exact path='/'> <Products products={products} onAddToCart={handleAddToCart}/></Route>
     
      <Route exact path='/cart'>{cart.cart? <Cart cart={cart}/>:<Cart cart={cart}/> }  </Route>
      

      </Switch>
  
    </div>
    </Router>
  );
}

export default App;
