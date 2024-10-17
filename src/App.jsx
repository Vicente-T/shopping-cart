
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import { Navbar } from './components/navbar';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';


function App() {
  

  return (
		<div className='w-full h-auto min-h-screen font-sans bg-pink-100 p-o m-o'>
			<ShopContextProvider>
				<Router>
					<Navbar />
					<Routes>
						<Route path='/' element={<Shop />} />
						<Route path='/cart' element={<Cart />} />
					</Routes>
				</Router>
			</ShopContextProvider>
		</div>
	);
}

export default App
