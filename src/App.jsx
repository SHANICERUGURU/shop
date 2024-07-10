import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navbar'
import ProductCard from './components/productcard'
import ProductsContainer from './components/productscontainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <ProductsContainer/>
    </>
  )
}

export default App
