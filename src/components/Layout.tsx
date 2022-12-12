import Title from "./Title"
//typescript (interface para passar os parametros) (interface send the parameters)
interface LayoutProps {
    title: string
    children: any
}
//função para Layout (funtion Layout)
// tipando o props (type the props)
export default function Layout(props: LayoutProps) {
    
    return (
        <div className={`
            flex flex-col w-2/3
            bg-white text-gray-800 rounded-md
        `}>
            <Title>{ props.title }</Title>
            <div className="p-6">
                { props.children }
            </div>
        </div>
    )
}