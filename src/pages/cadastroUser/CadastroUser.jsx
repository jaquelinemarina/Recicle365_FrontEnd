import style from './cadastroUser.module.css'
import { useForm } from 'react-hook-form'
// import React from 'react'

function CadastroUser() {

    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm()

    function onSubmit(formValue) {
        console.log("Formulário enviado", formValue)

        //addUser({ ...formValue, cpf: Number(formValue.cpf) })
    }

    return (
        <div className={style.container}>
            <h1 className={style.title}>Cadastre-se no Recicle365!</h1>

            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={style.name}>
                    <label htmlFor="name">Nome completo</label>
                    <input placeholder="digite o seu nome completo"
                        type="text"
                        {...register("name", {
                            required: "Por favor, digite seu nome completo.",
                            minLength: { value: 3, message: "Insira um nome válido" },
                            maxLength: { value: 60, message: "Máximo 60 caracteres" },
                        })}
                    />
                    {errors?.name && <p>{errors.name.message}</p>}
                </div>

                <div className={style.cpf}> {/* pegar dados do 4Devs */}
                    <label htmlFor="cpf">CPF</label>
                    <input placeholder="digite o seu CPF"
                        type="number"
                        {...register("cpf", {
                            required: "Por favor, digite seu CPF.",
                            minLength: { value: 11, message: "Insira um CPF válido" },
                            maxLength: { value: 11, message: "Máximo 11 caracteres" },
                        })}
                    />
                    {errors?.cpf && <p>{errors.cpf.message}</p>}
                </div>

                <div className={style.sex}>
                    <label htmlFor="sex">Sexo</label>
                    <select name="sex" id="sex"
                        {...register("sex", {
                            required: "Por favor, selecione uma opção."
                        })}>
                        <option value="">selecione uma opção</option>
                        <option value="Homem">Homem</option>
                        <option value="Mulher">Mulher</option>
                        <option value="Vazio">Prefiro não responder</option>
                    </select>
                    {errors?.sex && <p>{errors.sex.message}</p>}
                </div>

                <div className={style.born}>
                    <label htmlFor="born">Data de nascimento</label>
                    <input placeholder="digite a data do seu nascimento"
                        type="datetime"
                        {...register("born", {
                            required: "Por favor, digite a data do seu nascimento.",
                            minLength: { value: 8, message: "Insira uma data válida" },
                            maxLength: { value: 8, message: "Máximo 8 caracteres" },
                        })}
                    />
                    {errors?.born && <p>{errors.born.message}</p>}
                </div>

                <div className={style.email}>
                    <label htmlFor="email">Email</label>
                    <input placeholder="digite seu email"
                        type="email"
                        {...register("email", {
                            required: "Por favor, digite seu email.",
                            minLength: { value: 3, message: "Insira uma email válido" },
                            maxLength: { value: 60, message: "Máximo 60 caracteres" },
                        })}
                    />
                    {errors?.email && <p>{errors.email.message}</p>}
                </div>


                <div className={style.password}>
                    <label htmlFor="password">Senha</label>
                    <input placeholder="digite sua senha"
                        type="password"
                        {...register("password", {
                            required: "Por favor, digite sua senha.",
                            minLength: { value: 6, message: "Mínimo 6 caracteres" },
                        })}
                    />
                    {errors?.password && <p>{errors.password.message}</p>}
                </div>

                <div className={style.address}> {/* usar dados da API ViaCEP - provavelmente para preenchimento automático */}
                    <label htmlFor="address">Endereço</label>
                    <input placeholder="digite o seu endereço"
                        type="text"
                        {...register("address", {
                            required: "Por favor, digite seu endereço.",
                            minLength: { value: 3, message: "Insira um endereço válido" },
                            maxLength: { value: 60, message: "Máximo 60 caracteres" },
                        })}
                    />
                    {errors?.address && <p>{errors.address.message}</p>}
                </div>

                <button className={style.btnRegister} type="submit">Cadastrar </button>
            </form>
        </div>
    )
}

export default CadastroUser