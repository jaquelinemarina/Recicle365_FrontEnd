import { createContext, useEffect, useState } from 'react'

export const usersContext = createContext()

export const usersContextProvider = ({ children }) => {
    const [users, setUsers] = useState([])

    //monitora o json de usuários cadastrados
    useEffect(() => {
        getUsers()
    }, [])

    //fetch para buscar usuários no json
    function getUsers() {
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .cath(error => console.log(error))
    }

    return (
        <usersContext.Provider value={{ users, setUsers }}>
            {children}
        </usersContext.Provider>
    )
}