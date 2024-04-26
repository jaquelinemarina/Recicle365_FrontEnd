import './App.css'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import Login from './pages/login/Login'

function App() {

  return (
    <>
      <usersContextProvider>
        <Header />
        <Outlet />
        <Login />
        <Footer />
      </usersContextProvider>
    </>
  )
}

export default App
