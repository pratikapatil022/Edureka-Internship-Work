class restaurantManager {
    constructor(name, address, city) {
        this.name = name,
            this.address = address,
            this.city = city
    }

    restaurantList() {
        return [name, address, city]
    }

    printnames() {
        console.log(restuarantList.name)
    }


}


var vedanta = new restaurantManager("Vedanta", "204,Panvel central", "Panvel")
console.log(vedanta.printnames);