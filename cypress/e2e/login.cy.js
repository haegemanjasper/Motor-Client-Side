describe("Login Functionality", () => {
    it("should log in as a user successfully and display the user homepage", () => {
        cy.visit("/login");
        cy.get("input[id='email']").type("jef.ds@hotmail.com");
        cy.get("input[id='password']").type("12345678");
        cy.get("button[type='submit']").click();

        cy.url().should("include", "/");

        cy.get("h2").should("be.visible").and("contain.text", "Welcome Jef!");
        cy.get("p")
            .should("be.visible")
            .and(
                "contain.text",
                "Explore our services and manage your profile from your account."
            );
    });

    it("should log in as an admin successfully and display the admin homepage", () => {
        cy.visit("/login");
        cy.get("input[id='email']").type("jasper.haegeman@student.hogent.be");
        cy.get("input[id='password']").type("12345678");
        cy.get("button[type='submit']").click();

        cy.url().should("include", "/");

        cy.get("h2")
            .should("be.visible")
            .and("contain.text", "Welcome Admin Jasper!");
        cy.get("p")
            .should("be.visible")
            .and(
                "contain.text",
                "As an admin, you have access to manage the entire system. Navigate to the admin dashboard for more options."
            );
    });
});
