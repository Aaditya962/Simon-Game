const buttons=document.querySelectorAll(".btn")
const buttonColours=["red","blue","green","yellow"]
const bodybg= document.querySelector("body")
var gamePattern=[]
var userClickedPattern=[]
const levelTitle=document.querySelector("#level-title")
var level=-1;
var flag=1;
var gamePatternLen;
var userPatterLen;


    
addEventListener("keypress", (e) =>{
    e.preventDefault()
    flag=1
    level=-1
    gamePattern=[]
    userClickedPattern=[]
    game();
})

function game(){    

    if(flag == 1){   

        level++;
        levelTitle.innerHTML="Level "+level;
        nextSequence()
        gamePatternLen=gamePattern.length                   
    }   
    if(flag == 0){
        levelTitle.innerHTML="Game Over, Press Any Key to Restart";
        bodybg.classList.toggle("game-over")
        setTimeout(() => {
            bodybg.classList.remove("game-over")
        },300)
        addEventListener("keypress", (e) =>{
            e.preventDefault()
            setTimeout(start,500);
        })
    }  
}

 function nextSequence(){

    var randomNumber=Math.floor(Math.random() * 4);
    var randomChosenColour=buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    var nextButton=gamePattern[gamePattern.length-1]
    buttons.forEach((button) => {
        
        if(button.id == nextButton){
            button.classList.toggle("pressed")
        }
        switch(nextButton){
            case 'green':
                var audio= new Audio("./sounds/green.mp3");
                audio.volume=0.2
                audio.play();
                buttonAnimation(nextButton)
                break;
            case 'red':
                var audio= new Audio("./sounds/red.mp3");
                audio.volume=0.2
                audio.play();
                buttonAnimation(nextButton)
                break;
            case 'yellow':
                var audio= new Audio("./sounds/yellow.mp3");
                audio.volume=0.2
                audio.play();
                buttonAnimation(nextButton)
                break;
            case 'blue':
                var audio= new Audio("./sounds/blue.mp3");
                audio.volume=0.2
                audio.play();
                buttonAnimation(nextButton)
                break;     
        }
    }) 
}    
buttons.forEach((button) => {
    button.addEventListener('click', (e) =>{
        switch(button.id){
            case 'green':{
                var audio= new Audio("./sounds/green.mp3");
                audio.volume = 0.2
                audio.play();
                button.classList.toggle("pressed")
                userClickedPattern.push(button.id)
                break;
            }
            case 'red':{
                var audio= new Audio("./sounds/red.mp3");
                audio.volume=0.2
                audio.play();
                button.classList.toggle("pressed")
                userClickedPattern.push(button.id)
                break;
            } 
            case 'yellow':{
                var audio= new Audio("./sounds/yellow.mp3");
                audio.volume=0.2
                audio.play();
                button.classList.toggle("pressed")
                userClickedPattern.push(button.id)
                break;
            }
            case 'blue':{
                var audio= new Audio("./sounds/blue.mp3");
                audio.volume=0.2
                audio.play();
                button.classList.toggle("pressed")
                userClickedPattern.push(button.id)
                break;   
            }  
        }
    userPatterLen=userClickedPattern.length
    buttonAnimation(button.id);
    if(gamePatternLen == userPatterLen){
        if(JSON.stringify(gamePattern) === JSON.stringify(userClickedPattern)){
                userClickedPattern=[]
                console.log("Junni")
                setTimeout(game,1000);
            }
        else{
                var gameov= new Audio("./sounds/wrong.mp3");
                gameov.volume=0.2
                gameov.play();
                flag=0;
                game();
        }
    }
    })
})
function buttonAnimation(buttonp){
    setTimeout(() =>{
        buttons.forEach((b) =>{
             if(b.id == buttonp){
                 b.classList.remove("pressed")
            }
        })
    },50) 
}

