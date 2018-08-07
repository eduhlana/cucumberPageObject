import {Given, When, Then} from 'cucumber';
import {basePage} from '../base/basePage'
const base = new basePage();

When('eu inserir {string} no campo {string}', (string, string2)=> {
  return 'ok';
});
