import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import pages from '../../pages/pages'

Given("I am on the {string} page", (page)=>{
    pages[page].visit()
    //cy.visit("/")
})