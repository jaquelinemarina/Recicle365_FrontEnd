import { createContext, useEffect, useState } from 'react'

export const usersContext = createContext()

export const usersContextProvider = ({ children }) => {
    const [users, setUsers] = useState([])

    //monitora o json de usuários cadastrados
    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        console.log({ users });
    }, [users]);

    //fetch para buscar usuários no json
    function getUsers() {
        fetch("http://localhost:3000/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .cath((error) => console.log(error));
    }

    //cadastrar novo usuário no json
    function registerUser(user) {
        if (user.name == "") {  // o required do input não substitui essa parte ??
            alert("Os dados estão incompletos!")
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

    return (
        <usersContext.Provider value={{ users, registerUser, deleteUser }}>
            {children}
        </usersContext.Provider>
    )
}