describe("Storybook/Avatar-Bundle", () => {
    it("Rendering default", () => {
      // eslint-disable-next-line no-undef
      cy.visit("iframe.html?selectedKind=AvatarBundle&selectedStory=default");
      // eslint-disable-next-line no-undef
      cy.get("#root > div > div > div > div")
      .first()
        .each((element, index) => {
          const name = `avatar-bundle-default-${index}`;
          // eslint-disable-next-line no-undef
          cy.viewport(1280, 1162);
          cy.wrap(element).matchImageSnapshot(name);
        });
    });
  });
  