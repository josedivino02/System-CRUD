import Button from "../components/Button";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Form from "../components/Form";
import useClients from "../hooks/useClient";

export default function Home() {
 
  // importar o hook custom
  const { clientDelet, getAll, clientSelect, saveClient, client, clients, newclient, formView, tableView, displayTable } = useClients()

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-slate-700 to-slate-600
    text-white
    `}>
      <Layout title="Cadastro">
      {/* validação de exibição das telas (validate display screen) */}
      { tableView ? (
        // fragmento (fragment)
        <>
          <div className="flex justify-end">
            {/* carrega o formulario de cadastro (loading form create) */}
            {/* evento novo cliente (event new customer) */}
            <Button className="mb-4" onClick={newclient} >Cadastrar Cliente</Button>
          </div> 
          {/* carrega clientes / seleciona cliente, deleta cliente  */}
          <Table clients={ clients } clientSelect={ clientSelect } clientDelet={ clientDelet }></Table>
        </>
        // dados do client selecionado / função para salvar o dados atualizados do cliente / botão voltar para tabela lista de cliente 
        // ( customer select data / function to save updated customer data / button back for table list customer)
      ) : <Form client={ client } changeClient={saveClient} cancel={() => displayTable()}/>}
      
      </Layout>
    </div>
  )
}
