import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss','../explore-container/explore-container.component.scss']
})
export class Tab1Page {
  
  num1 : string
  num2 : string
  num3 : string
  saida : string
  
  constructor() {}

analisar(){
  var a = parseFloat(this.num1)
  var b = parseFloat(this.num2)
  var c = parseFloat(this.num3)
  if ((a + b) > c && (a + c) > b && (b + c) > a){
    if ((a == b) && (a == c) && (b == c)){
      this.saida = "Equilatero"
    }
    if ((a != b) && (a != c) && (b != c)){
      this.saida = "Escaleno"
    }
    if ((a == b && b != c) && (a == c && c != b) && (b == c && c != a)){
      this.saida = "Isosceles"
    }
  }
  else{
    this.saida = "Triangulo Não Existe"
  }
}

}
