describe("Storybook/Flyout", () => {
  it("Rendering default", () => {
    // eslint-disable-next-line no-undef
    cy.visit("iframe.html?selectedKind=Flyout&selectedStory=default");
    // eslint-disable-next-line no-undef
    cy.get("#root > div > div > div > div")
      .first()
      .click()
      .each((element, index) => {
        const name = `flyout-default-${index}`;
        // eslint-disable-next-line no-undef
        cy.viewport(1280, 1162);
        cy.wrap(element).matchImageSnapshot(name);
      });
  });
});
