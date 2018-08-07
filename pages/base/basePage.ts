
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
import { browser, by, element, promise } from "protractor";

export class basePage {
  
  get = async function (url){
    if (url === ''){
      return await browser.get('/');
    }else{
      return await browser.get(url); 
    }
  };
  Escrever = async function(string, string2 ){
    await element(by.xpath(string)).sendKeys(string2);
    
  };
  
  Clicar = async function(continuar ){
    await element(by.xpath(continuar)).click();
    
  };
  GetAtualUrl = async function(){
    await expect( browser.getCurrentUrl());
  };
  ComparaUrl = async function(urlHome){
    await expect ( browser.getCurrentUrl(), urlHome)
  };
  
  
}