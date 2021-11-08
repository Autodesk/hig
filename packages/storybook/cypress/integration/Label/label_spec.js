describe("Storybook/Label", () => {
  it("Render default", () => {
    // eslint-disable-next-line no-undef
    cy.visit("iframe.html?selectedKind=Forms%7CLabel&selectedStory=default");
    // eslint-disable-next-line no-undef
    cy.get("#root > div > div > div > div")
      .first()
      .each((element, index) => {
        const name = `label-default-${index}`;
        // eslint-disable-next-line no-undef
        cy.viewport(1280, 1162);
        cy.wrap(element).matchImageSnapshot(name);
      });
  });
  it("Render top label", () => {
    // eslint-disable-next-line no-undef
    cy.visit(
      "iframe.html?selectedKind=Forms%7CLabel&selectedStory=top%20label"
    );
    // eslint-disable-next-line no-undef
    cy.get("#root > div > div > div > div")
      .first()
      .each((element, index) => {
        const name = `label-top-${index}`;
        // eslint-disable-next-line no-undef
        cy.viewport(1280, 1162);
        cy.wrap(element).matchImageSnapshot(name);
      });
  });

  it("Render side label", () => {
    // eslint-disable-next-line no-undef
    cy.visit(
      "iframe.html?selectedKind=Forms%7CLabel&selectedStory=side%20label"
    );
    // eslint-disable-next-line no-undef
    cy.get("#root > div > div > div > div")
      .first()
      .each((element, index) => {
        const name = `label-side-${index}`;
        // eslint-disable-next-line no-undef
        cy.viewport(1280, 1162);
        cy.wrap(element).matchImageSnapshot(name);
      });
  });
});
