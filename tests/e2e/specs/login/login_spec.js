describe('login functionality', () => {
  it('should be able to perform a normal login with github account', () => {
    cy.visit('/')

    cy.get('//button[text()="GitHub Login"]').click();

  })
})
