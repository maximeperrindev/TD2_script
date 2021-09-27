function User(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        return (this.name + " a " + this.age + " ans.");
    };
}

let user1 = new User("John", 25);
let user2 = new User("Kate", 32);
let user3 = new User("Younes", 19);
let user4 = new User("Nathan", 21);

let userSet = new Set();

userSet.add(user1);
userSet.add(user2);
userSet.add(user3);
userSet.add(user4);

for (let user of userSet) {
    console.log(user.sayHello());
}