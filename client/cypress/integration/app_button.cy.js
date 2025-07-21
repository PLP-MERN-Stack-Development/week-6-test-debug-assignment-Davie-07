describe('App Button E2E', () => {
  it('increments the counter when the button is clicked', () => {
    cy.visit('/');
    cy.contains('button', 'Count: 0').should('be.visible');
    cy.contains('button', 'Count: 0').click();
    cy.contains('button', 'Count: 1').should('be.visible');
    cy.contains('button', 'Count: 1').click();
    cy.contains('button', 'Count: 2').should('be.visible');
  });
}); 