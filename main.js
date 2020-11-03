const initButton = document.querySelector(".init-game")
const tela = document.querySelector(".screen") 
const body = document.querySelector("body")

const contadorBalloon = []
const limiteBalloon = 4

const contadorDeVidas = [1, 1, 1] 
const live = document.querySelector(".vida") 
const vidas = document.querySelector(".vidas")
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
        createBalloon()

        if (contadorBalloon.length >= limiteBalloon){
            removeLive()
        }

        if(contadorDeVidas.length == 0){
            youLose()
            stopGame()
            limpaTela()
            //console.log(contadorBalloon)
        }
        
    }
    
    function stopGame(){
        clearInterval(idInterval)
    }
    
}
function createBalloon(){
    const balloon = document.createElement("img")
    const color = Math.round(Math.random()*100)
    
    function setColor(){
    if (color>66){
        balloon.setAttribute("src", "./assets/img/red-balloon.png")
    }else if(color>33){
        balloon.setAttribute("src", "./assets/img/yellow-balloon.png")
    }else{
        balloon.setAttribute("src", "./assets/img/blue-balloon.png")
    }
    balloon.setAttribute("class", "balloon")
    }
    function setPosition(){
        //minimo left 4.65, top 22
        //max left 92.3 top 84 
        // 62
        const larguraEfetiva = 87.65 
        const alturaEfetiva = 34
        
        const positionLeft = (Math.random() * larguraEfetiva) + 4.65
        const positionTop = (Math.random()* alturaEfetiva) + 50
    
        balloon.style.left = positionLeft + "vw" 
        balloon.style.top = positionTop + "vh"
    }

    setColor()
    setPosition()
    tela.appendChild(balloon) 
    
    balloon.addEventListener("click", function(){
        removeElement(this)
        contadorBalloon.pop()
    })
    contadorBalloon.push(1)    
}
function removeElement(element){
    element.remove()
}
function youLose(){
    
    const youLose = document.createElement("div")
    youLose.setAttribute("class", "voce-perdeu")
    
    const spanLose = document.createElement("h2")
    const textContentYou = "You Lose!"
    spanLose.setAttribute("class", "anunciado-perca")
    spanLose.innerText = textContentYou
    
    const downText = document.createElement("p")
    const textContentSpan = "I'm sorry, but you're not very good at doing this"
    downText.setAttribute("class", "texto-desmotivante")
    downText.innerText = textContentSpan
    
    const playAgain = document.createElement("button")
    const textContentPlay = "Play Again!"
    playAgain.setAttribute("class", "jogar-novamente")
    playAgain.innerText = textContentPlay
    
    youLose.appendChild(spanLose)
    youLose.appendChild(downText)
    youLose.appendChild(playAgain)

    body.appendChild(youLose)
    
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
}
function limpaTela(){
    const allBalloon = document.querySelectorAll(".balloon")
    allBalloon.forEach((element) =>{
        element.remove()
        contadorBalloon.pop()
    })    
}


