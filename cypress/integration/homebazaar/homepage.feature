Feature: Homepage - Search functionality

    Feature Description

    Scenario Outline: Homepage to search page navigation for <cityname>
        Given I am on the "home" page
        When I select "<cityname>" city in the search area
        And I click on Search button
        Then I should be navigated to searchpage of "<cityname>" city

        Examples:
            | cityname  |
            | Mumbai    |
            | Pune      |
            # | Bangalore |
