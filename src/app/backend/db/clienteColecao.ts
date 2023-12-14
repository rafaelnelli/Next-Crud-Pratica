import { firebase } from '../config';
import firestore, {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    setDoc,
} from 'firebase/firestore'
import Cliente from '@/app/core/cliente';
import ClienteRepositorio from '@/app/core/clienteRepositorio';

export default class ColecaoCliente implements ClienteRepositorio {

    #conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            }
        },
        fromFirestore(snapshot: firestore.QueryDocumentSnapshot, options: firestore.SnapshotOptions) {
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id)
        }
    }

    #colecaoCliente = collection(firebase, 'clientes').withConverter(this
        .#conversor)

    async salvar(cliente: Cliente): Promise<Cliente | undefined> {
        if (cliente?.id) {
            await setDoc(
                doc(firebase, 'clientes', cliente.id).withConverter(this.#conversor),
                cliente
            )
            return cliente
        } else {
            const docRef = await addDoc(
                this.#colecaoCliente,
                cliente,
            )
            const doc = await getDoc(docRef)
            return doc.data()
        }
    }

    async excluir(cliente: Cliente): Promise<void> {
        return await deleteDoc(doc(firebase, 'clientes', cliente.id))
    }

    async obterTodos(): Promise<Cliente[]> {
        const clientesCol = this.#colecaoCliente
        const clientesSnapshot = await getDocs(clientesCol)
        const clientesList = clientesSnapshot.docs.map((doc) => doc.data()) ?? []
        return clientesList
    }
}