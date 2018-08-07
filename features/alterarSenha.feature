#language:pt
Funcionalidade: Recuperar senha
  Caso eu esqueça minha senha, sera
  necessario recuperar a mesma

    Esquema do Cenario: Recuperar a senha
        Dado que estou logado
        Entao devo ir para a pagina "http://35assword"
        Quando eu inserir <senhaAtual> no campo "senhaAtual"
        E eu inserir <novasenha> no campo "novasenha"
        E eu inserir <confirmaSenha> no campo "confirmaSenha"
        E clicar em "Alterar"
        Entao devo ir para a pagina "http://35.194.32.72:30080/home/bla"
        E devo fazer login com sucesso com a <novasenha>

    Exemplos:
    |senhaAtual|novasenha|confirmaSenha|
    |'aaaaa'|'hadada'|'hadada'|
    

