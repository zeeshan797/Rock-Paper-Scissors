let userscore = 1
let compscore=1
let choices = document.querySelectorAll(".choice")
let user = document.querySelector("#userscore")
let computer = document.querySelector("#compscore")
let msg = document.querySelector(".msg")

let option = ['rock', 'paper', 'scissor']

let comp =()=>{
    let index = Math.floor(Math.random()*option.length)
    return option[index]
}

let showwinner = (userwin, compchoice, userchoice)=>{
    if (userwin){
        msg.innerText = `You Won \n your choice: ${userchoice}\nComputer Choice: ${compchoice}\n${userchoice} beats ${compchoice}`
        user.innerText = userscore++
        msg.style.backgroundColor = "green"
        // msg.style.color = "white"

        // console.log("You Win")
    }

    else{
        msg.innerText = `Computer Won\nyour choice: ${userchoice}\nComputer Choice:${compchoice}\n${compchoice} beats ${userchoice}`
        computer.innerText = compscore++
        msg.style.backgroundColor = "red"
        // msg.style.color = "white"

        // console.log("Computer Win")
    }
}

let playgame = (userchoice)=>{
   
        console.log("user choice = ", userchoice)
        let compchoice = comp()
        console.log("computer choice = ", compchoice)

        if (userchoice===compchoice){
            console.log("Draw")
            msg.innerText = "DRAW"
            msg.style.backgroundColor = "purple"
        }
        else{
            let userwin = true;
            if (userchoice === "rock"){
                userwin = compchoice === "paper" ? false:true
            }
            else if (userchoice === "paper"){
                userwin = compchoice === "scissor" ? false:true
            }
            else if(userchoice === "scissor"){
                userwin = compchoice === "rock"?false:true
            }
            showwinner(userwin, compchoice, userchoice)
        }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice =choice.getAttribute("id")
        playgame(userchoice)        
        
        
    })
})

