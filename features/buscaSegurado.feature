#language:pt
Funcionalidade: Busca segurado
  Como um usuario weblife que 
  possua as devidas permissões eu
  desejo efetuar uma busca pelas informações 
  do segurado em atendimento.
  Esquema do Cenario: Realizar busca de segurado por cpf
    Dado que estou logado
    E devo ir para a pagina "Busca de segurado"
    Quando eu selecionar <campo> e inserir <valor>
    E clicar em "Buscar"
    Entao devo ir para a pagina "http://35.190/home/assured/result"

    Exemplos:
    |campo|valor|
    |'CPF'|'780.772.110-38'|
    |'CNPJ'|'72.358.101/0001-40'|
    |'NOME'|'FULADO DE TAL'|
    |'Nº DO CONTRATO'|'102021111'|
    |'Nº DO CERTIFICADO'|'302015555'|
    |'PLACA DO VEÍCULO'|'AGK6939'|




