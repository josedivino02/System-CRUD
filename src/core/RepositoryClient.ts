import Client from "./Client";
//typescript (interface para passar os parametros) (interface send the parameters)
// definir uma interface para implementar e salvar
export default interface RepositoryClient {
    // metodos (methods)
    // salvar dados clientt (save data customer)
    save(client: Client): Promise<Client>
    // deletar cliente (delete customer)
    delet(client: Client): Promise<void>
    // todos os clientes (all of customer)
    getAll(): Promise<Client[]>
}