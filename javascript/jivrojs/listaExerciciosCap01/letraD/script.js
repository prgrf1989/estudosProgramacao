// Elabore um programa que leia a duração de uma viagem em dias e horas. Calcule e informe a duração total da viagem em numero de horas.
let diasViagem = prompt("Dias: ")
let horasViagem = prompt("Horas: ")
let horasTotaisViagem = Number(diasViagem * 24) + Number(horasViagem)
alert(`Total de horas: ${horasTotaisViagem}`)