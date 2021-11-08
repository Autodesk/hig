describe("Storybook/Tabs", () => {
  it("Render default", () => {
    // eslint-disable-next-line no-undef
    cy.visit("iframe.html?selectedKind=Tabs&selectedStory=default");
    // eslint-disable-next-line no-undef
    cy.get("#root > div > div > div")
      .first()
      .each((element, index) => {
        const name = `tabs-default-${index}`;
        // eslint-disable-next-line no-undef
        cy.viewport(1280, 1162);
        cy.wrap(element).matchImageSnapshot(name);
      });
  });

  it("Render complex tab", () => {
    // eslint-disable-next-line no-undef
    cy.visit("iframe.html?selectedKind=Tabs&selectedStory=complex%20tab");
    // eslint-disable-next-line no-undef
    cy.get("#root > div > div > div")
      .first()
      .each((element, index) => {
        const name = `tabs-complex-${index}`;
        // eslint-disable-next-line no-undef
        cy.viewport(1280, 1162);
        cy.wrap(element).matchImageSnapshot(name);
      });
  });

  it("Render custom tab", () => {
    // eslint-disable-next-line no-undef
    cy.visit("iframe.html?selectedKind=Tabs&selectedStory=custom%20tab");
    // eslint-disable-next-line no-undef
    cy.get("#root > div > div > div")
      .first()
      .each((element, index) => {
        const name = `tabs-custom-${index}`;
        // eslint-disable-next-line no-undef
        cy.viewport(1280, 1162);
        cy.wrap(element).matchImageSnapshot(name);
      });
  });
});
