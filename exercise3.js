const animals = ['Tiger', 'Giraffe'];

animals.push('Yak', 'Zebra');
animals.unshift('Aardvark', 'Anteater');
animals.sort((a, b) => a.localeCompare(b));

console.log(animals)