document.addEventListener('DOMContentLoaded',function(){
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons){
        button.addEventListener('click',function(){
            if (this.getAttribute("data-type")==='submit'){
                calculateCorrect()
            }
            else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType)
            }
        })
    }
    runGame('addition')

})

/**
 * Docstrings for runGame
 */
function runGame(gameType){
    let num1 = Math.floor(Math.random()*25+1);
    let num2 = Math.floor(Math.random()*25+1);
    if (gameType ==='addition'){
        displayAdditionQuestion(num1,num2)
    }
    else if (gameType ==='multiply'){
        displayMultiplyQuestion(num1,num2)
    }
    else if (gameType ==='subtract'){
        displaySubtractQuestion(num1,num2)
    }
    else if (gameType ==='division'){
        displayDivisionQuestion(num1,num2)
    }
    else {
        alert(`unknown game type ${gameType}`)
        throw 'Unknown Game'
    }
}

function displayAdditionQuestion(operand1,operand2){
    document.getElementById('operand1').textContent=operand1;
    document.getElementById('operand2').textContent=operand2;
    document.getElementById('operator').textContent='+';

}

function displaySubtractQuestion(operand1,operand2){
    document.getElementById('operand1').textContent=operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent=operand1 > operand2 ? operand2 :operand1;
    document.getElementById('operator').textContent='-';

}

function displayMultiplyQuestion(operand1,operand2){
    document.getElementById('operand1').textContent=operand1;
    document.getElementById('operand2').textContent=operand2;
    document.getElementById('operator').textContent='x';
}
function displayDivisionQuestion(operand1,operand2){

    let newNum = document.getElementById('operand1').textContent = parseInt(document.getElementById('operand1').textContent)*parseInt(document.getElementById('operand2').textContent);
    document.getElementById('operand1').textContent=newNum > operand2 ? newNum : operand2;
    document.getElementById('operand2').textContent=newNum > operand2 ? operand2 :newNum;
    document.getElementById('operator').textContent='/';
}

function calculateCorrect(){
    let Userans = parseInt(document.getElementById("answer-box").value);
    let Corans = calculateAnswer();
    let isCorrect = Userans===Corans[0];

    if (isCorrect){
        alert("You got it right!")
        incrementScore();
    }
    else {
        alert (`Sorry the correct answer is ${Corans[0]}`)
        decreaseScore();
    }
    runGame(Corans[1])
}

function calculateAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+"){
        return [operand1 + operand2,"addition"];
    }
    else if (operator === "x"){
        return [operand1 * operand2,"multiply"];
    }
    else if (operator === "-"){
        return [operand1 - operand2,"subtract"];
    }
    else if (operator === "/"){
        return [operand1 / operand2,"division"];
    }
    else{
        alert `Unimplemented operator ${operator}.`
        throw `Unimplemented operator ${operator}. Aborting.`
    }
}

function incrementScore(){
    let curScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++curScore;
}

function decreaseScore(){
    let curScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++curScore;
}