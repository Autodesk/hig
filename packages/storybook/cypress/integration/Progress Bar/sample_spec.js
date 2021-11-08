describe("Storybook/Progress Bar", () => {
  it("Rendering", () => {
    // eslint-disable-next-line no-undef
    cy.visit("iframe.html?selectedKind=ProgressBar&selectedStory=determinate");
    // eslint-disable-next-line no-undef
    cy.get("#root > div > div > div")
      .first()
      .each((element, index) => {
        const name = `progress-bar-determinate-${index}`;
        // eslint-disable-next-line no-undef
        cy.wrap(element).matchImageSnapshot(name);
      });
  });
});
