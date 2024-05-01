import style from './dashboard.module.css'
import CardLocals from '../../components/cards/cardLocals'
import CardUsers from '../../components/cards/cardUsers'
import { useContext } from 'react'
import { LocalsContext } from '../../context/localsContext'
import { Link } from 'react-router-dom'
import Map from '../../components/map/map'
import imgRRR from '../../assets/RRR.png'
import logo from '../../assets/logo.png'

function Dashboard() {

    const { locals } = useContext(LocalsContext)

    return (
        <div className={style.container}>
            <div className={style.viewOne}>
                <div className={style.title}>
                    <div className={style.titleText}>
                        <h2>Bem-vindo ao</h2>
                        <img className={style.logo}
                            src={logo}
                            alt='logo Recicle365'
                            width={350} />
                        <h2>Seu destino para reciclagem e preservação ambiental. </h2>
                    </div>
                    <div className={style.titleImg}>
                        <img src={imgRRR} alt='imagem de reciclagem' width={450} />
                    </div>
                </div>

                <div className={style.subtitle}>
                    <span>Você sabia que reciclar uma lata de alumínio economiza energia suficiente para manter uma TV ligada por três horas?<br />
                        E que a reciclagem de uma tonelada de papel salva cerca de 17 árvores e evita o desperdício de 7.000 galões de água?<br />
                        E que uma tonelada de plástico reciclado economiza energia equivalente a 1.000-2.000 galões de gasolina?<br />
                        Ao descartar seus resíduos de forma consciente e apoiar iniciativas de reciclagem, <br />
                        você está contribuindo para um futuro mais sustentável e ajudando a proteger o meio ambiente.
                    </span>
                </div>
                <h3>Explore o Recicle365 e descubra como você pode fazer a diferença.</h3>
            </div>

            <div className={style.viewTwo}>
                <div className={style.cards}>
                    <div className={style.card}> <CardLocals /> </div>
                    <div className={style.card}>  <CardUsers /></div>
                </div>

                <div className={style.list}>
                    <div className={style.listTitle}>
                        <h1>Preserve o meio ambiente.</h1>
                        <h3>Descubra onde descartar seus resíduos de forma responsável <Link to="/ListagemLCR" className={style.link}>clicando aqui!</Link></h3>
                    </div>

                    <div className={style.locals}>
                        {!!locals && locals.map((local) => (
                            <div key={local.id}>
                                <h2>{local.name}</h2>
                                <p>{local.city} / {local.state}</p>
                                <h4>Resíduos aceitos: {local.type}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={style.map}>
                <h1>Cuide do planeta, encontre o local de coleta mais próximo de você. </h1>
                <Map />
            </div>
        </div >
    )
}

export default Dashboard