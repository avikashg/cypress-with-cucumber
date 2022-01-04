/// <reference types="cypress" />

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../../pages/home.page'
import SearchPage from '../../../pages/search.page'


Given("I am on the search page of {string} city", function (cityName) {
    HomePage.visit()
    HomePage.selectCityInSearchListBox(cityName)
    HomePage.getSearchArea().clickSearch()
    cy.wrap(cityName).as('cityName')
})

Then("I see breadcrumb for {string} city", function (cityName) {
    SearchPage.verifyBreadcrumbForCity(cityName)
})

Then("I see property count as per the search API for {string} city", function (cityName) {
    SearchPage.verifyProjectCountForCity(cityName)
})

Then("I verify {string} Filter is present on the page", function(filterName) {
    SearchPage.getFilterSection().getFilterByText(filterName).should("be.visible")
})

When("I select {string} option under {string} filter", function (filterOption, filterName)  {
    SearchPage.getFilterSection().getFilterByText(filterName).click()
    SearchPage.getFilterSection().selectFilterFromFilterOptionsList(filterOption)

})

Then ("I verify {string} option of {string} filter is successfully applied", function (filterOption, filterName){

    SearchPage.verifyProjectCountForCityWithFilters(this.cityName, {configuration: [2], configuration_count: [1]})
})

When ("I select reset filter", function(){
    SearchPage.getFilterSection().clickResetFilters()
})

Then ("I verify Deal of the Week section is present on the page", function(){
    cy.get(".sticky-property-list-header h3:contains('Deal of the Week')").should("be.visible")
})
Then ("I verify Discounted Deals section is present on the page", function(){
    cy.get(".sticky-property-list-header h3:contains('Discounted Deals')").should("be.visible")
})

When("I sort projects as {string}", function (sortingValue) {
    SearchPage.selectSortingOption(sortingValue)
    cy.wrap(sortingValue).as('sortingValue')
})

Then ("I verify projects are sorted accordingly", function(){
    if(this.sortingValue === "Price - High to Low") {
        cy.get("span[class*='jss'] > h5").then($elements => {
            const strings = [...$elements].map(el => el.innerText.split(" ")[0])
            cy.log(strings)
            expect(strings).to.deep.equal([...strings].sort(function(a, b){return b-a}))
          })
    }
    // other if conditions to be implemented

})