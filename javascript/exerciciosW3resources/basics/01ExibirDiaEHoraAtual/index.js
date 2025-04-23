let data = new Date()

function diaDaSemana(){
    let diaHoje = data.getDay()
    let diaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
    return diaSemana[diaHoje]
}
function horaAmPm(){
    let horaAtual = data.getHours()

    if (horaAtual == 0){
        return "12PM"
    } else if (horaAtual <= 12){
        return horaAtual + "AM"
    } else {
        return (horaAtual - 12) + "PM"
    }

}

let diaHoje = diaDaSemana()
let horaAgora = horaAmPm()
let minutoAgora = data.getMinutes()
let segundoAgora = data.getSeconds()


console.log(`Hoje é: ${diaHoje}.`)
console.log(`A hora atual é: ${horaAgora}:${minutoAgora}:${segundoAgora}`)