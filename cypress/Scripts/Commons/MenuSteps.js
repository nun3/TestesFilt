import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import { Menu } from './MenuAction';

const Actmenu = new Menu

When(`que cliquei no menu {string}`, (menu) => {
    Actmenu.SetMenu(menu) 
});

When(`que cliquei no sub-menu {string}`, (submenu) => {
    Actmenu.SetSubMenu(submenu)
});