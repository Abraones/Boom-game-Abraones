const initButton = document.querySelector(".init-game")
const stopButton = document.querySelector(".stop-game")
const tela = document.querySelector(".screen")
const cabecalho = document.querySelector(".header")


initButton.addEventListener("click", function(){
    initGame()
    //initButton.remove()
    initButton.classList.add("none")
    stopButton.classList.remove("none")

})

function initGame() {
   const idInterval = setInterval(createBalloon, 750)

   function stopGame(){
       clearInterval(idInterval)
   } 

   stopButton.addEventListener("click", function(){
        stopGame()    
        initButton.classList.remove("none")
        stopButton.classList.add("none")
    })
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

    const larguraEfetiva = 87.65 
    const alturaEfetiva = 62

    const positionLeft = (Math.random() * larguraEfetiva) + 4.65
    const positionTop = (Math.random()* alturaEfetiva) + 22

    balloon.style.left = positionLeft + "vw" 
    balloon.style.top = positionTop + "vh"


    tela.appendChild(balloon) 

    balloon.addEventListener("click", function(){
        removeBallon(this)
    })
}
function removeBallon(element){
    element.remove()
}


