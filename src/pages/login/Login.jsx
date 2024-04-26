import { useContext } from 'react'
import { usersContext } from '../../context/usersContext'
import style from './login.module.css'

function Login() {

    const { users, registerUser, removeUser } = useContext(usersContext)

    useContext(() => {
        console.log(users)
    }, [])

    return (
        <>
            {/* deveria estar aqui? */}
            {!!users && users.map((user) => (
                <>
                    <h3 key={user.id}>{user.name}</h3>
                    <button onClick={() => removeUser(user.id)}>Remover</button>
                </>
            ))}

            <div className={style.container}>
                <div className={style.users}>
                    <h4 className={style.title}>Usuários Cadastrados</h4>
                    {/* O sistema quando iniciado irá carregar do localStorage ou json-server uma lista de 
                usuários já cadastrados que usam a plataforma (criar uma lista com no mínimo 5 usuários, use o 4Devs) */}
                    <li className={style.list}>
                        <ul>Jaqueline Marina</ul>
                        <ul>Pedro Salini</ul>
                        <ul>Fernanda Silva</ul>
                        <ul>Lucio Santos</ul>
                        <ul>Ana Rocha</ul>
                    </li>
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
                            <p>Não tem uma conta?</p>
                            <a className={style.btnRegister} href="./CadastroUser">Cadastre-se</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login