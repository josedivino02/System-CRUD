import { useEffect, useState } from "react";
import RepositoryClient from "../core/RepositoryClient";
import CollectionClient from "../Backend/db/CollectionClient";
import Client from "../core/Client";
import useVisible from "./useVisible";

export default function useClients() {
    //tipando o repositorio a partir da classe  
    const repo: RepositoryClient = new CollectionClient()
    // importar o hook custom
    const { displayForm, displayTable, formView, tableView } = useVisible();

    // iniciar o estado do cliente (vauzio) (inicial state customer (null))
    const [client, setClient] = useState<Client>(Client.null())
    // obeter a lista de cliente via repositorio criado iniciando com uma lista 
    const [clients, setClients] = useState<Client[]>([])
   
    // usando o hook para causar mudança a partir de outra (um efeito colateral)
    // passando a função referencia, assim chamando automaticamente na inicialização do componente
    useEffect(getAll, [])
  
  // função que pegao todos os clientes
  function getAll() {
    // chamando a função do repositorio, then = recebe os clientes (quando obter os clientes) 
    repo.getAll().then(clients => { 
      // altera o estado do cliente, recebendo os dados do cliente 
      setClients(clients)
      // carregando a tabela
      displayTable()
    })
  }
  // cliente selecionado (select customer)
  function clientSelect(client: Client) {
    // pegando o cliente selecionado (get customer select)
    setClient(client)
    //vai para tela de formulario (go to screen form)
    displayForm()
  }
  // função de exclusão
  async function clientDelet(client: Client) {
    // chama a função de exclusao
    await repo.delet(client)
    // carrega todos 
    getAll()
  }
  // função salva/cria cliente
  async function saveClient(client: Client) {
    // salva/cria 
    await repo.save(client)
    // chama a função de obter todos
    getAll()
  }
  
  // função novo cliente function new customer
  function newclient() {
    //setando o evento de cliente vazio (set event customer null)
    setClient(Client.null())
    // carrega o formulario (loading form)
    displayForm()
  }
  
  return {
    clientSelect,
    clientDelet,
    saveClient,
    getAll,
    client,
    setClient,
    clients,
    newclient,
    formView,
    tableView,
    displayTable
  }
}