import './App.css'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import { UsersContextProvider } from './context/usersContext'
import CadastroUser from './pages/cadastroUser/CadastroUser.jsx'

function App() {

  return (
    <>
      <UsersContextProvider>
        <Header />
        <Outlet />
        <CadastroUser />
        <Footer />
      </UsersContextProvider>
    </>
  )
}

export default App
