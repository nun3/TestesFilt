/// <reference types="Cypress" />
import { Given, When, Then, DataTable } from 'cypress-cucumber-preprocessor/steps';
import { LoginAction } from '../Actions/LoginAction';

const url = Cypress.config("baseUrl")
const LoginAct = new LoginAction

const valueCPF = '99663771070'
const valuepass = 'homepage'

Given(`que acessei a tela de login no Filt`, () => {
    cy.visit(url)
    LoginAct.PreencheCPF(valueCPF)
    LoginAct.PreenchePass(valuepass)
    LoginAct.Submit()
    LoginAct.ValidaPagelogin()
    
});

// Given(`que preenchi a tela de login com CPF válido`, () => {
//     LoginAct.PreencheCPF(valueCPF)
// });
// Given(`que preenchi a tela de login com uma senha válida`, () => {
//     LoginAct.PreenchePass(valuepass)
// });
// When(`clico no botão Entrar`, () => {
//     LoginAct.Submit()
// });
// Then(`visualizo a tela principal do Filt`, () => {
//     LoginAct.ValidaPagelogin()
// });