describe("Storybook/Spacer", () => {
    it("Default", () => {
      // eslint-disable-next-line no-undef
      cy.visit("iframe.html?selectedKind=Spacer&selectedStory=default");
      // eslint-disable-next-line no-undef
      cy.get("#root > div > div").first().each((element, index) => {
        const name = `spacer-default-${index}`;
        // eslint-disable-next-line no-undef
        cy.wrap(element).matchImageSnapshot(name);
      });
    });
    it("With spacing", () => {
        // eslint-disable-next-line no-undef
        cy.visit("iframe.html?selectedKind=Spacer&selectedStory=with%20spacing");
        // eslint-disable-next-line no-undef
        cy.get("#root > div > div").first().each((element, index) => {
          const name = `spacer-spacing-${index}`;
          // eslint-disable-next-line no-undef
          cy.wrap(element).matchImageSnapshot(name);
        });
    });
    it("With size", () => {
        // eslint-disable-next-line no-undef
        cy.visit("iframe.html?selectedKind=Spacer&selectedStory=with%20size");
        // eslint-disable-next-line no-undef
        cy.get("#root > div > div").first().each((element, index) => {
          const name = `spacer-size-${index}`;
          // eslint-disable-next-line no-undef
          cy.wrap(element).matchImageSnapshot(name);
        });
    });

});