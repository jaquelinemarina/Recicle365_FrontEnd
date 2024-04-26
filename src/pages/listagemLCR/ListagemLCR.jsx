import style from './listagemLCR.module.css'

function ListagemLCR() {

    // provavelmente esses dados viriam de uma API (localStorage ou JSON Server) - usar Context para atualizar a lista de forma dinâmica por meio dos botões ?

    // extra: seria interessante fazer um filtro por tipo de resíduo aceito pra facilitar a busca do usuário

    return (
        <div className={style.container}>
            <h1>Locais de Coleta de Resíduos</h1>
            <div className={style.cardsContent}>
                <div className={style.local}>
                    <h2>Ponta do Coral</h2>
                    <p>Descrição: local com bastante movimentação de carros.</p>
                    <p>Endereço: Rua A, 123</p>
                    <p>Coordenadas geográficas: -27.589742, -48.546766</p>
                    <p>Resíduos aceitos: Papel, Plástico e Metal</p>
                    <p>Usuário: 033.986.478-26</p>
                </div>

                <div className={style.local}>
                    <h2>Beira Mar Norte</h2>
                    <p>Descrição: local movimentado e bem iluminado a noite.</p>
                    <p>Endereço: Rua B, 456</p>
                    <p>Coordenadas geográficas: -27.585363, -48.553581</p>
                    <p>Resíduos aceitos: Vidro, Papel e Plástico</p>
                    <p>Usuário: 083.987.578-32</p>
                </div>

                <div className={style.local}>
                    <h2>UFSC</h2>
                    <p>Descrição: local com bastante movimentação de estudantes.</p>
                    <p>Endereço: Rua C, 789</p>
                    <p>Coordenadas geográficas: -27.598443, -48.518345</p>
                    <p>Resíduos aceitos: Baterias e Plástico</p>
                    <p>Usuário: 093.988.678-38</p>
                </div>

                <div className={style.local}>
                    <h2>Jardim Botânico</h2>
                    <p>Descrição: local com bastante vegetação.</p>
                    <p>Endereço: Rua D, 1011</p>
                    <p>Coordenadas geográficas: -27.587117, -48.526800</p>
                    <p>Resíduos aceitos: Orgânicos e Papel</p>
                    <p>Usuário: 103.989.778-44</p>
                </div>

                {/* adicionar botões/icones em cada card para:
                 acessar - expande o card exibindo detalhes do local
                 editar - vai para a tela de cadastroLCR com os dados preenchidos
                 deletar - remove o local da lista e da API? */}

            </div>
        </div>


    )
}

export default ListagemLCR