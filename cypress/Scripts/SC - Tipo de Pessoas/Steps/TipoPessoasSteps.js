import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { TipoPessoaAction } from '../Actions/TipoPessoasAction';

const TipoPessoaAct = new TipoPessoaAction

Given('que acessei o formulário de Tipo de Pessoa', () => {
  cy.wait(10000)
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

Then(`o Cadastro de Tipo de Pessoa Simples deverá ser excluido, seguido do status {string}`, (status) => {
  TipoPessoaAct.ValidaStatus(status)
  cy.visit('/')
});

Then(`o Cadastro de Tipo de Pessoa Simples deve ser salva com os seguintes dados:`, (table) => {
    TipoPessoaAct.ValidaCadastroAtualizado(table)
});

When(`clico na opção » remover « Cadastro na Tela de Tipo Pessoa`, () => {
    TipoPessoaAct.BtnRemove()
});
When(`aguardo a tela de confirmação de exclusão`, () => {
    TipoPessoaAct.waiForConfirmation()
});
When(`clico no botão Sim na tela de Tipo de Pessoa`, () => {
    TipoPessoaAct.SimInDelete()
});
