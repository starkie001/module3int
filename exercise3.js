let animals = ['Tiger', 'Giraffe'];

animals.push('Yak', 'Zebra');
animals.unshift('Aardvark', 'Anteater');
animals.sort((a, b) => a.localeCompare(b));

function replaceMiddleAnimal(newValue){
    if (animals.length % 2 === 0) {  //is even
        animals.splice(animals.length % 2, 2, newValue)
    }
    Else {
        animals.splice(animals.length + .5, 1, newValue);
    }
    return animals;
}

console.log(animals);
console.log(replaceMiddleAnimal('Pig'));