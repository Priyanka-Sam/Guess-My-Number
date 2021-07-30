'use strict'


//DOM Manipulation - Document Object Model
//Structured Representaton of html Documents 
//select an element and then rad the text content
// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = "Correct Number!"
// console.log();

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 20

// document.querySelector('.guess').value
//document.querySelector('.guess').value = 21


let secretnumber = Math.trunc(Math.random()*20)+1
// document.querySelector('.number').textContent = secretnumber

let score = 20
let highscore = 0

const displayTextMessage = function (message)
{
     document.querySelector('.message').textContent = message

    }

document.querySelector('.again').addEventListener('click', function ()
{
    score=20
    document.querySelector('.score').textContent = score
    secretnumber = Math.trunc(Math.random() * 20) + 1
displayTextMessage("Start guessing...")
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = '?'

    })

document.querySelector('.check').addEventListener('click', function ()
{
   const guess = Number(document.querySelector('.guess').value)
    
    //no input
    if (!guess) {
        displayTextMessage("No number!")
    }
    //when player wins
    else if (guess === secretnumber) {
        displayTextMessage("Correct Number!")
        // document.querySelector('.high').textContent = score
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretnumber
     
        if (score > highscore)
        {
            highscore = score
        document.querySelector('.highscore').textContent = highscore
}
    }
    else if (guess !== secretnumber)
    {
        if (score > 1) {
            score--;
           displayTextMessage(guess>secretnumber?"Too high!" :"Too low!")
            document.querySelector('.score').textContent = score
        }
        else
        {
            displayTextMessage("You lost the game!")
            document.querySelector('.score').textContent = 0
            }
    }
})




