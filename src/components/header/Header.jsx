import style from "./header.module.css"
import { Link } from "react-router-dom"

//---------------------------------------------------------
// EXTRA: apagar o token de autenticação ao clicar em sair
//---------------------------------------------------------

function Header() {
    return (
        <header className={style.container}>
            <div className={style.menu}>
                <Link to="/" className={style.dashboard}>Recicle365</Link>
                <Link to="/ListagemLCR" className={style.listaLCR}>Locais de Coleta</Link>
                <Link to="/CadastroLCR" className={style.cadastroLCR}>Cadastrar Local de Coleta</Link>
            </div>
            <Link to="/Login" className={style.exit}>Sair</Link>
        </header>
    )
}

export default Header