import Client from "../core/Client"
import { IconDelet, IconEdit } from "./Icons"
//typescript (interface para passar os parametros) (interface send the parameters)
interface TableProps {
    clients: Client[]
    //informações quando clicar no botão (information when clicking the button)
    clientSelect?: (client: Client) => void
    clientDelet?: (client: Client) => void
}

//função da tabela (function table)
export default function Table(props: TableProps) {
    //exibir os botões de ação (display button action)
    const displayAction = props.clientSelect || props.clientDelet
    //renderização do cabeçalho da tabela (table header rendering)
    function renderHeader() {
        return (
            <thead className={`
                bg-gradient-to-l from-cyan-500 to-cyan-800
                text-gray-100
            `}>
                <tr>
                    <th className={`text-left p-4`}>CPF</th>
                    <th className={`text-left p-4`}>Nome</th>
                    <th className={`text-left p-4`}>E-mail</th>
                    {/* se exibe o botão quando existir ação (if display the button when exist action) */}
                    { displayAction ? <th className={`p-4`}>Ações</th> : false }
                </tr>
            </thead>
        )
    }
    // renderização dos dados do cliente (client data rendering)
    function renderData() {
        return props.clients?.map((client, i) => {
            return (
                <tbody>
                    {/* mudar cor a cada registro (change color every register) */}
                    <tr key={ client.id } className={`${i % 2 === 0 ? 'bg-cyan-200' : 'bg-cyan-100'}`}>
                        <td className={`text-left p-4`}>{ client.doc }</td>
                        <td className={`text-left p-4`}>{ client.name }</td>
                        <td className={`text-left p-4`}>{ client.email }</td>
                        {/* se exibe o botão quando existir ação, chama a renderização (if display the button when exist action, call the rendering) */}
                        { displayAction ? renderAction(client) : false }
                    </tr>
                </tbody>
            )
        })
    }
    //renderizar botão de ação (action button rendering)
    function renderAction(client: Client) {
        return (
            <td className={`flex justify-center`}>
                {/* verifica para exibir os botões / evento de clicar /evento carrega os dados do cliente / icone (verify for display the buttons / event onclick / icon) */}
                { props.clientSelect ? ( <button onClick={() => props.clientSelect?.(client)} className={`flex justify-center items-center text-blue-600 rounded-full p-2 m-1 hover:bg-cyan-50`}>{ IconEdit }</button> ) : false }
                { props.clientDelet ? (<button onClick={() => props.clientDelet?.(client)} className={`flex justify-center items-center text-red-600 rounded-full p-2 m-1 hover:bg-cyan-50`}>{ IconDelet }</button>) : false }
                
            </td>
        )
    }
    //
    return(
        <table className={`w-full rounded-xl overflow-hidden`}>
            {/* renderiza as função tabelas */}
            { renderHeader() }
            { renderData() }
        </table>
    )
}