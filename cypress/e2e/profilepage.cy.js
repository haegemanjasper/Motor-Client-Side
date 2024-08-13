describe("Profile Page", () => {
    beforeEach(() => {
        cy.visit("/login");
        cy.get("input[id='email']").type("jef.ds@hotmail.com");
        cy.get("input[id='password']").type("12345678");
        cy.get("button[type='submit']").click();

        cy.url().should("not.include", "/login");

        cy.get('[data-cy="avatar-menu-button"]').click();
        cy.get('[data-cy="profile-menu-item"]').click();
        cy.url().should("include", "/profile");
    });

    it("should display the profile page correctly", () => {
        cy.contains("Profile").should("exist");
    });

    it("should allow the user to enter editing mode and update profile information", () => {
        cy.get("input[id='naam']").should("have.value", "De Smet");
        cy.get("input[id='voornaam']").should("have.value", "Jef");
        cy.get("input[id='email']").should("have.value", "jef.ds@hotmail.com");
        cy.get("input[id='straat']").should("have.value", "Kortrijksesteenweg");
        cy.get("input[id='huisnummer']").should("have.value", "11");
        cy.get("input[id='postcode']").should("have.value", "9200");
        cy.get("input[id='stad']").should("have.value", "Dendermonde");

        cy.get('[data-cy="edit-profile-button"]').click();

        cy.get("input[id='naam']").clear().type("Achternaam");
        cy.get("input[id='voornaam']").clear().type("Voornaam");
        cy.get("input[id='email']").clear().type("jef.ds@hotmail.com");
        cy.get("input[id='straat']").clear().type("Sluipweg");
        cy.get("input[id='huisnummer']").clear().type("456");
        cy.get("input[id='postcode']").clear().type("9000");
        cy.get("input[id='stad']").clear().type("Antwerpen");

        cy.get('[data-cy="update-profile-button"]').click();
    });
});
