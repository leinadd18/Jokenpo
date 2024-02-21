const result = document.querySelector(".result")
const seuPonto = document.getElementById("seuPonto")
const pontoBot = document.getElementById("pontoBot")
const resposta = document.querySelector(".resposta")
const fundo = document.querySelector(".fundo")


let pontosHumano = 0
let pontosBot = 0

const jogarHumano = (escolhahumano) => {


    playTheGame(escolhahumano, jogarBot())

}

const jogarBot = () => {
    const escolha = ['pedra', 'papel', 'tesoura']
    const randomNumero = Math.floor(Math.random() * 3)


    return escolha[randomNumero]
}

const playTheGame = (humano, Bot) => {

    resposta.innerHTML = `Bot Jogou: ${Bot}`
    resposta.style.color = "#012675"


    if (humano === Bot) {
        result.innerHTML = "Deu Empate &#x1F64A"
        result.style.color = "#0000ff"
        fundo.style.backgroundColor = "#0000ff"
    }
    else if (humano === 'papel' && Bot === 'pedra' || humano === 'pedra' && Bot === 'tesoura' || humano === 'tesoura' && Bot === 'papel') {


        pontosHumano++
        seuPonto.innerHTML = pontosHumano
        result.innerHTML = "Você Ganhou &#x1F38A"
        result.style.color = "#00ff00"
        fundo.style.backgroundColor = "#00ff00"

    }
    else if (pontosHumano >= 14 || pontosHumano === 15) {
        fundo.style.backgroundColor = "rgb(26, 26, 72)"
        resposta.innerHTML = "Você ganhou a partida"
        result.innerHTML = "&#x1F3C6"
        seuPonto.innerHTML = 0
        pontoBot.innerHTML = 0
        pontosHumano = 0
        pontosBot = 0
        
        
        
    }
    else if (pontosBot >= 14){
        fundo.style.backgroundColor = "rgb(26, 26, 72)"
        resposta.innerHTML = "Você perdeu a partida"
        result.innerHTML = "&#x1F602"
        seuPonto.innerHTML = 0
        pontoBot.innerHTML = 0
        pontosHumano = 0
        pontosBot = 0
        
    }
    else {

        pontosBot++
        pontoBot.innerHTML = pontosBot
        result.innerHTML = "Você Perdeu &#x1F608"
        result.style.color = "#ff0000"
        fundo.style.backgroundColor = "#f00"



    }
}