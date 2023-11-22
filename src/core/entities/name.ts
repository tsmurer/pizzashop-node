export class Name {
    private firstName: String;
    private lastName: String;

    constructor(firstName: String, lastName: String) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): String {
        return this.lastName + ", " + this.firstName
    }
    isValidName(name: String) {
    }
}