/*Dado uma pontuação retornar com as seguintes notas:
Se a pontuação for maior que 90, retornar: "A"
Se a pontuação for maior que 80, retornar: "B"
Se a pontuação for maior que 70, retornar: "C"
Se a pontuação for maior que 65, retornar: "D"
ou "F" */

let pontuacao = 60

if (pontuacao >= 90) {
    console.log("A")
} else if (pontuacao >= 80 && pontuacao <= 90) {
    console.log("B")
} else if (pontuacao >= 70 && pontuacao <= 80) {
    console.log("C")
} else if (pontuacao >= 65 && pontuacao <= 70) {
    console.log("D")
} else {
    console.log("F")
}