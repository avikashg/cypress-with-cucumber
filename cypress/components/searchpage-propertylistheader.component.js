/// <reference types="cypress" />


const propertyListHeader = "div.sticky-property-list-header"


class SearchPagePropertyListHeader {

    static verifyBreadcrumbLastEntry(breadcrumbLastEntry) {
        cy.get(propertyListHeader)
            .get("li.MuiBreadcrumbs-li")
            .last()
            .invoke("text")
            .should("equal", breadcrumbLastEntry)
    }

    static verifyProjectsCountForCityID(cityId) {
        cy.fixture("searchpage/searchfilter.json")
            .then((searchfilter) => {
                cy.log(searchfilter)
                searchfilter["city_id"] = cityId
                cy.request("POST", "/api/searchFilter", searchfilter)
                    .then((response) => {
                       cy.get(propertyListHeader).first()
                       .get("h5.MuiTypography-root").first()
                       .invoke("text")
                       .then((text)=> {
                           text = text.split(" ").slice(-1)
                           expect(parseInt(text)).to.equal(response.body.count)
                       })     
                    })
            })
    }

}

export default SearchPagePropertyListHeader