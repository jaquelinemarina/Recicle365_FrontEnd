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
        register, handleSubmit, setValue, getValues, setFocus, formState: { errors } } = useForm()

    const { registerLocal } = useContext(LocalsContext)

    // função para buscar o CEP na API ViaCEP
    const checkCEP = () => {
        const cep = getValues('cep')
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setValue('address', data.logradouro)
                setValue('neighborhood', data.bairro)
                setValue('city', data.localidade)
                setValue('state', data.uf)
                setFocus('number')
            })
            .catch(error => console.error('Erro ao obter CEP:', error))
    }

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
        <div className={style.containerLCR}>
            <div className={style.titleLCR}>
                <h1>Juntos, podemos fazer a diferença.</h1>
                <h2>Cadastre um local de coleta de resíduos.</h2>
            </div>

            <form className={style.formLCR} onSubmit={handleSubmit(onSubmit)}>

                <div className={style.cpf}> {/* pegar dados do 4Devs */}
                    <label htmlFor="cpf">Identificador de usuário (CPF)</label>
                    <input placeholder="digite seu CPF"
                        type="number"
                        {...register("cpf", {
                            required: "Campo obrigatório.",
                            minLength: { value: 11, message: "Insira um CPF válido" },
                            maxLength: { value: 11, message: "Máximo 11 caracteres" },
                        })}
                    />
                    {errors?.cpf && <p className={style.error}>{errors.cpf.message}</p>}
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
                    {errors?.name && <p className={style.error}>{errors.name.message}</p>}
                </div>

                <div className={style.description}>
                    <label htmlFor="description">Descrição do local</label>
                    <input placeholder="descreva o local"
                        type="text"
                        {...register("description", {
                            maxLength: { value: 60, message: "Máximo 60 caracteres" },
                        })}
                    />
                    {errors?.description && <p className={style.error}>{errors.description.message}</p>}
                </div>


                <div className={style.cep}>
                    <label htmlFor="cep">CEP</label>
                    <input placeholder="digite o CEP"
                        type="number"
                        {...register("cep", {
                            onBlur: () => checkCEP(),
                            required: "Campo obrigatório.",
                            minLength: { value: 3, message: "Insira um número válido" },
                            maxLength: { value: 9, message: "Máximo 9 caracteres" },
                        })}
                    />
                    {errors?.cep && <p className={style.error}>{errors.cep.message}</p>}
                </div>

                <div className={style.address}> {/* usar dados da API ViaCEP - provavelmente para preenchimento automático */}
                    <label htmlFor="address">Rua</label>
                    <input placeholder="digite o nome da rua"
                        type="text"
                        {...register("address", {
                            required: "Campo obrigatório.",
                            minLength: { value: 3, message: "Insira um endereço válido" },
                            maxLength: { value: 60, message: "Máximo 60 caracteres" },
                        })}
                    />
                    {errors?.address && <p className={style.error}>{errors.address.message}</p>}
                </div>

                <div className={style.number}>
                    <label htmlFor="number">Número</label>
                    <input placeholder="digite o número"
                        type="number"
                        {...register("number", {
                            required: "Campo obrigatório.",
                            minLength: { value: 1, message: "Insira um número válido" },
                            maxLength: { value: 5, message: "Máximo 5 caracteres" },
                        })}
                    />
                    {errors?.number && <p className={style.error}>{errors.number.message}</p>}
                </div>

                <div className={style.neighborhood}>
                    <label htmlFor="neighborhood">Bairro</label>
                    <input placeholder="digite o bairro"
                        type="text"
                        {...register("neighborhood", {
                            required: "Campo obrigatório.",
                            minLength: { value: 3, message: "Insira um nome válido" },
                            maxLength: { value: 60, message: "Máximo 60 caracteres" },
                        })}
                    />
                    {errors?.neighborhood && <p className={style.error}>{errors.neighborhood.message}</p>}
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
                    {errors?.city && <p className={style.error}>{errors.city.message}</p>}
                </div>

                <div className={style.state}>
                    <label htmlFor="state">Estado</label>
                    <select className={style.select} name="state" id="state"
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
                    {errors?.state && <p className={style.error}>{errors.state.message}</p>}
                </div>


                <div className={style.coordinates}>
                    <label htmlFor="coordinates">Cordenadas geográficas</label>
                    <input placeholder="digite as coordenadas"
                        type="text"
                        {...register("coordinates", {
                            maxLength: { value: 60, message: "Máximo 60 caracteres" }
                        })}
                    />
                    {errors?.coordinates && <p className={style.error}>{errors.coordinates.message}</p>}
                </div>

                <h3 className={style.typeTitle}>Tipos de resíduos aceitos:</h3>
                <div className={style.type}>

                    <div className={style.typeInput}>
                        <input type="checkbox" value="plástico"
                            {...register('type', {
                                required: 'Por favor, selecione uma opção.'
                            })} />

                        <input type="checkbox" value="metal"
                            {...register('type', {
                                required: 'Por favor, selecione uma opção.'
                            })} />

                        <input type="checkbox" value="vidro"
                            {...register('type', {
                                required: 'Por favor, selecione uma opção.'
                            })} />

                        <input type="checkbox" value="papel"
                            {...register('type', {
                                required: 'Por favor, selecione uma opção.'
                            })} />

                        <input type="checkbox" value="baterias"
                            {...register('type', {
                                required: 'Por favor, selecione uma opção.'
                            })} />

                        <input type="checkbox" value="orgânico"
                            {...register('type', {
                                required: 'Por favor, selecione uma opção.'
                            })} />

                        <input type="checkbox" value="outros"
                            {...register('type', {
                                required: 'Por favor, selecione uma opção.'
                            })} />

                        {errors?.type && <p className={style.errorType}>{errors.type.message}</p>}
                    </div>

                    <div className={style.typeLabel}>
                        <label htmlFor="type">Plástico</label>
                        <label htmlFor="type">Metal</label>
                        <label htmlFor="type">Vidro</label>
                        <label htmlFor="type">Papel</label>
                        <label htmlFor="type">Baterias</label>
                        <label htmlFor="type">Orgânico</label>
                        <label htmlFor="type">Outros</label>
                    </div>

                    <div className={style.buttons}>
                        <button className={style.btnRegisterLocal} type="submit">Salvar</button>
                        <Link className={style.linkLCR} to="/listagemLCR">Locais de Coleta</Link> {/* solução temporária de redirecionamento */}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CadastroLCR