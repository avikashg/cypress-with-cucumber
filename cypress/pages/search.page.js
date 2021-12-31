/// <reference types="cypress" />

import HomepageSearchComponent from "../components/homepage-search.component";
import SearchPagePropertyListHeader from "../components/searchpage-propertylistheader.component";
import Utility from './utility.page'

class SearchPage {

    static verifyBreadcrumbForCity(city) {
        SearchPagePropertyListHeader.verifyBreadcrumbLastEntry(city)
    }

    static verifyProjectCountForCity(city) {
        const id = Utility.getCityIdByName(city)
        SearchPagePropertyListHeader.verifyProjectsCountForCityID(id)
    }


}

export default SearchPage