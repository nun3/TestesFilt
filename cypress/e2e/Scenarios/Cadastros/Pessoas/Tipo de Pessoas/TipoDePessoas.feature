# language: pt

Funcionalidade: Cadastro de Tipo de Pessoas

Contexto: Login Filt
    Dado que acessei a tela de login no Filt
    E que cliquei no menu principal "Cadastros"
    E que cliquei no menu "Pessoas"
    E que cliquei no sub-menu "Tipo de Pessoa"

Cenário: Cadastro de Tipo de Pessoa Simples
    Dado que acessei o formulário de Tipo de Pessoa
    Quando clico no botão 'Novo'
    E preencho o campo Descrição com o valor 'Tipo Pessoa teste'
    E clico no botão 'Salvar'
    E aguardo o status 'Salvo com sucesso'
    Então o Cadastro de Tipo de Pessoa Simples deve ser salva com os seguintes dados:
    | Id        | Descricao         |
    | Generator | Tipo Pessoa teste |

Cenário: Edição de Tipo de Pessoa Simples
    Dado que acessei o formulário de Tipo de Pessoa
    Quando filtro pelo ultimo id do registro gerado
    E seleciono  a linha verificando o valor da descrição 'Tipo Pessoa teste'
    E preencho o campo Descrição com o valor 'Tipo Pessoa teste Edição'
    E clico no botão 'Salvar'
    E aguardo o status 'Salvo com sucesso'
    Então o Cadastro de Tipo de Pessoa Simples deve ser salva com os seguintes dados:
    | Id        | Descricao                |
    | Generator | Tipo Pessoa teste Edição |

Cenário: Exclusão de Tipo de Pessoa Simples
    Dado que acessei o formulário de Tipo de Pessoa
    Quando filtro pelo ultimo id do registro gerado
    E clico na opção » remover « Cadastro na Tela de Tipo Pessoa
    E aguardo a tela de confirmação de exclusão
    E clico no botão Sim na tela de Tipo de Pessoa
    Então o Cadastro de Tipo de Pessoa Simples deverá ser excluido, seguido do status 'Registro removido com sucesso'
  

  


