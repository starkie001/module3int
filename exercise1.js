function ucFirstLetters(str) {
    return str
        .split(' ')
        .map(words => words.replace(words.charAt(0),words.charAt(0).toUpperCase()))
        .join(' ');
} 


console.log(ucFirstLetters("los angeles") ) //Los Angeles
console.log(ucFirstLetters("") )
console.log(ucFirstLetters(" ") )
console.log(ucFirstLetters("12345 12534") )
console.log(ucFirstLetters("Hello, I am Daniel") )