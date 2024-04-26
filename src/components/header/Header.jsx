import style from "./header.module.css"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header className={style.container}>
            <Link to="/" className={style.dashboard}>Recicle365</Link>
            <Link to="/ListagemLCR" className={style.listaLCR}>Locais de Coleta</Link>
            <Link to="/CadastroLCR" className={style.cadastroLCR}>Cadastrar Local de Coleta</Link>
        </header>
    )
}

export default Header