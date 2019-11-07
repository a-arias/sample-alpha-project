describe('Commits Page', () => {
  beforeEach(() => {
    cy.visit('/commits');
  });

  it('display commits list', () => {
    cy.get('[data-test-id="contributorsList"]').should('be.visible');
  });

  it('should be able to use pagination feature', () => {
    cy.get('[data-test-id="buttonNextPage"]').click();

    cy.get('[data-test-id="buttonPreviousPage"]').should('be.visible');
  });

  it('should be able to show commits list filter by username', () => {
    let username = 'johnleider';

    cy.get('[data-test-id="contributorsList"]').click({ force: true });

    cy.get('.v-list__tile__title').contains(username).click();

    cy.get('[data-test-id="commitAuthor"]').contains(username).should('be.visible');
  });

  it('should be able to show commits list filter by SHA', () => {
    let shaValue = '66e18555d5555835354b7c940929e1ef299319bc';

    cy.get('[data-test-id="shaInput"]').type(shaValue).type('{enter}');

    cy.contains(shaValue).first().should('be.visible');
  });

  it('should be able to navigate to commit page and verify commit information', () => {
    let shaValue = '4de4ef0a7e38f2b55dc804d3f253df49532dcdef';

    cy.get('[data-test-id="shaInput"]').type(shaValue);

    cy.contains(shaValue).first().click();

    cy.get('[data-test-id="changedFileText"]').should('be.visible').contains('packages/docs/src/lang/en/professional-support/Business.json')
  });
})
