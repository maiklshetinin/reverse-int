function reverse(number){
    let result=number.toString().split('').reverse().join('')

return console.log(Number(result))
}

reverse(123); // 321
reverse(233); // 332
reverse(535); // 535
reverse(95034); // 43059