import { useState } from "react"
import Entrada from "./Entrada"
import Cliente from "../core/cliente"
import Botao from "./Botao"

interface FormularioProps {
    cliente: Cliente,
    clienteMudou?: (cliente: Cliente) => void,
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return (
        <div>
            {id ? (
                <Entrada texto="Código" valor={id} somenteLeitura></Entrada>) : false
            }
            <Entrada texto="Nome" valor={nome} tipo="text" valorMudou={setNome}></Entrada>
            <Entrada texto="Idade" valor={idade} tipo="number" place="Informe a idade" valorMudou={setIdade}></Entrada>
            <div className="mt-3 flex justify-end">
                <Botao className="mr-2 bg-gradient-to-r from-green-500 to-green-700"
                    onClick={() => props.clienteMudou?.(new Cliente(nome, idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao className="mr-2 bg-gradient-to-r from-red-400 to-red-600"
                    onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )

}