class ValidadorDeId {
  static CONTEXTO_ID; 
  // Definir CONTEXTO_ID como uma propriedade estática da classe
  //Isso permitirá que outras classes acessem o valor de CONTEXTO_ID sem precisar instanciar a classe ValidadorDeId.

  static validaId(table, MapId, ColunaId) {
    table.hashes().forEach(row => {
      cy.get(MapId)
        .should('be.visible')
        .then($element => {
          let CONTEXTO_ID = $element.text();
          if (row[ColunaId] === 'Generator') {
            row[ColunaId] = CONTEXTO_ID;
          }
          expect(CONTEXTO_ID).to.equal(row[ColunaId]);
          this.CONTEXTO_ID = CONTEXTO_ID; // Atribuir o valor a CONTEXTO_ID da classe
        });
    });
  }
}

export default ValidadorDeId;
