const bob = {
    firstName: "bob",
    lastName: "agro",
    sayName: () => {
        console.log(this);
        console.log(`hello ,${this.firstName} ${this.lastName}`);
    },
};
bob.sayName();

const bob1 = {
    firstName: "bob",
    lastName: "agro",
    sayName: function() {
        console.log(this);
        console.log(`hello ,${this.firstName} ${this.lastName}`);
    },
};
bob1.sayName();