const cityIdMappingJson = require('../fixtures/city-id-mapping.json')

class Utility {

    static getCityIdByName(cityName) {
        return cityIdMappingJson.find(elem => elem.name.toLowerCase() === cityName.toLowerCase()).id   
    }
    static getCityNameById(cityId) {
        return cityIdMappingJson.find(elem => elem.id === cityId).name   
    }
}

export default Utility