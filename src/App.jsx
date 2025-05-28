
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'
import WhishList from './pages/WhishList'
import View from './pages/View'
import Pnf from './pages/Pnf'
import Footer from './components/Footer'
function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/wishList' element={<WhishList/>} />
      <Route path='/:id/view' element={<View/>} />
 <Route path='/*' element={<Pnf/>} />
 </Routes>
<Footer/>
    </>
  )
}

export default App
