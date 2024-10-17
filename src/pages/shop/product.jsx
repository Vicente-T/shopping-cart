import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const Product = props => {
	const { id, productName, price, productImage } = props.data;
	const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);
	return (
		<div className='rounded-3xl w-80 h-96 m-24 flex flex-col justify-center items-center transition duration-300 ease-in-out cursor-pointer hover:cursor-pointer'>
			<img className='w-72 h-72' src={productImage} alt={productName} />
			<div className='intems.center'>
				<p>
					<b>{productName}</b>
				</p>
				<p>${price}</p>
			</div>
			<button className='bg-transparent border-2 border-gray-600 min-w-xs p-2 rounded-3xl hover:bg-gray-600 hover:text-pink-100 transition duration-300 ease-in-out' onClick={() => addToCart(id)}>
				Add to Cart {cartItems[id] > 0 && <> ({cartItems[id]})</>}
			</button>
		</div>
	);
};
