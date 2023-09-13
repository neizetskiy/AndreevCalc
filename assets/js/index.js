const inputOne = document.querySelector('.inputOne')
const inputTwo = document.querySelector('.inputTwo')
const plus = document.querySelector('.plus')
const umn = document.querySelector('.umn')
const del = document.querySelector('.del')
const minus = document.querySelector('.minus')
const resultBtn = document.querySelector('.resultBtn')
const result = document.querySelector('.result')

let action ='+'

plus.onclick = function(){
    action = '+'
}

minus.onclick = function(){
    action = '-'
}

umn.onclick = function(){
    action = '*'
}

del.onclick = function(){
    action = '/'
}

function printResult(resultr){
    if(resultr < 0){
        result.style.color = 'red'
    } else {
        result.style.color = 'green'
    }
    result.textContent = resultr
}

resultBtn.onclick = function () {
    if (action === '+'){
        const sum = Number(inputOne.value) + Number(inputTwo.value)
        printResult(sum)
    }
    if (action === '-'){
        const sum = Number(inputOne.value) - Number(inputTwo.value)
        printResult(sum)
    }
    if (action === '*'){
        const sum = Number(inputOne.value) * Number(inputTwo.value)
        printResult(sum)
    }
    if (action === '/'){
        const sum = Number(inputOne.value) / Number(inputTwo.value)
        printResult(sum)
    }
}