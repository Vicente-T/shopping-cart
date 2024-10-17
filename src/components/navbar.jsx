import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react';

export const Navbar = () => {
	return (
		<div className='w-full h-20 bg-gray-950 flex justify-end items-center'>
			<div className='mr-12 flex items-center'>
				<Link to='/' className='text-gray-100 text-3xl no-underline ml-5'>
					Shop
				</Link>
				<Link to='/cart' className='ml-5 text-gray-100'>
					<ShoppingCart size={32} />
				</Link>
			</div>
		</div>
	);
};