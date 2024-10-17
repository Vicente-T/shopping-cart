import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './product';

export const Shop = () => {
    return (
			<div className='bg-pink-100'>
				<div className='mt-100px ta-center fontsize-40px'>
					<h1>RandomShop</h1>
				</div>
				<div className='w-full h-auto grid grid-cols-3 place-items-center'>
					{PRODUCTS.map(product => (
						<Product data={product} />
					))}
				</div>
			</div>
		);
};
