#language:pt
Funcionalidade: Login
  Como um usuario weblife que 
  possua as devidas permissões eu
  devo fazer login.
  Esquema do Cenario: Realizar Login com usuario válido
    Dado que eu navego para a url do weblife
    Quando eu inserir <Usuario> no campo "usuario"
    E eu inserir <Senha> no campo "senha"
    E clicar em continuar
    Entao devo ir para a pagina "http://35.194.32.72:30080/home/bla"

    Exemplos:
    |Usuario|Senha|
    |'aaaa'|'aaa'|
    |"BBB"|"mdvnjsncvj"|

