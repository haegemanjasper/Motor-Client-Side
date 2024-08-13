describe("Home Page Tests", () => {
    const login = (email, password) => {
        cy.visit("/login");
        cy.get("input[id='email']").type(email);
        cy.get("input[id='password']").type(password);
        cy.get("button[type='submit']").click();
    };

    context("As Logged-In User", () => {
        beforeEach(() => {
            login("jef.ds@hotmail.com", "12345678");
        });

        it("should render CustomCarousel component", () => {
            cy.url().should("include", "/");
            cy.get('[data-cy="custom-carousel"]').should("exist");
        });

        it("should render welcome message and description for logged-in user", () => {
            cy.get("h2")
                .should("be.visible")
                .and("contain.text", "Welcome Jef!");
            cy.get("p")
                .should("be.visible")
                .and(
                    "contain.text",
                    "Explore our services and manage your profile from your account."
                );
        });
    });

    context("As Guest", () => {
        beforeEach(() => {
            cy.visit("/");
        });

        it("should render CustomCarousel component", () => {
            cy.get('[data-cy="custom-carousel"]').should("exist");
        });

        it("should render welcome message and description for guest", () => {
            cy.get("h2")
                .should("be.visible")
                .and("contain.text", "Welcome to our website!");

            cy.get("p")
                .should("be.visible")
                .and(
                    "contain.text",
                    "Discover a range of motorcycles that suit your style and needs. Enjoy browsing through our collection!"
                );
        });
    });

    context("As Logged-In Admin", () => {
        beforeEach(() => {
            login("jasper.haegeman@student.hogent.be", "12345678");
        });

        it("should render CustomCarousel component", () => {
            cy.url().should("include", "/");
            cy.get('[data-cy="custom-carousel"]').should("exist");
        });

        it("should render welcome message and description for logged-in admin", () => {
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
});
