# language: pt

Funcionalidade: Tela de Login Filt

  # Cenário: Login Filt
  #   Dado que acessei a tela de login no Filt
  #   E que cliquei no menu "Cadastros"
  #   E que cliquei no sub-menu "Pessoas"
  #   E que cliquei no sub-menu "Tipo de Pessoa"
    # E que preenchi a tela de login com CPF válido
    # E que preenchi a tela de login com uma senha válida
    # Quando clico no botão Entrar
    # Entao visualizo a tela principal do Filt

# E que acessei o formulário de Tipo de Pessoa
# Quando clico no botão 2 'Novo'
#     When(`clico no botão 2 {string}`, (btn) => {
#   cy.get('button').contains(btn).then((teste) => {
#     const btn = teste[0].innerText;
#   })
# });

  Cenário: Login Filt
    Dado que acessei a tela de login no Filt
    E que cliquei no menu "Configurações"
    E que cliquei no sub-menu "Documentos Fiscais"
    E que cliquei no sub-menu "Envio de E-mail"
    
    