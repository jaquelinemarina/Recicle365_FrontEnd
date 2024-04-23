import App from '../App'
import { createBrowserRouter } from 'react-router-dom'

//importação das páginas
import dashboard from '../pages/dashboard'
import listaLCR from '../pages/listaLCR'
import cadastroLCR from '../pages/cadastroLCR'


const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h1>Error 404</h1>,
        children: [
            {
                path: '/',
                element: <dashboard />,
            },
            {
                path: '/listaLCR',
                element: <listaLCR />,
            },
            {
                path: '/cadastroLCR',
                element: <cadastroLCR />,
            }
        ]
    }
])

export default routers