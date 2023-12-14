"use client"

import Botao from './components/Botao'
import Formulario from './components/Formulario'
import Layout from './components/Layout'
import Tabela from './components/Tabela'
import useClientes from './hooks/useClientes'

export default function Home() {
  const { exibirTabela,
    tabelaVisivel,
    selecionarCliente,
    novoCliente, excluirCliente,
    salvarCliente,
    cliente,
    clientes } = useClientes()

  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white`}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end" >
              <Botao className="mb-4"
                onClick={novoCliente}>Novo Cliente
              </Botao>
            </div>
            <Tabela cliente={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}></Tabela>
          </>
        ) : (
          <Formulario
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
            cliente={cliente}></Formulario>
        )
        }
      </Layout>
    </div >
  );
};