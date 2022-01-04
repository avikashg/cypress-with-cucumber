/// <reference types="cypress" />

class SearchPageFilter {

    static getFilterByText(filterName){
        return cy.get(`div.jss65:contains("${filterName}")`);
    } 
    
    static selectFilterFromFilterOptionsList(filterOption) {
        cy.get("#common-popper").get(`button:contains("${filterOption}")`).should("be.visible").click()
    }

    static clickResetFilters(){
        cy.get(".jss65:contains('Reset Filters')").click()
    }

}

export default SearchPageFilter