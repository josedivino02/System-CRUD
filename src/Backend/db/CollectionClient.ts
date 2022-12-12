import firebase from "../config"
import Client from "../../core/Client";
import RepositoryClient from "../../core/RepositoryClient";
// classe para CRUD do cliente / class implemnta com repositorio (class for CRUD customer )
export default class CollectionClient implements RepositoryClient {
    
    // firestore metodo conversor (conveter uma classe que persiste no firestore e recebo do firestore e converto minha classe)
    #converter = {
        // metodo do firesotre chamado tofirestore
        toFirestore(client: Client) {
            // converte e devolve um objeto apto a ser persistido no firestore
            // converter classe em objeto
            return {
                name: client.name,
                age: client.age,
                email: client.email,
                cpf: client.doc,
            }
        },
        // recebe os dados do firebase e retorna os dados do cliente 
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Client {
            // dados do snapshot.data passando o options
            const data = snapshot?.data(options)
            // para retornar os dados instancia na Classe com data
            return new Client(data.name, data.age, data.email, data.cpf, snapshot.id)
        }
    }
    // metodo assincrono que salva o cliente 
    async save(client: Client): Promise<Client> {
        // se o client id tiver setado, vou alterar
        if(client?.id) {
            // chama o convetor, passa o id pelo doc e instancia a função set
           await this.collection().doc(client.id).set(client)
            // returna o cliente alterado
           return client
        } else {
            // para salvar, chama o conversor e adiciona o dados client
            const docRef = await this.collection().add(client)
            //  retorna um snapshot do documento 
            const doc = await docRef.get()
            // retorna o client 
            return doc.data()
        }
    }
    // metodo assincrono de exclusão
    async delet(client: Client): Promise<void> {
        // chamo o convertor e passo o id pelo 'doc' e instancio a função de deletar
        return this.collection().doc(client.id).delete()
    }
    // metodo assincrono de obter todos
    async getAll(): Promise<Client[]> {
        // chama a conversor e instancia a função get
        const query = await this.collection().get()
        // pego todos o sdocumentos e faço um mapeamento 
        return query.docs.map(doc => doc.data()) ?? []
    }
    
    //conversão em uma função / coleção de dados cliente
    private collection() {
        //retorna 
        return firebase
        // coleção/dados de cliente (pode ser qualquer coisa) 
        .firestore().collection('clients')
        // e passo o meu conversor linha 8
        .withConverter(this.#converter)
    }
}