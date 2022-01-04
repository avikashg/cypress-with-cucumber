
@search
Feature: Searchpage Functionality

    Feature Description

    Scenario Outline: Searchpage - Breadcrumb is present for <cityname> city
        Given I am on the search page of "<cityname>" city
        Then I see breadcrumb for "<cityname>" city

        @regression
        Examples:
            | cityname |
            | Mumbai   |
        Examples:
            | cityname  |
            | Pune      |
            | Bangalore |

    Scenario Outline: Searchpage - property count is correctly shown for <cityname> city
        Given I am on the search page of "<cityname>" city
        Then I see property count as per the search API for "<cityname>" city
        @regression
        Examples:
            | cityname |
            | Mumbai   |
        Examples:
            | cityname  |
            | Pune      |
            | Bangalore |

    Scenario Outline: Searchpage - verify filters are present for <cityname> city
        Given I am on the search page of "<cityname>" city
        Then I verify "BHK" Filter is present on the page
        And I verify "Price" Filter is present on the page
        And I verify "Property Type" Filter is present on the page
        And I verify "Possession" Filter is present on the page
        And I verify "Carpet Area" Filter is present on the page
        And I verify "Builder Rating" Filter is present on the page
        And I verify "More Filters" Filter is present on the page
        @regression
        Examples:
            | cityname |
            | Mumbai   |
        Examples:
            | cityname  |
            | Pune      |
            | Bangalore |

    Scenario Outline: Searchpage - verify BHK filter is successfully applied for <cityname> city
        Given I am on the search page of "<cityname>" city
        When I select "1 BHK" option under "BHK" filter
        Then I verify "1 BHK" option of "BHK" filter is successfully applied
        When I select reset filter
        Then I see property count as per the search API for "<cityname>" city
        @regression
        Examples:
            | cityname |
            | Mumbai   |
        Examples:
            | cityname  |
            | Pune      |
            | Bangalore |


    Scenario Outline: Searchpage - verify Deal of the week and Discounted Deals sections are present for <cityname> city
        Given I am on the search page of "<cityname>" city
        Then I verify Deal of the Week section is present on the page
        And I verify Discounted Deals section is present on the page
        @regression
        Examples:
            | cityname |
            | Mumbai   |
        Examples:
            | cityname  |
            | Pune      |
            | Bangalore |



    Scenario Outline: Searchpage - verify sorting is working for <cityname> city
        Given I am on the search page of "<cityname>" city
        When I sort projects as "Price - High to Low"
        Then I verify projects are sorted accordingly
        @regression
        Examples:
            | cityname |
            | Mumbai   |
        Examples:
            | cityname  |
            | Pune      |
            | Bangalore |











