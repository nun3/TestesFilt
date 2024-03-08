export class Menu {
  
    SetMenu(menucontext){
        cy.clickMenu(menucontext)
  }
    SetSubMenu(submenucontext){
        cy.clickSubMenu(submenucontext)
  }
}