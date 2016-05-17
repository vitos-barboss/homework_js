function User(fullName) {
    //debugger;
    this.fullName = fullName;

    Object.defineProperties(this, {
        firstName: {
            get: function() {
                return this.fullName.split(" ")[0];
            },
            set: function(newFirstName) {
                this.fullName = newFirstName + " "+ this.lastName;
            }
        },

        lastName: {
            get: function() {
                return this.fullName.split(" ")[1];
            },
            set: function(newLastName) {
                this.fullName = this.firstName + " "+ newLastName;
            }
        }

    });
}


var sasha = new User('Александр Пушкин');

console.log(sasha);
console.log(sasha.firstName);
console.log(sasha.lastName);

sasha.lastName = 'Галицкий';
console.log( sasha.fullName );
sasha.firstName = 'Виктор';
console.log( sasha.fullName );