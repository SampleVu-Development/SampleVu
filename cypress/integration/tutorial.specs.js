describe('Visits Survey Demo', () => {
    it('Visits Survey Demo', () => {
        // Visits a specific page
        cy.visit('/survey-demo');

        // "Contains" searches for an attribute
        cy.contains('Home').click();
        cy.contains('Project');

    })
})