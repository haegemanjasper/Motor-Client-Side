describe("About Us Page", () => {
    beforeEach(() => {
        cy.visit("/aboutus");
    });

    it("should render the main heading", () => {
        cy.get("h1").should("be.visible").and("contain.text", "About Us");
    });

    it("should render all section headings", () => {
        cy.get("h2")
            .eq(0)
            .should("be.visible")
            .and("contain.text", "Our Vision");
        cy.get("h2")
            .eq(1)
            .should("be.visible")
            .and("contain.text", "Our Values");
        cy.get("h2")
            .eq(2)
            .should("be.visible")
            .and("contain.text", "Meet the Team");
    });

    it("should display the correct number of sections", () => {
        cy.get("h2").should("have.length", 3);
    });

    it("should have the correct background color and padding", () => {
        cy.get("body").should(
            "have.css",
            "background-color",
            "rgb(255, 255, 255)"
        );
    });
});
