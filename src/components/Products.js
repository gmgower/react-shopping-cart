import React, {useContext} from 'react';

// Components
import Product from './Product';

// Context
import {ProductContext} from '../contexts/ProductContext'


const Products = () => {
//Call useContext hook & pass context object we want to use.App
	const {products, addItem} = useContext(ProductContext);
    // console.log("TCL: Products -> addItem", addItem)
    console.log("TCL: Products -> products", products)

return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
