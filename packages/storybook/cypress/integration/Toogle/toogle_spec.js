describe("Storybook/Toogle", () => {
  it("Render default", () => {
    // eslint-disable-next-line no-undef
    cy.visit("iframe.html?selectedKind=Forms%7CToggle&selectedStory=default");
    // eslint-disable-next-line no-undef
    cy.get("#root > div > div > div > div")
      .first()
      .each((element, index) => {
        const name = `toogle-default-${index}`;
        // eslint-disable-next-line no-undef
        cy.viewport(1280, 1162);
        // eslint-disable-next-line no-undef
        cy.wrap(element).matchImageSnapshot(name);
      });
  });
});
