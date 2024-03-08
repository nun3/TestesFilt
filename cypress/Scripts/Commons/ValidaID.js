class ValidadorDeId {
  // Definir CONTEXTO_ID como uma propriedade estática da classe
  // Isso permitirá que outras classes acessem o valor de CONTEXTO_ID sem precisar instanciar a classe ValidadorDeId.
  static CONTEXTO_ID;
 
  // Método estático que valida o ID de uma tabela
  static validaId(table, MapId, ColunaId) {
    // Itera sobre cada linha da tabela
    table.hashes().forEach(row => {
      // Seleciona o elemento com o seletor MapId e verifica se é visível
      cy.get(MapId)
        .should('be.visible')
        .then($element => {
          // Define a variável CONTEXTO_ID como o texto do elemento selecionado
          let CONTEXTO_ID = $element.text();
          // Se o valor da coluna ColunaId da linha atual é "Generator", substitui-o pelo valor de CONTEXTO_ID
          if (row[ColunaId] === 'Generator') {
            row[ColunaId] = CONTEXTO_ID;
          }
          // Verifica se o valor de CONTEXTO_ID é igual ao valor da coluna ColunaId da linha atual
          expect(CONTEXTO_ID).to.equal(row[ColunaId]);
          // Atribui o valor de CONTEXTO_ID à propriedade estática CONTEXTO_ID da classe
          this.CONTEXTO_ID = CONTEXTO_ID;
        });
    });
  }
 }
 
 // Exporta a classe ValidadorDeId como padrão
 export default ValidadorDeId;