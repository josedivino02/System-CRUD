import { useState } from "react";
import Client from "../core/Client";
import Input from "./Input";
import Button from "./Button";

//typescript (interface para passar os parametros) (interface send the parameters)
interface formProps{
    //instanciando a class Cliente no atribuito (instantiating the Customer class in the attribute)
    client: Client
    //quando valor for modificado (when value is modified)
    changeClient?: (Client: Client) => void 
    // função para redirecionar (function redirect)
    cancel?: () => void
}

//formulário (form)
export default function Form(props: formProps) {
    // se o cliente tiver setado (if the customer has set)
    const id = props.client?.id 
    // setando os valores e alteração do cliente (set the values and alter of client)
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? '')
    const [email, setEmail] = useState(props.client?.email ?? '')
    const [cpf, setCpf] = useState(props.client?.doc ?? '')

    return (
        <div>
            {/* renderização condicional (condicional rendering) */}
            {id ? ( <Input readOnly text="Id" value={ id } className={`mb-4`} /> ) : false }
            {/* valor atual / evento quando o valor for modificado (current value / event when the value is modified) */}
            <Input text="Nome" value={ name } changeValue={ setName } className={`mb-4`}/>
            <Input text="Idade" type="number" value={ age } changeValue={ setAge } className={`mb-4`}/>
            <Input text="E-mail" type="email" value={ email } changeValue={ setEmail } className={`mb-4`}/>
            <Input text="CPF" value={ cpf } changeValue={ setCpf }/>
            <div className="flex justify-end mt-7">
                {/* cor /  retorna o cliente quando cadastrar um novo (quando botão for 'Salvar' (color / return customer when new register (when button for 'Salvar')) */}
                <Button className="mr-2" onClick={() => props.changeClient?.(new Client(name, +age, email, cpf, id))}>{ id ? 'Alterar' : 'Salvar' }</Button>
                <Button onClick={ props.cancel }>Cancelar</Button>
            </div>
        </div>
    )
}