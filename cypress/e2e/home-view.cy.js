describe('Rancid Home View', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('when I load the application, I can see the title of the application', () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      fixture: "../fixtures/movies"
    })
    .get('h1').contains('Rancid Tomatillos')
  })

  it('when I load the application, I can see a collection of movies', () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      fixture: "../fixtures/movies"
    })

    cy.get('.posters-wrapper img').first()
    .should('have.attr', 'id', '436270')

    cy.get('.posters-wrapper img').last()
    .should('have.attr', 'id', '760104')
  })

  it('when I click on a movie, I’m shown additional details about that movie', () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      fixture: "../fixtures/movies"
    })
    .get(`.posters-wrapper img#${829799}`).click()
    .get('h2').contains("Paradise City")
    .get('.release-date').contains('Released: November 11th, 2022')
    .get('.rating').contains('Rating: 1.0')
  })
})