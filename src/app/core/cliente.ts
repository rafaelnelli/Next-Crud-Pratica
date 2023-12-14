export default class Cliente {
    #id: string | null;
    #nome: string;
    #idade: number;

    constructor(nome: string, idade: number, id: string | null = null) {
        this.#id = id;
        this.#nome = nome;
        this.#idade = idade;
    }

    static vazio() {
        return new Cliente('', 0);
    }

    get id(): any {
        return this.#id;
    }

    get nome(): any {
        return this.#nome;
    }

    get idade(): any {
        return this.#idade;
    }
}