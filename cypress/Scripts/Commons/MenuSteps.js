import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import { Menu } from './MenuAction';

const Actmenu = new Menu

Given(`que cliquei no menu principal {string}`, (menuPrincipal) => {
    cy.wait(5000);
    cy.get('.button-img.ng-tns-c103-1').click();
    cy.SetMenuPrincipal(menuPrincipal);
});

Given(`que cliquei no menu {string}`, (menu) => {
    cy.SetMenu(menu)
});

When(`que cliquei no sub-menu {string}`, (submenu) => {
    cy.SetSubMenu(submenu)
});