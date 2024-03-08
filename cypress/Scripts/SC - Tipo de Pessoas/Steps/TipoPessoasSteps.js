import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { TipoPessoaAction } from '../Actions/TipoPessoasAction';

const TipoPessoaAct = new TipoPessoaAction

Given(`que acessei o formulário de Tipo de Pessoa`, () => {
    cy.get('#main').click()
    cy.request('GET', '/api/master/menu/primeiro-nivel-by-url?url=/fiscal/tipo-pessoa').then(() => {
        cy.wait(5000);                          
        cy.url().should('eq', 'https://erp-homologacao.viasoft.com.br/pt/fiscal/tipo-pessoa');
    });  
});

When(`clico no botão {string}`, (btn) => {
    TipoPessoaAct.ClickBtn(btn)
});

When(`filtro pelo ultimo id do registro gerado`, () => {
    TipoPessoaAct.ValidaGrid()
});

When(`seleciono  a linha verificando o valor da descrição {string}`, (descvalue) => {
    TipoPessoaAct.SelectRow(descvalue)
});

When(`preencho o campo Descrição com o valor {string}`, (value) => {
    TipoPessoaAct.InputText(value)
});

When(`aguardo o status {string}`, (status) => {
    TipoPessoaAct.ValidaStatus(status)
});

Then(`o Cadastro de Tipo de Pessoa Simples deve ser salva com os seguintes dados:`, (table) => {
    TipoPessoaAct.ValidaCadastroAtualizado(table)
});

// Then(`eu filtro o id  do registro gerado e vejo as informações da linha na grid`, () => {
//     TipoPessoaAct.ValidaGrid()
// });