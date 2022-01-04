/// <reference types="cypress" />

import HomepageSearchComponent from "../components/homepage-search.component";
import SearchPagePropertyListHeader from "../components/searchpage-propertylistheader.component";
import Utility from './utility.page'
import SearchPageFilter from "../components/searchpage-filter.component";

class SearchPage {

    static verifyBreadcrumbForCity(city) {
        SearchPagePropertyListHeader.verifyBreadcrumbLastEntry(city)
    }

    static verifyProjectCountForCity(city, override_object = {}) {
        const id = Utility.getCityIdByName(city)
        SearchPagePropertyListHeader.verifyProjectsCountForCityID(id)
    }
    static verifyProjectCountForCityWithFilters(city, filterObject = {}) {
        const id = Utility.getCityIdByName(city)
        SearchPagePropertyListHeader.verifyProjectsCount(Object.assign(filterObject, {city_id : id}))
    }

    static getFilterSection(){
        return SearchPageFilter
    }

    static selectSortingOption(sortingOption) {
        cy.get('.jss94').select(sortingOption)
    }

    static getPriceListForProjects(){
        let priceMap = new Map()
        let priceArray = []
        cy.get("span[class*='jss'] > h5").each(function(price, index){
            cy.wrap(price).invoke('text').as('price').then(async function(){
                cy.log(this.price.split(" ")[0])
                priceMap.set(index, this.price)
                priceArray.push[this.price]
                cy.log(priceArray)
                cy.log(priceMap)
            })
        })
       
    }


}

export default SearchPage