describe('Pagina de login', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  })

  it('Deve preencher os campos do login corretamente e autenticar o usuario na pagina', () => {
    cy.login('jajadejesua@hotmail', 'Jona123456')
    
  
  })
})