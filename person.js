//person, employee, customer classes

class Person {
    constructor(firstName, lastName, phNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phNumber = phNumber;
        this.email = email;
    }

    getFullName() {
        return this.firstName + " " + this.lastName();
    }
}

class Employee extends Person {
    constructor(firstName, lastName, phNumber, email, dept) {
        super(firstName, lastName, phNumber, email);
        this.dept = dept;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phNumber, email, custId, dlvAdd) {
        super(firstName, lastName, phNumber, email);
        this.custId = custId;
        this.dlvAdd = dlvAdd;
    }
}

const emp1 = new Employee("Dav", "S", "0123456789", "dav@employee.com", "Accounts");
const cust1 = new Customer("Peter", "Kelly", "0987654321", "peter@example.com", "ABC123", "45 Wallaby Way");

console.log(emp1);
console.log(cust1);