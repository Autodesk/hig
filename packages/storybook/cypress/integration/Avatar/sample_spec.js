describe("Storybook/Avatar", () => {
  it("Rendering default", () => {
    // eslint-disable-next-line no-undef
    cy.visit("iframe.html?selectedKind=Avatar&selectedStory=default");
    // eslint-disable-next-line no-undef
    cy.get("#root span")
      .first()
      .each((element, index) => {
        const name = `avatar-default-${index}`;
        // eslint-disable-next-line no-undef
        cy.viewport(1280, 1162);
        cy.wrap(element).matchImageSnapshot(name);
      });
  });

  it("Rendering with picture", () => {
    // eslint-disable-next-line no-undef
    cy.visit("iframe.html?selectedKind=Avatar&selectedStory=with%20picture");
    // eslint-disable-next-line no-undef
    cy.get("#root span")
      .first()
      .each((element, index) => {
        const name = `avatar-picture-${index}`;
        // eslint-disable-next-line no-undef
        cy.viewport(1280, 1162);
        cy.wrap(element).matchImageSnapshot(name);
      });
  });

  it("Rendering all background colors", () => {
    // eslint-disable-next-line no-undef
    cy.visit(
      "iframe.html?selectedKind=Avatar&selectedStory=all%20background%20colors"
    );
    // eslint-disable-next-line no-undef
    cy.get("#root > div > div > div")
      .first()
      .each((element, index) => {
        const name = `avatar-background-${index}`;
        // eslint-disable-next-line no-undef
        cy.viewport(1280, 1162);
        cy.wrap(element).matchImageSnapshot(name);
      });
  });
});
