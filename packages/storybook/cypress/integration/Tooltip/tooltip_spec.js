describe("Storybook/Tooltip", () => {
  it("Rendering default", () => {
    // eslint-disable-next-line no-undef
    cy.visit("iframe.html?selectedKind=Tooltip&selectedStory=default");
    // eslint-disable-next-line no-undef
    cy.get("#root > div > div > div > div")
      .first()
      .click()
      .each((element, index) => {
        const name = `tooltip-default-${index}`;
        // eslint-disable-next-line no-undef
        cy.viewport(1280, 1162);
        // eslint-disable-next-line no-undef
        cy.wrap(element).matchImageSnapshot(name);
      });
  });
});
