/// <reference types="cypress" />

const searchListBox = "div.headerDropdown_nice_select__qMcgN"
const searchListBoxItems = "div.headerDropdown_nice_select__qMcgN li"
const searchListboxSelectedValue = "span.headerDropdown_current__5YjSN"
const searchButton = "a[href='/buy/search'] div"

class HomepageSearchComponent {

    static selectCity(city) {
        cy.get(searchListboxSelectedValue)
            .invoke('text').then((text) => {
                if (text !== city) {
                    cy.get(searchListBox).click().contains(city).click()
                }
            })
    }

    static clickSearch(){
        cy.get(searchButton).click()
    }
}

export default HomepageSearchComponent