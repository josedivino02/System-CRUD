//typescript (interface para passar os parametros) (interface send the parameters)
interface InputProps{
    text: string
    // tipo do campo (input type)
    type?: 'text' | 'number' | 'email'
    value: any
    readOnly?: boolean
    className?: string
    //novo value inputado (new input value) | quando valor for modificado (when value is modified)
    changeValue?: (value: any) => void
}
//input do formulario
export default function Input(props: InputProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            {/* texto do input (input text) */}
            <label className={`mb-2`}>{ props.text }</label>
            {/* estrutura do input (struct input) */}
            <input 
                className={`border border-cyan-500 rounded-lg focus: outline-none bg-slate-400 px-4 py-2 ${props.readOnly ? '' : 'focus: bg-white'}`} 
                type={ props.type ?? 'text' }  
                // valor atual (current value)
                value={ props.value } 
                readOnly={ props.readOnly ?? false }
                // novo valor no evento onchange (new value is event onChange)
                onChange={e => props.changeValue?.(e.target.value)}/>
        </div>
    )
}