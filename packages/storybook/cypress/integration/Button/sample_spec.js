describe("Storybook/Button", () => {
  it("Rendering all variations", () => {
    // eslint-disable-next-line no-undef
    cy.visit("iframe.html?selectedKind=Button&selectedStory=all%20variations");
    // eslint-disable-next-line no-undef
    cy.get("#root").each((element, index) => {
      const name = `button-all-variations-${index}`;
      // eslint-disable-next-line no-undef
      cy.viewport(1280, 1162);
      cy.wrap(element).matchImageSnapshot(name);
    });
  });

  it("Rendering all variations with icon", () => {
    // eslint-disable-next-line no-undef
    cy.visit(
      "iframe.html?selectedKind=Button&selectedStory=all%20variations%20with%20icons"
    );
    // eslint-disable-next-line no-undef
    cy.get("#root").each((element, index) => {
      const name = `button-all-variations-with-icons${index}`;
      // eslint-disable-next-line no-undef
      cy.viewport(1280, 1162);
      cy.wrap(element).matchImageSnapshot(name);
    });
  });
});
