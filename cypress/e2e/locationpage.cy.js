describe("Create and Delete Location", () => {
    beforeEach(() => {
        cy.visit("/login");
        cy.get("input[id='email']").type("jasper.haegeman@student.hogent.be");
        cy.get("input[id='password']").type("12345678");
        cy.get("button[type='submit']").click();

        cy.url().should("not.include", "/login");
        cy.get("nav").contains("Locations").click();
        cy.url().should("include", "/viewlocations");
    });

    it("should create and then delete a location", () => {
        cy.contains("+ Create New Location").click();
        cy.get('[data-cy="create-location-modal"]').should("be.visible");
        cy.get('[data-cy="input-name"]').type("Test Location");
        cy.get('[data-cy="input-street"]').type("Test Street");
        cy.get('[data-cy="input-house-number"]').type("123");
        cy.get('[data-cy="input-postal-code"]').type("9000");
        cy.get('[data-cy="input-city"]').type("Test City");
        cy.get('[data-cy="create-button"]').click();

        cy.wait(1000);
        cy.get("tbody tr").should("have.length.greaterThan", 0);

        cy.get("tbody tr")
            .last()
            .within(() => {
                cy.contains("Test Location").should("exist");
                cy.contains("Test Street").should("exist");
                cy.contains("123").should("exist");
                cy.contains("9000").should("exist");
                cy.contains("Test City").should("exist");
            });
    });
});
