/// <reference types="cypress" />

import HomepageSearchComponent from "../components/homepage-search.component";

class HomePage {
    static visit() {
        cy.visit('/');
    }

    static selectCityInSearchListBox(city) {
        HomepageSearchComponent.selectCity(city)
    }

    static getSearchArea(){
        return HomepageSearchComponent
    }

}

export default HomePage