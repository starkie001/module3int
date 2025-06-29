function truncate(str,max) {
    if (str.length > max) {
        return str.replace(str.substring(max),'...');
    } else {
        return str 
    }
}


console.log(truncate('This text will be truncated if it is too long', 25));
console.log(truncate('This text is not too long', 25));