describe("Storybook/Modal", () => {
  it("Rendering default", () => {
    // eslint-disable-next-line no-undef
    cy.visit("iframe.html?selectedKind=Modal&selectedStory=default");
    // eslint-disable-next-line no-undef
    cy.get("#root > div > div > div > div > div > article")
      .first()
      .each((element, index) => {
        const name = `modal-default-${index}`;
        // eslint-disable-next-line no-undef
        cy.viewport(1280, 1162);
        // eslint-disable-next-line no-undef
        cy.wrap(element).matchImageSnapshot(name);
      });
  });
});
