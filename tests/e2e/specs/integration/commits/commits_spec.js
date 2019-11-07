describe('Commits Page', () => {
  beforeEach(() => {
    cy.visit('/commits');
  });

  it('display commits list', () => {
    // # Asserts contributors list is displayed on the page
    cy.get('[data-test-id="contributorsList"]').should('be.visible');
  });

  it('should be able to use pagination feature', () => {
    // # Clicks next page button at the bottom
    cy.get('[data-test-id="buttonNextPage"]').click();

    // # Assert previous page button is visible on the page
    cy.get('[data-test-id="buttonPreviousPage"]').should('be.visible');
  });

  it('should be able to show commits list filter by username', () => {
    let username = 'johnleider';

    // # Clicks contributor list
    cy.get('[data-test-id="contributorsList"]').click({ force: true });

    // # Clicks given username from the list
    cy.get('.v-list__tile__title').contains(username).click();

    // # Asserts author username is displayed on the page
    cy.get('[data-test-id="commitAuthor"]').contains(username).should('be.visible');
  });

  it('should be able to show commits list filter by SHA', () => {
    let shaValue = '66e18555d5555835354b7c940929e1ef299319bc';

    // # Writes on the search by SHA input text given SHA value
    cy.get('[data-test-id="shaInput"]').type(shaValue).type('{enter}');

    // # Asserts first element of the list contains given SHA value and its displayed
    cy.contains(shaValue).first().should('be.visible');
  });

  it('should be able to navigate to commit page and verify commit information', () => {
    let shaValue = '4de4ef0a7e38f2b55dc804d3f253df49532dcdef';

    // # Writes on the search by SHA input text given SHA value
    cy.get('[data-test-id="shaInput"]').type(shaValue);

    // # Clicks first element of the list that contains given SHA value
    cy.contains(shaValue).first().click();

    // # Asserts commit details information is present on the page
    cy.get('[data-test-id="changedFileText"]').should('be.visible').contains('packages/docs/src/lang/en/professional-support/Business.json')
  });
})
