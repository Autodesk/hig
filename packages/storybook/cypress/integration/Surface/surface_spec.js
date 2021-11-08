describe("Storybook/Surface", () => {
  it("Render default", () => {
    // eslint-disable-next-line no-undef
    cy.visit("iframe.html?selectedKind=Surface&selectedStory=default");
    // eslint-disable-next-line no-undef
    cy.get("#root > div > div > div")
      .first()
      .each((element, index) => {
        const name = `surface-default-${index}`;
        // eslint-disable-next-line no-undef
        cy.viewport(1280, 1162);
        // eslint-disable-next-line no-undef
        cy.wrap(element).matchImageSnapshot(name);
      });
  });
});
