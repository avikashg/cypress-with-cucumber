/// <reference types="cypress" />

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../../pages/home.page'


Given("I select {string} city in the search area", (cityname) => {
    HomePage.selectCityInSearchListBox(cityname)
})

And("I click on Search button", ()=>{
    HomePage.getSearchArea().clickSearch()
})

Then("I should be navigated to searchpage of {string} city",(cityname)=>{
    cy.url().should('contain',"/buy/search")
    cy.get("div.headerDropdown_nice_select__qMcgN span").last().invoke("text").should("equal", cityname)
})