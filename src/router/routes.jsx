import App from '../App'
import { createBrowserRouter } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

//importação das páginas
import Login from '../pages/login/Login'
import CadastroUser from '../pages/cadastroUser/CadastroUser'
import Dashboard from '../pages/dashboard/Dashboard'
import ListagemLCR from '../pages/listagemLCR/ListagemLCR'
import CadastroLCR from '../pages/cadastroLCR/CadastroLCR'
import EditLocal from '../pages/listagemLCR/editLocal'


//verifica se o usuário está autenticado, limitando ou não o acesso a páginas privadas
let isAuthenticaded = JSON.parse(localStorage.getItem('isAuthenticaded')) || false

const PrivateRoute = ({ children }) => {
    return isAuthenticaded ? children : <Navigate to="/login" />
}


const routers = createBrowserRouter([

    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/cadastroUser',
        element: <CadastroUser />,
    },
    {
        path: '/',
        errorElement: <h1> Error 404</h1>,
        element: (
            <PrivateRoute>
                <App />
            </PrivateRoute>
        ),
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
            },
            {
                path: '/ListagemLCR/:id',
                element: <EditLocal />,
            }
        ]
    }
])

export default routers