import * as cypress from "cypress";

describe("Init Application",()=>{


    it('should working', function () {
        expect(true).to.equal(true)
    });
    it('opens the app', () => {
        cy.visit('http://localhost:3000')
    })
})

describe('Testing Pookemons',()=>{
    it('should Scrolling ', function () {
        cy.scrollTo(0, 7000)
    });
})

describe("Open details of Pokemon",()=>{
    it('should display Modal of Pkomen', function () {
         cy.get('[data-cy=raticate]').click()
    });
    it('should Close the Modal of Pkomen', function () {
        cy.get('[data-cy=closeModal]').click()
    });
})
describe("Search Pokemon",()=>{
    it('Accept input search', function () {
        const namePokemon="bulbasaur"

        cy.get('.MuiInputBase-input')
            .type(namePokemon)
            .should('have.value',namePokemon)
        cy.get(`[data-cy=${namePokemon}]`).click()

    });


})

