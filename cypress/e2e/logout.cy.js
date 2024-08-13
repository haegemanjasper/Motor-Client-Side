describe("Logout", () => {
    beforeEach(() => {
        cy.visit("/login");
        cy.get("input[id='email']").type("jef.ds@hotmail.com");
        cy.get("input[id='password']").type("12345678");
        cy.get("button[type='submit']").click();

        cy.url().should("not.include", "/login");
        cy.get('[data-cy="avatar-menu-button"]').click();
        cy.get('[data-cy="logout-menu-item"]').click();

        cy.url().should("include", "/");
    });

    it("should display the login page after logout", () => {
        cy.contains("Log in").should("exist");
    });
});
