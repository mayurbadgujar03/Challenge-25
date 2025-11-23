class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    // we can stop to access this, using "static" keyword
    static createId() {
        return `123`
    }
}

const mayur = new User("Mayur");
// console.log(mayur.createId());

class Teacher extends User{
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com");
iphone.logMe();

// child can't handle >>
console.log(iphone.createId());
