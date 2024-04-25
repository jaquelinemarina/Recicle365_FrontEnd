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

        //addUser({ ...formValue, cpf: Number(formValue.cpf), number: Number(formValue.number), cep: Number(formValue.cep)})
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
                            required: "Campo obrigatório.",
                            minLength: { value: 3, message: "Insira um nome válido" },
                            maxLength: { value: 60, message: "Máximo 60 caracteres" },
                        })}
                    />
                    {errors?.name && <p>{errors.name.message}</p>}
                </div>

                <div className={style.cpf}> 
                    <label htmlFor="cpf">CPF</label>
                    <input placeholder="digite o seu CPF"
                        type="number"
                        {...register("cpf", {
                            required: "Campo obrigatório.",
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
                            required: "Campo obrigatório."
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
                            required: "Campo obrigatório.",
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
                            required: "Campo obrigatório.",
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
                            required: "Campo obrigatório.",
                            minLength: { value: 6, message: "Mínimo 6 caracteres" },
                        })}
                    />
                    {errors?.password && <p>{errors.password.message}</p>}
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

                <button className={style.btnRegister} type="submit">Cadastrar </button>
            </form>
        </div>
    )
}

export default CadastroUser