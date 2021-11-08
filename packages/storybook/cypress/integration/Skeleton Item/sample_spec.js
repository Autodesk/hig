describe("Storybook/Skeleton Item", () => {
  it("Rendering", () => {
    // eslint-disable-next-line no-undef
    cy.visit("iframe.html?selectedKind=SkeletonItem&selectedStory=default");
    // eslint-disable-next-line no-undef
    cy.get("#root > div > div > div")
      .first()
      .each((element, index) => {
        const name = `skeleton-item-${index}`;
        // eslint-disable-next-line no-undef
        cy.viewport(1280, 1162);
        // eslint-disable-next-line no-undef
        cy.wrap(element).matchImageSnapshot(name);
      });
  });
});
