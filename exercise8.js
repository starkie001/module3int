const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map()
phoneBookDEF.set('Daniel', '065432109')
phoneBookDEF.set('Eleanor', '054321098')
phoneBookDEF.set('Fred', '043210987')

phoneBookABC.set('Caroline', '0355221182')

function printPhoneBook(contacts) {
    contacts.forEach((phNum, person) => {
        console.log(`${person}: ${phNum}`);
    })
}

printPhoneBook(phoneBookABC);