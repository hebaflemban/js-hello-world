let num1 = 8
let num2 = 3
let operation = '*'


if (operation == '+'){
    console.log(`${num1} ${operation} ${num2} = ${num1+num2}`)
} else if (operation == '-'){
    console.log(`${num1} ${operation} ${num2} = ${num1-num2}`)
} else if (operation == '/'){
    console.log(`${num1} ${operation} ${num2} = ${num1/num2}`)
} else if (operation == '*'){
    console.log(`${num1} ${operation} ${num2} = ${num1*num2}`)
} else{
    console.log('not valid operation')
}