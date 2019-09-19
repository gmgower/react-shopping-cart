import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Context
import {ProductContext} from './contexts/ProductContext';
import {CartContext} from './contexts/CartContext';


function App() {
	console.log('render')

	const [products] = useState(data);
    console.log("TCL: App -> data", data)
    console.log("TCL: App -> products", products)
	const [cart, setCart] = useState([]);
    console.log("TCL: App -> setCart", setCart)
    console.log("TCL: App -> cart", cart)

	const addItem = item => {
		setCart([...cart, item]);
        console.log("TCL: App -> cart", cart)
        console.log("TCL: App -> item", item)
	};

	const removeItem = id => {
		setCart(cart.filter(item => {
        console.log("TCL: App -> cart", cart)
			return item.id !== id
		}))
	}
	return (
		<div className="App">
		<ProductContext.Provider value={{products, addItem}}>
			<CartContext.Provider value={{cart, removeItem}}>
			<Navigation value={{cart}} />

			{/* Routes */}
			{/* <Route
				exact
				path="/"
				render={() => (
					<Products
						products={products}
						addItem={addItem}
					/>
				)}
			/> */}
			<Route exact path="/" component={Products} />
			<Route path="/" component={ShoppingCart} />

			{/* <Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/> */}
			</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
