import style from './dashboard.module.css'

function Dashboard() {

    return (
        <div className={style.container}>
            <div className={style.viewOne}>
                <div className={style.locals}>
                    {/*exibir uma visão geral dos locais de coletas de resíduos cadastrados*/}
                    <div className={style.localOne}>
                        <h4>Local 1</h4>
                        <p>Endereço 1</p>
                    </div>
                    <div className={style.localTwo}>
                        <h4>Local 2</h4>
                        <p>Endereço 2</p>
                    </div>
                    <div className={style.localThree}>
                        <h4>Local 3</h4>
                        <p>Endereço 3</p>
                    </div>
                    <div className={style.localFour}>
                        <h4>Local 4</h4>
                        <p>Endereço 4</p>
                    </div>
                </div>

                <div className={style.localButtons}>
                    <button type="button">Adicionar</button>
                    <button type="button">Editar</button>
                    <button type="button">Excluir</button>
                </div>
            </div>

            <div className={style.viewTwo}>
                <div className={style.cards}>
                    {/* usar cards para trazer a quantidade de usuários ativos e locais cadastrados*/}
                    <div className={style.card}>
                        <h3>Usuários Ativos</h3>
                        <p>100</p>
                    </div>
                    <div className={style.card}>
                        <h3>Locais Cadastrados</h3>
                        <p>10</p>
                    </div>
                </div>
                <div className={style.map}>
                    <h2>Mapa dos Locais de Coleta de Resíduos</h2>
                    {/*exibir um mapa com a localização dos locais de coletas de resíduos cadastrados 
                    usar React Leaftlet (em último caso, uma lista para exibir os locais)*/}
                </div>
            </div>
        </div>
    )
}

export default Dashboard