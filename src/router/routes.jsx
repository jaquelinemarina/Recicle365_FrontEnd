import App from '../App'
import { createBrowserRouter } from 'react-router-dom'

//importação das páginas
import Dashboard from '../pages/dashboard/Dashboard'
import ListagemLCR from '../pages/listagemLCR/ListagemLCR'
import CadastroLCR from '../pages/cadastroLCR/CadastroLCR'


const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h1>Error 404</h1>,
        children: [
            {
                path: '/',
                element: <Dashboard />,
            },
            {
                path: '/ListagemLCR',
                element: <ListagemLCR />,
            },
            {
                path: '/CadastroLCR',
                element: <CadastroLCR />,
            }
        ]
    }
])

export default routers