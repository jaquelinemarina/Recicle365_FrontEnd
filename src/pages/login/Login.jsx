import { useContext, useEffect, useState } from 'react'
import { UsersContext } from '../../context/usersContext'
import style from './login.module.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

//------------------------------------------------------------------------------
// EXTRAS:
// - criar condição que não permite remover usuário se houver um LCR cadastrado
// - criar botão para preencher os dados de login clicando no usuário cadastrado
// -----------------------------------------------------------------------------

function Login() {

    const { users, deleteUser, login } = useContext(UsersContext)

    // autenticação de login
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    async function realizarLogin() {
        await login(user.email, user.password)
    }

    useEffect(() => {
        console.log(users)
    }, [users])

    return (
        <div className={style.container}>
            <div className={style.viewOne}>
                <h2>Usuários Cadastrados</h2>
                <div className={style.usersContent}>
                    {!!users && users.map((user) => (
                        <div key={user.id}>
                            <h3>{user.name}</h3>
                            <button className={style.btnRemove} onClick={() => deleteUser(user.id)}>Remover Usuário</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className={style.login}>
                <div className={style.title}>
                    <img src={logo} width={320} alt='logo Recile365' />
                    <h2>Sua ação faz a diferença.</h2>
                    <p>Faça login para ver os locais de coleta disponíveis perto de você.</p>
                </div>

                <form className={style.form}>
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        id="email"
                        placeholder='digite seu email'
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />

                    <label htmlFor="password">Senha</label>
                    <input type="password"
                        id="password"
                        placeholder='digite sua senha'
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />

                        <button className={style.btnLogin} onClick={() => realizarLogin()}>Login</button>
                        <p className={style.redirect}>Não tem uma conta? <Link to="/CadastroUser" className={style.link}>Cadastre-se!</Link> </p>
                </form>
            </div>
        </div>
    )
}

export default Login