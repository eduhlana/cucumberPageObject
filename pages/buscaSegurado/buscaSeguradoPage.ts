import {Given, When, Then} from 'cucumber';
import {basePage} from '../base/basePage'
const base = new basePage();
const buscar = '';
When('eu selecionar {string} e inserir {string}', (string, string2)=> {
    return 'ok';
});
When('clicar em {string}', (string)=> {
    this.string = buscar;
    base.Clicar(string);
});