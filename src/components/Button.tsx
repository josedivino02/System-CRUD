//typescript (interface para passar os parametros) (interface send the parameters)
interface buttonProps {
    color?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}
//função de botão cadastro (function button)
//tipando o props (type the props)
export default function Button(props: buttonProps){
    //
    return(
        <button onClick={ props.onClick } className={`bg-gradient-to-r from-neutral-600 to-neutral-700 text-white px-4 py-2 rounded-md ${props.className}`}>{ props.children }</button>
    )
}