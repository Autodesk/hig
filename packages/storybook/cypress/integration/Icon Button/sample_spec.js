describe("Storybook/Icon Button", () => {
    it("Rendering", () => {
      // eslint-disable-next-line no-undef
      cy.visit("iframe.html?selectedKind=IconButton&selectedStory=default");
      // eslint-disable-next-line no-undef
      cy.get("#root > div > div > div").first().each((element, index) => {
        const name = `icon-button-${index}`;
        // eslint-disable-next-line no-undef
        cy.wrap(element).matchImageSnapshot(name);
      });
    });
  });
  