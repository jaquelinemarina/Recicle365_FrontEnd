import './App.css'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default App
