describe("Customer List", () => {
    beforeEach(() => {
        cy.visit("/login");
        cy.get("input[id='email']").type("jasper.haegeman@student.hogent.be");
        cy.get("input[id='password']").type("12345678");
        cy.get("button[type='submit']").click();

        cy.url().should("not.include", "/login");
        cy.get("nav").contains("Customers").click();
        cy.url().should("include", "/viewcustomers");
    });

    it("should display the correct table headers and customers", () => {
        cy.get("table")
            .find("thead")
            .within(() => {
                cy.get("th").eq(0).should("contain.text", "Name");
                cy.get("th").eq(1).should("contain.text", "First Name");
                cy.get("th").eq(2).should("contain.text", "Email");
                cy.get("th").eq(3).should("contain.text", "Street");
                cy.get("th").eq(4).should("contain.text", "House Number");
                cy.get("th").eq(5).should("contain.text", "Postal Code");
                cy.get("th").eq(6).should("contain.text", "City");
                cy.get("th").eq(7).should("contain.text", "Actions");
            });
    });
});
