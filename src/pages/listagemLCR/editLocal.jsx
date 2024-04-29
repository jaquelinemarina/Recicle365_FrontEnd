import React from 'react'
import { useParams } from 'react-router-dom'

function EditLocal() {
    const { id } = useParams()
    return (
        <div>
            <div >
                <h1>Local {id}</h1>
                <form>
                    <div >
                        <label htmlFor="name">Nome do local</label>
                        <input placeholder="digite o nome do local"type="text"/>
                        {/* outros campos do formulário */}
                    </div>
                </form>
            </div>

        </div>
    )
}

export default EditLocal