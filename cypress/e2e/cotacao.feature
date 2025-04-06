Feature: Cotação de Seguro de Veículo

  Scenario: Realizar cotação preenchendo todos os dados obrigatórios
    Given que o usuário acessa a aplicação de seguro de veículo
    When o usuário preenche todas as abas obrigatórias
    And seleciona uma opção em "Select Price Option"
    And preenche os dados na aba "Send Quote" e clica em enviar
    Then o sistema exibe uma mensagem "Email sending success!"
