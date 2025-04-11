class saudacao{
    constructor(nome){
        this.nome = this.perguntarNome()
    }
    perguntarNome(){
        return prompt("Qual o seu nome?")
    }
    saudar(){
        alert(`Bem vindo ${this.nome} ao mundo da programação Javascript`)
    }
}

let pessoa = new saudacao()
pessoa.saudar()