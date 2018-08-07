
import {Base} from "../../features/specs/base/base";
import {Given, When, Then} from 'cucumber';
import { when } from "q";
var urlHome = 'http://35.194.32.72:30080/home/bla';
var campoLogin = "html/body/wl-root/wl-login-page/div/div/div/div/mat-form-field/div/div/div/input";
var camposenha = "/html/body/wl-root/wl-login-page/div/div[1]/div/div[2]/wl-input-password/mat-form-field/div/div[1]/div[1]/input";
var continuar = "/html/body/wl-root/wl-login-page/div/div[1]/div/div[3]/button";

let base = new Base();

Given('que eu navego para a url do weblife',()=> {
  var url = '';
  base.goTo(url);
});

When('quando eu inserir {string}', (string) => {
  base.insereUsuario(campoLogin, string);
});
When('quando eu inserir {string}', (string) => {
  base.insereSenha(camposenha, string);
});
When('clicar em continuar', () => {
  base.continuar(continuar);
});
Then('devo ir para a pagina {string}', (string) => {
  base.goTo(string);
  base.GetAtualUrl();
  base.Valida(urlHome);
});
Given('que estou logado',()=>{
  base.fazerLogin('',campoLogin,'login',camposenha,"senha",continuar,urlHome);
});
Then('devo fazer login com sucesso com a {string}',(senha)=>{
  base.fazerLogin('',campoLogin,'login',camposenha,senha,continuar,urlHome);
})


