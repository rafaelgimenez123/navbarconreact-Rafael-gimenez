import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Navbar from "./Navbar"
import Precios from "./pages/Precios"
import Home from "./pages/Home"
import Acercade from "./pages/Acercade"
import Carrito from "./pages/Carrito"



function App() {
  return(
  <>
  <BrowserRouter>
    <Navbar/>   
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/Acerca_de' element={<Acercade></Acercade>}></Route>
      <Route path='/Precios' element={<Precios></Precios>}></Route>
      <Route path='/Carrito' element={<Carrito></Carrito>}></Route>
    </Routes>
  </BrowserRouter>
  </>
  )
}
export default App
