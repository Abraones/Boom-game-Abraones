const initButton = document.querySelector(".init-game") //Usando
const stopButton = document.querySelector(".stop-game") //Usando
const tela = document.querySelector(".screen") //Usando
//const cabecalho = document.querySelector(".header") 
const live = document.querySelector(".vida") //Usando
const vidas = document.querySelector(".vidas")
const contadorDeVidas = [1, 1, 1] //Usando
const contadorBalloon = []
const limiteBalloon = 5
const avisoPerdeu = document.querySelector(".voce-perdeu") //Usando
const corpo = document.querySelector("body")

const playAgain = document.createElement("button")

const vida01 = document.getElementById("vida1")
const vida02 = document.getElementById("vida2")
const vida03 = document.getElementById("vida3")

initButton.addEventListener("click", function(){
    initGame()
    //initButton.remove()
    initButton.classList.add("none")
    //stopButton.classList.remove("none")

})

function initGame() {
    const idInterval = setInterval(manageGame, 750)

    function manageGame(){
        if(contadorDeVidas.length == 0){
            vocePerdeu()
            stopGame()
            
        }
        createBalloon()

    }


   function stopGame(){
       clearInterval(idInterval)
   } 
    
   

   /* stopButton.addEventListener("click", function(){
        stopGame()    
        initButton.classList.remove("none")
        stopButton.classList.add("none")
    }) */
    
}

function createBalloon(){
    const balloon = document.createElement("img")
    const color = Math.round(Math.random()*100)

    if (color>66){
        balloon.setAttribute("src", "./assets/img/red-balloon.png")
    }else if(color>33){
        balloon.setAttribute("src", "./assets/img/yellow-balloon.png")
    }else{
        balloon.setAttribute("src", "./assets/img/blue-balloon.png")
    }
    balloon.setAttribute("class", "balloon")

    //minimo left 4.65, top 22
    //max left 92.3 top 84 
    // 62
    const larguraEfetiva = 87.65 
    const alturaEfetiva = 34

    const positionLeft = (Math.random() * larguraEfetiva) + 4.65
    //const positionTop = (Math.random()* alturaEfetiva) + 22 normal
    const positionTop = (Math.random()* alturaEfetiva) + 50
    balloon.style.left = positionLeft + "vw" 
    balloon.style.top = positionTop + "vh"


    tela.appendChild(balloon) 

    balloon.addEventListener("click", function(){
        removeElement(this)
        contadorBalloon.pop()
    })
    contadorBalloon.push(1)
    console.log(contadorBalloon.length)

    if (contadorBalloon.length >= limiteBalloon){
        removeLive()
    }
    
}
function removeElement(element){
    element.remove()
}
function vocePerdeu(){
    const textContentYou = "You Lose!"
    const textContentSpan = "I'm sorry, but you're not very good at doing this"
    const textContentPlay = "Play Again!"

    const youLose = document.createElement("div")
    youLose.setAttribute("class", "voce-perdeu")

    const spanLose = document.createElement("h2")
    spanLose.setAttribute("class", "anunciado-perca")
    spanLose.innerText = textContentYou

    const downText = document.createElement("p")
    downText.setAttribute("class", "texto-desmotivante")
    downText.innerText = textContentSpan

    //const playAgain = document.createElement("button")
    playAgain.setAttribute("class", "jogar-novamente")
    playAgain.innerText = textContentPlay

    youLose.appendChild(spanLose)
    youLose.appendChild(downText)
    youLose.appendChild(playAgain)

    corpo.appendChild(youLose)

    playAgain.addEventListener("click", function(){
        //const todosBalloon = tela.removeChild("img")

        vidas.appendChild(vida01)
        vidas.appendChild(vida02)
        vidas.appendChild(vida03)
        contadorDeVidas.push(1, 1, 1)
        
        initButton.classList.remove("none")
        
        removeElement(youLose)
    })
    
    }

function removeLive(){
    //TESTE
    //createBalloon()
    //TESTE
    if(contadorDeVidas.length == 1){
        vida01.remove()
        contadorDeVidas.pop()
    }else if(contadorDeVidas.length == 2){
        vida02.remove()
        contadorDeVidas.pop()
    }else if(contadorDeVidas.length == 3){
        vida03.remove()
        contadorDeVidas.pop()
    }
    /* if(contadorDeVidas.length == 0){
        vocePerdeu()
    } */
    }





//window.alert(quantidadeVidas)





