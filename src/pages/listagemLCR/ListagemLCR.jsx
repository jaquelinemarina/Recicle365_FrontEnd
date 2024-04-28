import style from './listagemLCR.module.css'
import { useContext } from 'react'
import { LocalsContext } from '../../context/localsContext'

// ---------------------------------------------------------------------------------------------------
// O QUE FALTA:
// - criar botão para editar local, redirecionando para a tela de cadastroLCR com os dados preenchidos
// EXTRA: fazer um método de filtro por tipo de resíduo aceito pra facilitar a busca do usuário
// ---------------------------------------------------------------------------------------------------


function ListagemLCR() {

    const { locals, deleteLocal, getLocalById } = useContext(LocalsContext)

    return (
        <div className={style.container}>
            <div className={style.locals}>
                <h1>Locais de Coleta de Resíduos</h1>
                {!!locals && locals.map((local) => (
                    <div key={local.id}>
                        <h2>{local.name}</h2>
                        <p>Descrição: {local.description}</p>
                        <p>CEP: {local.cep}</p>
                        <p>Endereço: {local.address}, {local.number} - {local.neighborhood}</p>
                        <p>{local.city} / {local.state}</p>
                        <p>Coordenadas: {local.coordinates}</p>
                        <p>Tipo de resíduos aceitos: {local.type}</p>

                        <div className={style.buttons}>
                            <button onClick={() => getLocalById(local.id)}>Editar</button>
                            <button onClick={() => deleteLocal(local.id)}>Excluir</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListagemLCR