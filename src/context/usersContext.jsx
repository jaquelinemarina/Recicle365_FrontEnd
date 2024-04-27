import { createContext, useEffect, useState } from 'react'

export const UsersContext = createContext()

export const UsersContextProvider = ({ children }) => {
    const [users, setUsers] = useState([])

    //monitora o json de usuários cadastrados
    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {

    }, [users]);

    //fetch para buscar usuários no json
    function getUsers() {
        fetch("http://localhost:3000/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.log(error));
    }

    //cadastrar novo usuário no json
    function registerUser(user) {
        if (user.name === "" || user.email === "" || user.password === "" || user.cpf === "" || user.born === "" ||
            user.cep === "" || user.address === "" || user.neighborhood === "" || user.city === "" || user.state === "") {

            console.log('Dados incompletos. Por favor, preencha todos os campos obrigatórios.')
            return //retorna para evitar o envio de dados vazios
        }

        fetch('http://localhost:3000/users', {
            method: 'POST', //POST = adicionar
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                console.log('Usuário cadastrado com sucesso!')
                getUsers()
            })
            .catch(() => console.log('Erro ao cadastrar usuário!'))
    }

    //deletar usuário no json
    function deleteUser(id) {
        fetch("http://localhost:3000/users/" + id, {
            method: 'DELETE'
        })
            .then(() => {
                console.log('Usuário deletado com sucesso!')
                getUsers()
            })
            .catch(() => console.log('Erro ao deletar usuário!'))
    }

    // função para validar login buscando dados no json | depois de validar (async), redireciona para a página de dashboard
    async function login(email, password) {
        try {
            const response = await fetch('http://localhost:3000/users')
            const dados = await response.json()

            let userExist = false

            dados.map(user => {
                if (user.email == email) {
                    
                    userExist = true

                    if (user.password == password) {
                        localStorage.setItem('isAuthenticaded', true) //salva no local storage o status de user autenticado
                        window.location.href = "/" //redireciona a página
                        return
                    }
                    alert("Senha incorreta!")
                    return
                }

            })
            if (!userExist) {
                alert("Usuário não cadastrado!")
            }
        } catch {

        }
    }

    return (
        <UsersContext.Provider value={{ users, registerUser, deleteUser, login }}>
            {children}
        </UsersContext.Provider>
    )
}