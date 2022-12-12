import { useState } from 'react';

// função para visualizar a tela (function for view screen)
export default function useVisible() {
    // atual tela / modificar tela passando os possiveis estado (current screen / modified screen passing the possible states)
    const [visible, setVisible] = useState<'table' | 'form'>('table')

    // função para setar (function set)
    const displayTable = () => setVisible('table')
    const displayForm = () => setVisible('form')

    
    return {
        // instanciando o valor na variavies
        formView: visible === 'form',
        tableView: visible === 'table',
        displayForm,
        displayTable
    }
}