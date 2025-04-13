import Calcular from "./NumeroCalcular.js";
// Elabora um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
class Jantar extends Calcular{
    valorJantar(){
        let precoJantar = this.receberNumero()
        let taxaGarcom = this.taxaGarcom(precoJantar)
        alert(`Taxa Garçom: ${taxaGarcom.toFixed(2)} \nPreço Final: ${(Number(precoJantar) + Number(taxaGarcom)).toFixed(2)}`)
    }
    taxaGarcom(valor){
        return (valor * 10) / 100
    }
}

let jantar = new Jantar()
jantar.valorJantar()