import { useEffect, useState } from "react"
import Cliente from "../core/cliente"
import ClienteRepositorio from "../core/clienteRepositorio"
import ColecaoCliente from "../backend/db/clienteColecao"
import useExibir from "./useExibir"

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente

    const { formularioVisivel, tabelaVisivel, exibirFormulario, exibirTabela } = useExibir()


    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes),
                exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente),
            exibirFormulario()
    }

    function excluirCliente(cliente: Cliente) {
        repo.excluir(cliente),
            obterTodos()
    }

    function salvarCliente(cliente: Cliente) {
        repo.salvar(cliente),
            obterTodos()
    }

    function novoCliente() {
        exibirFormulario()
        setCliente(Cliente.vazio())
    }

    return {
        exibirTabela,        
        tabelaVisivel,
        clientes,
        cliente,
        salvarCliente,
        novoCliente,
        excluirCliente,
        selecionarCliente,
    }

}