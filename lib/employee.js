class Employee {
    constructor(name, id, email) {
        if (!name || !id || !email) {
            return console.error("You need to supply a name, id number, email, and office number.")
        };

        if (typeof name === `string`) {
            this.name = name.trim();
        }
        else {
            return console.error("Name must be a string.")
        };
        
        this.id = id;

        if (typeof email === `string` && email.includes(`@`)) {
            this.email = email.trim();
        }
        else {
            return console.error("Please enter a valid email address.")
        };
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return `Employee`;
    }
};

module.exports = Employee;