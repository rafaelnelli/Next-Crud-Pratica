import Cliente from "./cliente"

export default interface ClienteRepositorio {
    salvar(cliente: Cliente): Promise<Cliente | undefined>
    excluir(cliente: Cliente): Promise<void>
    obterTodos(): Promise<Cliente[]>
}