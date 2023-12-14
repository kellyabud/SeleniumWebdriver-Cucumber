Feature: Login

    Scenario: Não autorizar a entrada no sistema sem preencher os campos obrigatórios
        Given que o usuario esteja na tela de login
        When o usuario não informa email e senha e clica no botão Sign in
        Then o sistema exibe uma mensagem de erro

    Scenario: Usuário entrar no sistema com sucesso
        Given que fulano esteja na tela de login
        When o usuario informar email e senha válidos
        Then clicar no botão de Sign in e o usuário é logado com sucesso
