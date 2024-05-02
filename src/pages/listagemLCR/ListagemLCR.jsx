import style from './listagemLCR.module.css'
import { useContext, useState } from 'react'
import { LocalsContext } from '../../context/localsContext'
import RRR from '../../assets/RRR.png'

// ---------------------------------------------------------------------------------------------
// - tratar os dados dos inputs
// EXTRA: fazer um método de filtro por tipo de resíduo aceito pra facilitar a busca do usuário
// ---------------------------------------------------------------------------------------------


function ListagemLCR() {

    const { locals, deleteLocal, getLocalById } = useContext(LocalsContext)
    const [editMode, setEditMode] = useState(false)
    const [localEditing, setLocalEditing] = useState(null)
    const [isSaving, setIsSaving] = useState(false)

    // função para editar local
    const handleEdit = (localId) => {
        console.log('editando local:', localId)
        setEditMode(true)
        getLocalById(localId)
            .then(local => {
                setLocalEditing(local)
            })
            .catch(error => console.log(error))
    }

    // função para cancelar edição
    const handleCancelEdit = (e) => {
        e.preventDefault()
        setEditMode(false)
        setLocalEditing(null)
    }

    // função para alterar os campos do local
    const handleChange = (e) => {
        const { name, value } = e.target
        setLocalEditing(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    // função para salvar as alterações
    const handleSaveChanges = () => {
        setIsSaving(true);
        fetch(`http://localhost:3000/LCR/${localEditing.id}`, {
            method: 'PUT',
            body: JSON.stringify(localEditing),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao salvar os dados editados.')
                }
                console.log('Alterações salvas com sucesso!')
                setIsSaving(false)
                setEditMode(false)
                setLocalEditing(null)
            })
            .catch(error => {
                console.error(error)
                setIsSaving(false)
            })
    }

    return (
        <div className={style.containerList}>
            <div className={style.titleList}>
                <h1>Locais de Coleta de Resíduos</h1>
                <div className={style.localsContent}>
                    <br /> <br /> <br />  <br /> <br /> <br />
                    <br /> <br /> <br />  <br /> <br /> <br />
                    <br /> <br /> <br />  <br /> <br /> <br />
                    <br /> <br /> <br />  <br /> <br /> <br />
                    <br /> <br /> <br />  <br /> <br /> <br />
                    <br /> <br /> <br />  <br /> <br /> <br />
                    <br /> <br /> <br />  <br /> <br /> <br />
                    <br /> <br /> <br />  <br /> <br /> <br />
                    <br /> <br /> <br />  <br /> <br /> <br />
                    <br /> <br /> <br />  <br /> <br /> <br />
                    <br /> <br /> <br />  <br /> <br /> <br />
                    <br /> <br /> <br />  <br /> <br /> <br />
                    <br /> <br /> <br />  <br /> <br /> <br />
                    <br /> <br /> <br />  <br /> <br /> <br />
                    <br /> <br /> <br />  <br /> <br /> <br />
                    <br /> <br /> <br />  <br /> <br /> <br />
                    <br /> <br /> <br />  <br /> <br /> <br />
                    <br /> <br /> <br />  <br /> <br /> <br />
                    <br /> <br /> <br />  <br /> <br /> <br />
                    <br /> <br /> <br />  <br /> <br /> <br />
                    <br /> <br /> <br />  <br /> <br /> <br />
                    <br /> <br /> <br />  <br /> <br /> <br />
                    <br /> <br /> <br />  <br /> <br /> <br />
                    <br /> <br /> <br />  <br /> <br /> <br />
                    <br/> <br />
                    {!!locals && Array.isArray(locals) && locals.map((local) => (
                        <div key={local.id} className={style.localList}>
                            <h2>{local.name}</h2>
                            <p>Tipo de resíduos aceitos: <span>{local.type}</span></p>
                            <p>Endereço: {local.address}, {local.number} - {local.neighborhood}</p>
                            <p>{local.city} / {local.state}</p>
                            <p>CEP: {local.cep}</p>
                            <p>Coordenadas: {local.coordinates}</p>
                            <p>Descrição: {local.description}</p>

                            <div className={style.buttonsList}>
                                <button className={style.btnEdit} onClick={() => handleEdit(local.id)}>Editar</button>
                                <button className={style.btnDelete} onClick={() => deleteLocal(local.id)}>Excluir</button>
                            </div>
                        </div>
                    ))}
                    <br />
                </div>
            </div>

            <img className={style.imgList} src={RRR} width={500} alt="Reciclar, Reutilizar, Reduzir" />

            {/* MODO DE EDIÇÃO */}
            {editMode && localEditing && (
                <div className={style.editLocals}>
                    <form className={style.editForm}>
                        <label htmlFor="name">Nome do local</label>
                        <input name="name" placeholder="digite o nome do local" type="text" value={localEditing.name} onChange={handleChange} />

                        <label htmlFor="description">Descrição do local</label>
                        <input name="description" placeholder="descreva o local" type="text" value={localEditing.description} onChange={handleChange} />

                        <label htmlFor="cep">CEP</label>
                        <input name="cep" placeholder="digite o CEP" type="text" value={localEditing.cep} onChange={handleChange} />

                        <label htmlFor="address">Endereço</label>
                        <input name="address" placeholder="digite o endereço" type="text" value={localEditing.address} onChange={handleChange} />

                        <label htmlFor="number">Número</label>
                        <input name="number" placeholder="digite o número" type="text" value={localEditing.number} onChange={handleChange} /> <br /> <br />

                        <label htmlFor="neighborhood">Bairro</label>
                        <input name="neighborhood" placeholder="digite o bairro" type="text" value={localEditing.neighborhood} onChange={handleChange} />

                        <label htmlFor="city">Cidade</label>
                        <input name="city" placeholder="digite a cidade" type="text" value={localEditing.city} onChange={handleChange} />

                        <label htmlFor="state">Estado</label>
                        <input name="state" placeholder="digite o estado" type="text" value={localEditing.state} onChange={handleChange} />

                        <label htmlFor="coordinates">Coordenadas</label>
                        <input name="coordinates" placeholder="digite as coordenadas" type="text" value={localEditing.coordinates} onChange={handleChange} />

                        <label htmlFor="type">Tipo de resíduos aceitos</label>
                        <input name="type" placeholder="digite o tipo de resíduos aceitos" type="text" value={localEditing.type} onChange={handleChange} />

                    </form>
                    <div className={style.buttonsEditList}>
                        <button className={style.btnSave} onClick={handleSaveChanges} disabled={isSaving}>Salvar</button>
                        <button className={style.btnCancel} onClick={(e) => handleCancelEdit(e)}>Cancelar</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ListagemLCR