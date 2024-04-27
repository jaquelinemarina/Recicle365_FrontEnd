import { createContext, useEffect, useState } from 'react'

export const LocalsContext = createContext()

export const LocalsContextProvider = ({ children }) => {
    const [locals, setLocals] = useState([])

    //monitora o json de locais cadastrados
    useEffect(() => {
        getLocals()
    }, [])

    useEffect(() => {

    }, [locals]);

    //fetch para buscar local no json
    function getLocals() {
        fetch("http://localhost:3000/LCR")
            .then((response) => response.json())
            .then((data) => setLocals(data))
            .catch((error) => console.log(error));
    }

    //cadastrar novo local no json
    function registerLocal(local) {
        if ( local.cpf === "" || local.name === "" || local.description === "" || local.cep === "" || local.address === "" || 
        local.neighborhood === "" || local.city === "" || local.state === "" || local.coordinates ==="" || local.type === "" ) {    
        

            console.log('Dados incompletos. Por favor, preencha todos os campos obrigatórios.')
            return //retorna para evitar o envio de dados vazios
        }

        fetch('http://localhost:3000/LCR', {
            method: 'POST', 
            body: JSON.stringify(local),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                console.log('Local cadastrado com sucesso!')
                getLocals()
            })
            .catch(() => console.log('Erro ao cadastrar local!'))
    }

    //deletar local no json
    function deleteLocal(id) {
        fetch("http://localhost:3000/LCR/" + id, {
            method: 'DELETE'
        })
            .then(() => {
                console.log('Local deletado com sucesso!')
                getLocals()
            })
            .catch(() => console.log('Erro ao deletar local!'))
    }

    return (
        <LocalsContext.Provider value={{ locals, registerLocal, deleteLocal }}>
            {children}
        </LocalsContext.Provider>
    )
}