import style from './cadastroLCR.module.css'
import { useForm } from 'react-hook-form'
// import React from 'react'

function CadastroLCR() {

    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm()

    function onSubmit(formValue) {
        console.log("Formulário enviado", formValue)

        //addLocal({ ...formValue, cpf: Number(formValue.cpf) })
    }

    return (
        <div className={style.container}>
            <h1 className={style.title}>Cadastre um Local de Coleta de Resíduos</h1>

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

                <div className={style.address}> {/* usar dados da API ViaCEP - provavelmente para preenchimento automático */}
                    <label htmlFor="address">Endereço do local</label>
                    <input placeholder="digite o endereço"
                        type="text"
                        {...register("address", {
                            required: "Campo obrigatório.",
                            minLength: { value: 3, message: "Insira um endereço válido" },
                            maxLength: { value: 60, message: "Máximo 60 caracteres" },
                        })}
                    />
                    {errors?.address && <p>{errors.address.message}</p>}
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
            </form>
        </div>
    )
}

export default CadastroLCR