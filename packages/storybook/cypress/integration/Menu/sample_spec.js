describe("Storybook/Menu", () => {
  it("Rendering all variations", () => {
    // eslint-disable-next-line no-undef
    cy.visit("iframe.html?selectedKind=Menu&selectedStory=all%20variations");
    // eslint-disable-next-line no-undef
    cy.get("#root > div > div > div")
      .first()
      .each((element, index) => {
        const name = `menu-${index}`;
        // eslint-disable-next-line no-undef
        cy.viewport(1280, 1162);
        cy.wrap(element).matchImageSnapshot(name);
      });
  });
});
