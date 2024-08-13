describe("Registration Functionality", () => {
    beforeEach(() => {
        cy.intercept("POST", "http://localhost:9000/api/klanten/register", {
            statusCode: 200,
            body: {
                message: "Registration successful",
            },
        }).as("registerRequest");

        cy.visit("/register");
    });

    it("should register a new user successfully and redirect to the login page", () => {
        cy.get("input[id='naam']").type("Haegeman");
        cy.get("input[id='voornaam']").type("Jasper");
        cy.get("input[id='email']").type("jasperhaegeman@example.com");
        cy.get("input[id='straat']").type("Test Straat");
        cy.get("input[id='huisnummer']").type("123");
        cy.get("input[id='postcode']").type("9300");
        cy.get("input[id='stad']").type("Aalst");
        cy.get("input[id='password']").type("StrongPassword123!");
        cy.get("button[type='submit']").click();

        cy.wait("@registerRequest", { timeout: 10000 });
        cy.wait(2000);
        cy.url().should("include", "/login");
    });
});
