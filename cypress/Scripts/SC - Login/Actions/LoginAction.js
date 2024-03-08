const loginElement = require('../ElementsMap/LoginElementsMap.json')
export class LoginAction { 

    PreencheCPF(cpfcontext){
        cy.get(loginElement.LoginPageLocators.LoginForm)
          .find('input[placeholder="Informe seu CPF"]')
          .should('be.visible')
          .focus()
          .type(cpfcontext);
    }
    PreenchePass(passcontext){

        cy.get(loginElement.LoginPageLocators.LoginForm)
        .find('input[placeholder="Informe sua senha"]')
        .should('be.visible')
        .focus()
        .type(passcontext);
    }
    Submit(){
        cy.get(loginElement.LoginPageLocators.LoginForm)
        .submit();
    }
    ValidaPagelogin(){
        cy.get(loginElement.LoginPageLocators.PageAct)
        .should('be.visible');
    }
}