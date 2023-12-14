
import Cliente from "../core/cliente"
import { IconeEdicao, IconeLixo } from "./Icones"

interface TabelaCliente {
    cliente: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaCliente) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarTabela() {
        return (
            <tr>
                <th className="text-left p-3" >Código</th>
                <th className="text-left p-3" >Nome</th>
                <th className="text-left p-3" >Idade</th>
                {exibirAcoes ? <th className="p-3" >Ações</th> : false}
            </tr>
        )
    }

    function renderizarCliente() {
        return props.cliente?.map((cliente, i) => {
            return (
                <tr key={cliente.id}
                    className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-3">{cliente.id}</td>
                    <td className="text-left p-3">{cliente.nome}</td>
                    <td className="text-left p-3">{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })


    }

    function renderizarAcoes(cliente: Cliente) {
        return <>
            <td className="flex justify-center">
                {props.clienteSelecionado ?
                    <button
                        onClick={() => props.clienteSelecionado?.(cliente)}
                        className="flex justify-center items-center rounded-full hover:bg-green-100 p-2 m-2 text-green-700">{IconeEdicao}
                    </button>
                    : false
                }

                {props.clienteExcluido ?
                    <button
                        onClick={() => props.clienteExcluido?.(cliente)}
                        className="flex justify-center items-center rounded-full hover:bg-red-100 p-2 m-2 text-red-800">{IconeLixo}
                    </button>
                    : false
                }
            </td>
        </>
    }


    return (
        <table className="w-full rounded-md overflow-hidden">
            <thead className={`
            bg-gradient-to-t from-purple-500 to-purple-800
            text-gray-100           
                        `}>
                {renderizarTabela()}
            </thead>
            <tbody className="">
                {renderizarCliente()}
            </tbody>
        </table>
    )
}

