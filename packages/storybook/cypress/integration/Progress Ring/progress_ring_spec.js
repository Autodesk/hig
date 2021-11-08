describe("Storybook/Progress Ring", () => {
  it("Render Determinate", () => {
    // eslint-disable-next-line no-undef
    cy.visit("iframe.html?selectedKind=ProgressRing&selectedStory=determinate");
    // eslint-disable-next-line no-undef
    cy.get("#root > div > div > div")
      .first()
      .each((element, index) => {
        // eslint-disable-next-line no-undef
        cy.viewport(1280, 1162);
        const name = `progress-ring-determinate-${index}`;
        // eslint-disable-next-line no-undef
        cy.wrap(element).matchImageSnapshot(name);
      });
  });
});
