/// <reference types="cypress" />

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../../pages/home.page'
import SearchPage from '../../../pages/search.page'


Given("I am on the search page of {string} city", (cityname) => {
    HomePage.visit()
    HomePage.selectCityInSearchListBox(cityname)
    HomePage.getSearchArea().clickSearch()
})

Then("I see breadcrumb for {string} city", (cityname) => {
    SearchPage.verifyBreadcrumbForCity(cityname)
})

Then("I see property count as per the search API for {string} city", (cityname) => {
    SearchPage.verifyProjectCountForCity(cityname)
   

})