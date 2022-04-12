let nomeDosCompetidores = ["Rafael", "Manoel", "Daniel"]

function positions(firstPlace, secondPlace, lastPlace) {
    let colocacao = [firstPlace, secondPlace, lastPlace]
    if(colocacao[2] === "Daniel"){
        colocacao[2] = colocacao[1]
        colocacao[1] = "Daniel"
    }
    if(colocacao[1] === "Daniel"){
        colocacao[1] = colocacao[0]
        colocacao[0] = "Daniel"
    }
    console.log("1ª -" + " colocado " + colocacao[0])
    console.log("2ª -" + " colocado " + colocacao[1])
    console.log("3ª -" + " colocado " + colocacao[2])
}