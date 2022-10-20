import { useState, useEffect } from 'react'
import Banner from './Banner'
import logo from '../assets/jungle-shop.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function App() {
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<div>
			<Banner>
				<img src={logo} alt='The Jungle Shop' className='lmj-logo' />
				<div className='flex-container'>
					<div className='flex-item2'><h1 className='lmj-title'>The Jungle Shop</h1>
					</div>
					<div className='flex-item3'>
						<p>De la Jungle à votre intérieur !</p>
					</div>
				</div>	
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart= {updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App
