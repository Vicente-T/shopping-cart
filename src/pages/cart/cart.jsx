import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart.item';
import { useNavigate } from 'react-router-dom';


export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const { totalAmount } = getTotalCartAmount();

    const navigate = useNavigate();
    

    return (
			<div className='cart'>
				<div className='cartTitle'>
					<h1>Your Cart items</h1>
				</div>
				<div className='cartItems'>
					{PRODUCTS.map(product => {
						if (cartItems[product.id] !== 0) {
							return <CartItem data={product} />;
						}
					})}
				</div>

				<div className='checkout'>
					<p>Subtotal: ${totalAmount}</p>
					<button className='w-60 h-16 bg-black text-white border-none rounded-lg m-4 cursor-pointer' onClick={() => navigate('/')}>
						Continue Shopping
					</button>
					<button className='w-60 h-16 bg-black text-white border-none rounded-lg m-4 cursor-pointer'>Checkout</button>
				</div>
			</div>
		);
}