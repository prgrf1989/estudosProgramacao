import Calcular from "./NumeroCalcular.js";

class DobrarNumero extends Calcular{
    dobrar(){
        let numero = this.receberNumero()
        alert(`O dobro de ${numero} é ${numero * 2}`)
    }
}

let testeClasse = new DobrarNumero()
testeClasse.dobrar()