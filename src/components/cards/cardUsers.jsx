
import React, { useState, useEffect } from 'react'

function CardUsers() {
    const [howManyUsers, setHowManyUsers] = useState(0)

    useEffect(() => {
  
        const loadUsers = async () => {
            try {
                const response = await fetch('http://localhost:3000/users')
                if (!response.ok) {
                    throw new Error('Falha ao carregar os usuários')
                }
                const data = await response.json()
                // Contar a quantidade de usuários
                setHowManyUsers(data.length)
            } catch (error) {
                console.error('Erro ao carregar os usuários:', error)
            }
        }

        loadUsers()
    }, []) // Executar uma vez quando o componente é montado

    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">Usuários Cadastrados</h3>
                <p className="card-text">{howManyUsers}</p>
            </div>
        </div>
    )
}

export default CardUsers
