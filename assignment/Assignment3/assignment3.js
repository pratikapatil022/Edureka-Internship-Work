class restaurantManager {
    constructor(objectList) {
        this.restaurantList = objectList;
    }
    printAllRestaurantNames() {
        this.restaurantList.forEach(list => console.log(list.name));
    }
    filterRestaurantByCity(cityName) {
        return this.restaurantList.filter((list) => list.cityName == `${cityName}`)
    }
}

class inputdata {
    constructor(name, address, cityName) {
        this.name = name;
        this.address = address;
        this.cityName = cityName

    }
}

let object_1 = new inputdata("restaurant 1 ", "address 1", "Mumbai")
let object_2 = new inputdata("restaurant 2 ", "address 2", "Bangalore")

let dataArray = [object_1, object_2]

const resList = new restaurantManager(dataArray)

console.log(resList)
console.log(resList.filterRestaurantByCity("Mumbai"))

