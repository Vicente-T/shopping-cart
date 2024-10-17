import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const CartItem = props => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
	return (
		<div className='w-700 h-250 flex items-center shadow-lg bg-pink-200 rounded-3xl m-7.5'>
			<img className='w-200' src={productImage} />
			<div className='w-full text-3xl'>
				<p>
					{' '}
					<b> {productName} </b>{' '}
				</p>

				<p> ${price}</p>
				<div className='countHandler'>
					<button onClick={() => removeFromCart(id)}>-</button>
					<input className='w-10 text-center font-bold' type='text' value={cartItems[id]} onChange={e => updateCartItemCount(Number(e.target.value), id)} />
					<button onClick={() => addToCart(id)}>+</button>
				</div>
			</div>
		</div>
	);
};
