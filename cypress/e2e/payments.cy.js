describe("Payments Page", () => {
    beforeEach(() => {
        cy.visit("/login");
        cy.get("input[id='email']").type("jef.ds@hotmail.com");
        cy.get("input[id='password']").type("12345678");
        cy.get("button[type='submit']").click();

        cy.url().should("not.include", "/login");

        cy.get('[data-cy="avatar-menu-button"]').click();
        cy.get('[data-cy="payments-menu-item"]').click();
        cy.url().should("include", "/viewpayments");
    });

    it("should display the payments page correctly", () => {
        cy.contains("Payments").should("exist");
    });

    it("should display payments in a table", () => {
        cy.get("thead").within(() => {
            cy.contains("Location").should("exist");
            cy.contains("Amount").should("exist");
            cy.contains("Payment Method").should("exist");
            cy.contains("Date").should("exist");
            cy.contains("Actions").should("exist");
        });

        cy.get("tbody tr").should("have.length.greaterThan", 0);
    });

    it("should open the confirmation modal when delete button is clicked", () => {
        cy.get("tbody tr")
            .first()
            .find("button[aria-label='Delete payment']")
            .click();

        cy.contains("Confirm Deletion").should("exist");
        cy.contains("Are you sure you want to delete this payment?").should(
            "exist"
        );

        cy.contains("Cancel").click();
        cy.contains("Confirm Deletion").should("not.exist");
    });

    it("should delete a payment when confirmation is clicked", () => {
        cy.get("tbody tr")
            .first()
            .find("button[aria-label='Delete payment']")
            .click();

        cy.contains("Delete").click();
    });
});
