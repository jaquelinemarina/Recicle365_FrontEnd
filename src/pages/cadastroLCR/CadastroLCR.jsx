import style from './cadastroLCR.module.css'
import { useForm } from 'react-hook-form'
import { LocalsContext } from '../../context/localsContext'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

// ---------------------------------------------------------------------------------------------
// O QUR FALTA:
// - quando o usuário clicar no botão ele deve ser redirecionado para a tela de listagem de LCR
// ---------------------------------------------------------------------------------------------


function CadastroLCR() {

    const {
        register, handleSubmit, formState: { errors } } = useForm()

    const { registerLocal } = useContext(LocalsContext)

    // estado para armazenar os valores do formulário
    const [newUser, setNewUser] = useState({
        cpf: "",
        name: "",
        description: "",
        cep: "",
        address: "",
        number: "",
        neighborhood: "",
        city: "",
        state: "",
        coordinates: "",
        type: ""
    })

    function onSubmit(formValue) {
        console.log("Formulário enviado")
        alert("Local cadastrado com sucesso!")

        registerLocal({
            ...formValue,
            cpf: Number(formValue.cpf),
            number: Number(formValue.number),
            cep: Number(formValue.cep)
        })
    }

    return (
        <div className={style.container}>
            <h1 className={style.title}>Juntos, podemos fazer a diferença!</h1>
            <h2 className={style.subtitle}>Cadastre um local de coleta de resíduos.</h2>

            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>

                <div className={style.cpf}> {/* pegar dados do 4Devs */}
                    <label htmlFor="cpf">Digite o seu identificador de usuário (CPF)</label>
                    <input placeholder="digite seu CPF"
                        type="number"
                        {...register("cpf", {
                            required: "Campo obrigatório.",
                            minLength: { value: 11, message: "Insira um CPF válido" },
                            maxLength: { value: 11, message: "Máximo 11 caracteres" },
                        })}
                    />
                    {errors?.cpf && <p>{errors.cpf.message}</p>}
                </div>

                <div className={style.name}>
                    <label htmlFor="name">Nome do local</label>
                    <input placeholder="digite o nome do local"
                        type="text"
                        {...register("name", {
                            required: "Campo obrigatório.",
                            minLength: { value: 3, message: "Insira um nome válido" },
                            maxLength: { value: 60, message: "Máximo 60 caracteres" },
                        })}
                    />
                    {errors?.name && <p>{errors.name.message}</p>}
                </div>

                <div className={style.description}>
                    <label htmlFor="description">Descrição do local</label>
                    <input placeholder="descreva o local"
                        type="text"
                        {...register("description", {
                            maxLength: { value: 60, message: "Máximo 60 caracteres" },
                        })}
                    />
                    {errors?.description && <p>{errors.description.message}</p>}
                </div>


                <div className={style.cep}>
                    <label htmlFor="cep">CEP</label>
                    <input placeholder="digite o CEP"
                        type="number"
                        {...register("cep", {
                            required: "Campo obrigatório.",
                            minLength: { value: 3, message: "Insira um número válido" },
                            maxLength: { value: 9, message: "Máximo 9 caracteres" },
                        })}
                    />
                    {errors?.cep && <p>{errors.cep.message}</p>}
                </div>

                <div className={style.address}> {/* usar dados da API ViaCEP - provavelmente para preenchimento automático */}
                    <label htmlFor="address">Endereço</label>
                    <input placeholder="digite o seu endereço"
                        type="text"
                        {...register("address", {
                            required: "Campo obrigatório.",
                            minLength: { value: 3, message: "Insira um endereço válido" },
                            maxLength: { value: 60, message: "Máximo 60 caracteres" },
                        })}
                    />
                    {errors?.address && <p>{errors.address.message}</p>}
                </div>

                <div className={style.number}>
                    <label htmlFor="number">Número</label>
                    <input placeholder="digite o número da sua residência"
                        type="number"
                        {...register("number", {
                            required: "Campo obrigatório.",
                            minLength: { value: 1, message: "Insira um número válido" },
                            maxLength: { value: 5, message: "Máximo 5 caracteres" },
                        })}
                    />
                    {errors?.number && <p>{errors.number.message}</p>}
                </div>

                <div className={style.neighborhood}>
                    <label htmlFor="neighborhood">Bairro</label>
                    <input placeholder="digite o seu bairro"
                        type="text"
                        {...register("neighborhood", {
                            required: "Campo obrigatório.",
                            minLength: { value: 3, message: "Insira um nome válido" },
                            maxLength: { value: 60, message: "Máximo 60 caracteres" },
                        })}
                    />
                    {errors?.neighborhood && <p>{errors.neighborhood.message}</p>}
                </div>

                <div className={style.city}>
                    <label htmlFor="city">Cidade</label>
                    <input placeholder="digite a cidade"
                        type="text"
                        {...register("city", {
                            required: "Campo obrigatório.",
                            minLength: { value: 3, message: "Insira um nome válido." },
                            maxLength: { value: 60, message: "Máximo 60 caracteres." },
                        })} />
                    {errors?.city && <p>{errors.city.message}</p>}
                </div>

                <div className={style.state}>
                    <label htmlFor="state">Estado</label>
                    <select name="state" id="state"
                        {...register("state", {
                            required: "Por favor, selecione uma opção."
                        })}>
                        <option value="">selecione o estado</option>
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="AM">AM</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MT">MT</option>
                        <option value="MS">MS</option>
                        <option value="MG">MG</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PR">PR</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SP">SP</option>
                        <option value="SE">SE</option>
                        <option value="TO">TO</option>
                    </select>
                    {errors?.state && <p>{errors.state.message}</p>}
                </div>


                <div className={style.coordinates}>
                    <label htmlFor="coordinates">Cordenadas geográficas</label>
                    <input placeholder="digite as coordenadas"
                        type="text"
                        {...register("coordinates", {
                            maxLength: { value: 60, message: "Máximo 60 caracteres" }
                        })}
                    />
                    {errors?.coordinates && <p>{errors.coordinates.message}</p>}
                </div>

                <div className={style.type}>
                    <label>Tipos de resíduos aceitos:</label>

                    <label htmlFor="type">Plástico</label>
                    <input type="checkbox" value="Plástico"
                        {...register('type', {
                            required: 'Por favor, selecione pelo menos uma opção.'
                        })} />
                    <label htmlFor="type">Metal</label>
                    <input type="checkbox" value="Metal"
                        {...register('type', {
                            required: 'Por favor, selecione pelo menos uma opção.'
                        })} />
                    <label htmlFor="type">Vidro</label>
                    <input type="checkbox" value="Vidro"
                        {...register('type', {
                            required: 'Por favor, selecione pelo menos uma opção.'
                        })} />
                    <label htmlFor="type">Papel</label>
                    <input type="checkbox" value="Papel"
                        {...register('type', {
                            required: 'Por favor, selecione pelo menos uma opção.'
                        })} />
                    <label htmlFor="type">Baterias</label>
                    <input type="checkbox" value="Baterias"
                        {...register('type', {
                            required: 'Por favor, selecione pelo menos uma opção.'
                        })} />
                    <label htmlFor="type">Orgânicos</label>
                    <input type="checkbox" value="Orgânicos"
                        {...register('type', {
                            required: 'Por favor, selecione pelo menos uma opção.'
                        })} />
                    <label htmlFor="type">Outros</label>
                    <input type="checkbox" value="Outros"
                        {...register('type', {
                            required: 'Por favor, selecione pelo menos uma opção..'
                        })} />

                    {errors?.type && <p>{errors.type.message}</p>}
                </div>

                <button className={style.btnRegisterLocal} type="submit">Salvar</button>
                <Link to="/listagemLCR">Lista de Locais de Coleta de Resíduos</Link> {/* solução temporária de redirecionamento */}
            </form>
        </div>
    )
}

export default CadastroLCR