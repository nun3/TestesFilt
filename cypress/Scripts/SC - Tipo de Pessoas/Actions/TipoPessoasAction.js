const TipoPessoaElement = require('../ElementsMap/TipoPessoasElementsMap.json')

import ValidadorDeId from '../../Commons/ValidaID';
import SelectorObj from '../../Commons/CommonsObj';

export class TipoPessoaAction {
  
  ClickBtn(btncontext){
    cy.get(TipoPessoaElement.TipoPessoaLocators.BtnObj)
    .contains(btncontext)
    .click();
  }

  InputText(txtcontext){
    cy.get(TipoPessoaElement.TipoPessoaLocators.Descricaofield)
    .type(txtcontext);
  }

  ValidaStatus(status){
    cy.get(TipoPessoaElement.TipoPessoaLocators.status)
    .contains(status,{timeout:3000})
  }
 
  ValidaCadastroAtualizado(table) {
    let Id = 'Id', Descricao = 'Descricao';
    //cy.ValidaId(table,TipoPessoaElement.TipoPessoaLocators.IdPessoa,Id)
    ValidadorDeId.validaId(table, TipoPessoaElement.TipoPessoaLocators.IdPessoa,Id);
    cy.ValidaFields(table,TipoPessoaElement.TipoPessoaLocators.Descricaofield,Descricao)
  }
  ValidaGrid() {
    cy.get(SelectorObj.BtnFiltrar).click({force : true});
    cy.wait(1500);

    cy.get('input[name="filtro-id"]').type(ValidadorDeId.CONTEXTO_ID);// Acessa o valor de CONTEXTO_ID utilizando o alias

    cy.get('button[type="submit"][form="formFiltro"]').click()
  }

  SelectRow(valueID){
    if (valueID == 'ID'){
      valueID = ValidadorDeId.CONTEXTO_ID;
      valueID = valueID.replace(/^0+/, ''); 
    }
    cy.get('td.column-row-Data div').contains(valueID).click();

    cy.wait(500)
    cy.get(TipoPessoaElement.TipoPessoaLocators.IdPessoa).then($element => {
      let ValorUtilizadoNoFiltroParaComparar = $element.text();
      expect(ValidadorDeId.CONTEXTO_ID).to.equal(ValorUtilizadoNoFiltroParaComparar);
    });
    cy.wait(500)
    cy.get('#descricao').clear()
  }
}