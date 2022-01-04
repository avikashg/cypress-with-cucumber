import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import pages from '../../pages/pages'

Given("I am on the {string} page", function (page){
    pages[page].visit()
    //cy.visit("/")
})

When("I scroll down page to bottom", function(){
    cy.scrollTo('bottom')
})