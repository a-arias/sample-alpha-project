describe('Dashboard Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should be able to display dashboard information', () => {
    // # Asserts div with text Hello is present on the page
    cy.contains('div', 'Hello');
    // # Asserts div with text Commits is present on the page
    cy.contains('div', 'Commits');
  });

  it('should be able to navigate to commits page', () => {
    // # Clicks commits link on the left side menu
    cy.get('[data-test-id="commitsLinkPage"]').click();

    // # Asserts contributors list is present on the page
    cy.get('[data-test-id="contributorsList"]').should('be.visible');
  });

  it('should be able to see login button', () => {
    // # Asserts github login button is present on the page
    cy.get('[data-test-id="loginButton"]').should('be.visible');
  });
})

