
import React, { useState, useEffect } from 'react'

function CardLocals() {
    const [howManyLocals, setHowManyLocals] = useState(0)

    useEffect(() => {
  
        const loadLocals = async () => {
            try {
                const response = await fetch('http://localhost:3000/LCR')
                if (!response.ok) {
                    throw new Error('Falha ao carregar os locais')
                }
                const data = await response.json()
                // Contar a quantidade de locais
                setHowManyLocals(data.length)
            } catch (error) {
                console.error('Erro ao carregar os locais:', error)
            }
        }

        loadLocals()
    }, []) // Executar uma vez quando o componente é montado

    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">LOCAIS CADASTRADOS</h3>
                <p className="card-text">{howManyLocals}</p>
            </div>
        </div>
    )
}

export default CardLocals

