//Class in es6 is a blue print for objects 
//Quite simple just read the piece of code written down below

class language {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }

    add(a, b) {
        return a + b
    }
}
var English = new language('English', 'USA')