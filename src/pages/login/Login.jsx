import { useContext, useEffect, useState } from 'react'
import { UsersContext } from '../../context/usersContext'
import style from './login.module.css'
import { Link } from 'react-router-dom'

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
            <div className={style.users}>

                {/* exibe a lista de usuários cadastrados no json */}
                <h2 className={style.title}>Usuários Cadastrados</h2>
                {!!users && users.map((user) => (
                    <div key={user.id}>
                        <h2>{user.name}</h2>
                        <button onClick={() => deleteUser(user.id)}>Remover Usuário</button>
                    </div>
                ))}

            </div>

            <div className={style.login}>
                <h1 className={style.title}>Bem-vindo ao Recicle365!</h1>
                <h2 className={style.subtitle}>Sua ação faz a diferença.</h2>
                <p className={style.p}>
                    Faça login para ver os Locais de Coleta de Resíduos disponíveis perto de você.
                </p>

                <form className={style.form}>
                    <div className={style.email}>
                        <label htmlFor="email">Email</label>
                        <input type="email"
                            id="email"
                            placeholder='digite seu email'
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </div>
                    <div className={style.password}>
                        <label htmlFor="password">Senha</label>
                        <input type="password"
                            id="password"
                            placeholder='digite sua senha'
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                    </div>
                    <div className={style.button}>
                        <button className={style.btnLogin} onClick={() => realizarLogin()}>Login</button>
                    </div>

                    <div className={style.register}>
                        <p>Não tem uma conta? <Link to="/CadastroUser">Cadastre-se!</Link> </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login