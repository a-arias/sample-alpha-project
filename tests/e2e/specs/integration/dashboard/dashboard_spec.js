describe('Dashboard Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should be able to display dashboard information', () => {
    cy.contains('div', 'Hello');
    cy.contains('div', 'Commits');
  });

  it('should be able to navigate to commits page', () => {
    cy.get('[data-test-id="commitsLinkPage"]').click();

    cy.get('[data-test-id="contributorsList"]').should('be.visible');
  });

  it('should be able to see login button', () => {
    cy.get('[data-test-id="loginButton"]').should('be.visible');
  });
})

