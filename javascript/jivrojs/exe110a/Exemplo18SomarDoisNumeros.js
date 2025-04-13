import Calcular from "./NumeroCalcular.js";

class Somar2Numeros extends Calcular{
    somar(){
        let num01 = this.receberNumero()
        let num02 = this.receberNumero()
        let valorCalculado = Number(num01) + Number(num02)
        alert(`${num01} + ${num02} = ${valorCalculado}`)
    }
}

let exemplo = new Somar2Numeros()
exemplo.somar()
