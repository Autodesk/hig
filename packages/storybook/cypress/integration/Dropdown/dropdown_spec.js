describe("Storybook/Dropdown", () => {
  it("Render default", () => {
    // eslint-disable-next-line no-undef
    cy.visit("iframe.html?selectedKind=Forms%7CDropdown&selectedStory=default");
    // eslint-disable-next-line no-undef
    cy.get("#root > div > div > div > div")
      .first()
      .click()
      .each((element, index) => {
        const name = `dropdown-default-${index}`;
        // eslint-disable-next-line no-undef
        cy.viewport(1280, 1162);
        cy.wrap(element).matchImageSnapshot(name);
      });
  });
});
