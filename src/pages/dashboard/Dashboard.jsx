import style from './dashboard.module.css'
import CardLocals from '../../components/cards/cardLocals'
import CardUsers from '../../components/cards/cardUsers'
import { useContext } from 'react'
import { LocalsContext } from '../../context/localsContext'
import { Link } from 'react-router-dom'

function Dashboard() {

    const { locals } = useContext(LocalsContext)

    return (
        <div className={style.container}>
            <h1>Recicle.<br />
                Reutilize. <br />
                Reduza.</h1>
            <div className={style.locals}>
                <span>Bem-vindo ao Recilce365, site destinado à reciclagem e preservação ambiental, onde cada ação conta para um planeta mais verde!
                    Sabia que reciclar uma lata de alumínio economiza energia suficiente para manter uma TV ligada por três horas?
                    E que a reciclagem de uma tonelada de papel salva cerca de 17 árvores e evita o desperdício de 7.000 galões de água?
                    E que uma tonelada de plástico reciclado economiza energia equivalente a 1.000-2.000 galões de gasolina?
                    A reciclagem não apenas reduz a quantidade de resíduos enviados para aterros sanitários, mas também economiza recursos preciosos e reduz a emissão de gases de efeito estufa.
                </span>
                <h3>Explore o Recicle365 e descubra como você pode fazer a diferença!</h3>
            </div>

            <div className={style.cards}>
                <div className={style.card}> <CardLocals /> </div>
                <div className={style.card}>  <CardUsers /></div>
            </div>

            <div className={style.list}>
                <div className={style.locals}>
                    <h1>Cuide do planeta, encontre o local de coleta mais próximo de você. </h1>
                    {!!locals && locals.map((local) => (
                        <div key={local.id}>
                            <h2>{local.name}</h2>
                            <p>{local.city} / {local.state}</p>
                            <h4>Resíduos aceitos: {local.type}</h4>
                        </div>
                    ))}
                </div>
                <h1>Preserve o meio ambiente.</h1>
                <h3>Descubra onde descartar seus resíduos de forma responsável <Link to="/ListagemLCR">clicando aqui!</Link></h3>
            </div>

            <div className={style.map}>
                <h2>Mapa dos Locais de Coleta de Resíduos</h2>
                {/*exibir um mapa com a localização dos locais de coletas de resíduos cadastrados 
                    usar React Leaftlet (em último caso, uma lista para exibir os locais)*/}
            </div>
        </div>
    )
}

export default Dashboard