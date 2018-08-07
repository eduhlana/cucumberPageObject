
import {basePage} from '../../../pages/base/basePage';
const base = new basePage();

export class Base{

  goTo(url){
    base.get(url);
  }

  insereUsuario(campo,valor){
    base.Escrever(campo,valor);
  }

  insereSenha(campo, valor) {
    base.Escrever(campo,valor);
  }

  continuar(continuar){
      base.Clicar(continuar);
  }
  GetAtualUrl(){
    base.GetAtualUrl();
  };
  Valida(urlHome){
    base.ComparaUrl(urlHome);
  };

  fazerLogin(url,campoLogin, login, campoSenha, senha, continuar, urlhome){
    this.goTo(url);
    this.insereUsuario(campoLogin, login);
    this.insereSenha(campoSenha, senha);
    this.continuar(continuar);
    this.GetAtualUrl();
    this.Valida(urlhome);
  }
}