// Função titulo (function title)
export default function Title(props: any) {

    return (
        <div className={ `flex flex-col justify-center bg-gradient-to-l to-slate-700 from-slate-400 text-gray-50` }>
            {/* recebendo o filho (get the child)*/}
            <h1 className={ `px-5 py-2 text-2xl` }>{ props.children }</h1>
            <hr className={ `border-2 border-cyan-500` }/>
        </div>
    )
}