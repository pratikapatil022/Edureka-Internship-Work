class Superhero {
    constructor(name, power) {
        this.heroname = name;
        this.heropower = power
    }
}

let Batman = new Superhero("Batman", "Rich")

let PowerOfBatman = Batman.heropower

console.log(Batman)
console.log(PowerOfBatman)