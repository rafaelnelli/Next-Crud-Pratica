interface EntradaProps {
    texto: string,
    tipo?: 'text' | 'number',
    valor: any,
    somenteLeitura?: boolean,
    place?: string,
    valorMudou?: (valor: any) => void
}

export default function Entrada(props: EntradaProps) {
    return (
        <div className="flex flex-col">
            <label className="mb-2 mt-4">{props.texto}</label>
            <input type={props.tipo ?? 'text'} value={props.valor} readOnly={props.somenteLeitura} placeholder={props.place} onChange={e => props.valorMudou?.(e.target.value)}
                className={` border border-purple-500 rounded-lg px-2 py-2 focus:outline-none  bg-gray-100 ${props.somenteLeitura ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    )
}