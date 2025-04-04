describe('Pagina de login', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  })

  it('Deve preencher os campos do login corretamente e autenticar o usuario na pagina', () => {
    
    cy.get('[data-test="input-loginEmail"]').type('lordgomesrj@hotmail.com');
    cy.get('[data-test="input-loginPassword"]').type('Jona123456');
    cy.get('[data-test="submit-button"]').click();
  
  })
})