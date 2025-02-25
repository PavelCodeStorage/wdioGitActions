Feature: Test the attributes of a given element
    As a developer
    I want to be able to test the attributes of a given element

    Background:
        Given I open the site "/"

    Scenario: The attribute "role" of a element should be "note"
        Then  I expect that the attribute "role" from element "#attributeComparison" is "note"

  