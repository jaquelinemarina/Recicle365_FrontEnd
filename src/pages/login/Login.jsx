import { useContext, useEffect } from 'react'
import { UsersContext } from '../../context/usersContext'
import style from './login.module.css'

//--------------------------------------------------------------------------
// O QUE FALTA:
// - criar o form de login de forma correta
// - criar a validação de login no botão
// - criar a navegação para a página de dashboard, caso validado
// - criar botão/lógica para fazer login com um dos usuários já cadastrados
// -------------------------------------------------------------------------

function Login() {

    const { users, deleteUser } = useContext(UsersContext)

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
                <p className={style.p}>
                    Faça login para ver os Locais de Coleta de Resíduos disponíveis perto de você.
                </p>

                <form className={style.form}>
                    <div className={style.email}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder='digite seu email' />
                    </div>
                    <div className={style.password}>
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" placeholder='digite sua senha' />
                    </div>
                    <div className={style.button}>
                        <a className={style.btnLogin} href="./dashboard">Login</a> {/* possívelmente devo usar uma validação que busque o user no json de users cadastrados */}
                    </div>

                    <div className={style.register}>
                        <p>Não tem uma conta? <a className={style.btnRegister} href="./CadastroUser">Cadastre-se</a> </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login