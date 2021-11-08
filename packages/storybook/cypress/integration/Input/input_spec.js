describe("Storybook/Input", () => {
  it("Render default", () => {
    // eslint-disable-next-line no-undef
    cy.visit("iframe.html?selectedKind=Forms%7CInput&selectedStory=default");
    // eslint-disable-next-line no-undef
    cy.get("#root > div > div > div > div")
      .first()
      .each((element, index) => {
        const name = `input-default-${index}`;
        // eslint-disable-next-line no-undef
        cy.viewport(1280, 1162);
        cy.wrap(element).matchImageSnapshot(name);
      });
  });
  it("Render disabled", () => {
    // eslint-disable-next-line no-undef
    cy.visit("iframe.html?selectedKind=Forms%7CInput&selectedStory=disabled");
    // eslint-disable-next-line no-undef
    cy.get("#root > div > div > div > div")
      .first()
      .each((element, index) => {
        const name = `input-disabled-${index}`;
        // eslint-disable-next-line no-undef
        cy.viewport(1280, 1162);
        cy.wrap(element).matchImageSnapshot(name);
      });
  });
});
