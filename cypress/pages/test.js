
// const util = require('./utility.page').default
// new util().getCityIdByName("Mumbai")

var searchFilter = require('../fixtures/searchpage/searchfilter.json')

let merged_object = Object.assign(searchFilter, {city_id: 5, configuration:[5]})
console.log(JSON.stringify(merged_object));
