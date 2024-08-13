describe("RentABikePage", () => {
    beforeEach(() => {
        cy.visit("/rentabike");
    });

    it("should load the page correctly", () => {
        cy.contains("Most Liked Motorcycles").should("exist");
    });

    it("should display a slider with motorcycles", () => {
        cy.get(".slick-track").should("exist");
    });

    it("should display a flash banner within each slide", () => {
        cy.get(".slick-slide").each(($slide) => {
            cy.wrap($slide).find('[data-cy="flash-banner"]').should("exist");
        });
    });

    it("should open modal when 'Rent Now' button is clicked", () => {
        cy.contains("Rent Now").click({ force: true });
        cy.get(".chakra-modal__body").should(
            "contain.text",
            "You need to be logged in to rent a bike"
        );
    });
});
