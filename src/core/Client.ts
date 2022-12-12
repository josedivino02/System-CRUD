// Classe de dados do cliente (class client data)
class Client { 
    //variaveis (variables)
    #id: string
    #name: string
    #age: number
    #email: string
    #doc: string

    //Inicia a Classe (class beginning)
    constructor(name: string, age: number, email: string, doc: string, id: string = null) {
        this.#name = name
        this.#age = age
        this.#doc = doc
        this.#email = email
        this.#id = id
    }

    //Método cliente vazio (client null method)
    static null() {
        return new Client("", 0, "@mail.com", "000.000.000-00")
    }

    //(getters) 
    get id() {
        return this.#id
    }

    get age() {
        return this.#age
    }

    get name() {
        return this.#name
    }

    get email() {
        return this.#email
    }

    get doc() {
        return this.#doc
    }

}

export default Client