
@search
Feature: Searchpage Functionality

    Feature Description

    
    Scenario Outline: Searchpage - Breadcrumb
        Given I am on the search page of "<cityname>" city
        Then I see breadcrumb for "<cityname>" city

        Examples:
            | cityname  |
            | Mumbai    |
            # | Pune      |
            # | Bangalore |

    Scenario Outline: Searchpage - property count is correctly shown
        Given I am on the search page of "<cityname>" city
        Then I see property count as per the search API for "<cityname>" city
        Examples:
            | cityname  |
            | Mumbai    |
            # | Pune      |
            # | Bangalore |

    # Scenario Outline: Searchpage - verify filters are present
    #     Given I am on the search page of "<cityname>" city
    #     And I verify filters are present on the page
    #     And I verify "BHK" Filter is present on the page
    #     And I verify "Price" Filter is present on the page
    #     And I verify "Property" Type Filter is present on the page
    #     And I verify "Possession" Filter is present on the page
    #     And I verify "Carpet Area" Filter is present on the page
    #     And I verify "Builder Rating" Filter is present on the page
    #     And I verify "More filters" Filter is present on the page
    #     Examples:
    #         | cityname  |
    #         | Mumbai    |
    #         | Pune      |
    #         | Bangalore |



    # Scenario Outline: Searchpage - verify BHK filter is successfully applied
    #     Given I am on the search page of "<cityname>" city
    #     When I apply "BHK" filter
    #     Then I verify "BHK" filter is applied successfully 
    #     Examples:
    #         | cityname  |
    #         | Mumbai    |
    #         | Pune      |
    #         | Bangalore |

    # Scenario Outline: Searchpage - verify reset filter is working fine
    #     Given I am on the search page of "<cityname>" city
    #     When I apply "BHK" filter
    #     Then I verify "BHK" filter is applied successfully
    #     When I select reset filter
    #     Then I verify all the filters are successfully removed 
    #     Examples:
    #         | cityname  |
    #         | Mumbai    |
    #         | Pune      |
    #         | Bangalore |


    # Scenario Outline: Searchpage - verify Deal of the week and Discounted Deals sections are present
    #     Given I am on the search page of "<cityname>" city
    #     Then I verify Deal of the Week section is present on the page
    #     And I verify Discounted Deals section is present on the page
    #     Examples:
    #         | cityname  |
    #         | Mumbai    |
    #         | Pune      |
    #         | Bangalore |



    # Scenario Outline: Searchpage - verify Deal of the week and Discounted Deals sections are present
    #     Given I am on the search page of "<cityname>" city
    #     Then I verify Deal of the Week section is present on the page
    #     And I verify Discounted Deals section is present on the page
    #     Examples:
    #         | cityname  |
    #         | Mumbai    |
    #         | Pune      |
    #         | Bangalore |



    # Scenario Outline: Searchpage - verify sorting is working
    #     Given I am on the search page of "<cityname>" city
    #     When I sort properties as "Price - Low to High"
    #     Then I verify properties are sorted as "Price - Low to High" 
    #     Examples:
    #         | cityname  |
    #         | Mumbai    |
    #         | Pune      |
    #         | Bangalore |



    # Scenario Outline: Searchpage - verify scroll down and scroll up functionality is working
    #     Given I am on the search page of "<cityname>" city
    #     When I scroll down the properties
    #     Then I verify pagination is increasing
    #     When I scroll up the properties
    #     Then I verify pagination is decreasing 
    #     Examples:
    #         | cityname  |
    #         | Mumbai    |
    #         | Pune      |
    #         | Bangalore |





        


