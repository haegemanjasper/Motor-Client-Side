describe("Footer Component", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should be displayed correctly", () => {
        cy.get("footer").should("exist");
    });

    it("should display the correct text content", () => {
        cy.get("footer")
            .contains("© 2024 Jasper's first motorsite. All rights reserved.")
            .should("be.visible");
    });

    it("should have the correct background color and styles", () => {
        cy.get("footer")
            .should("have.css", "background-color", "rgb(42, 112, 178)")
            .and("have.css", "border-top-width", "1px")
            .and("have.css", "border-top-color", "rgb(0, 0, 0)");
    });
});
