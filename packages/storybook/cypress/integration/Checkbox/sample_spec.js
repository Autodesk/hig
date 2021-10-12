describe("Storybook/CheckboxPresenter", () => {
  it("default", () => {
    // eslint-disable-next-line no-undef
    cy.visit(
    "iframe.html?selectedKind=Forms%7CCheckbox&selectedStory=default"
  );
    // eslint-disable-next-line no-undef
    cy.get("#root > div > div > div > div").first().each((element, index) => {
      const name = `checkbox-default-${index}`;
      // eslint-disable-next-line no-undef
        cy.wrap(element).matchImageSnapshot(name);
    });
});

    it("checked", () => {
        // eslint-disable-next-line no-undef
        cy.visit(
        "iframe.html?selectedKind=Forms%7CCheckbox&selectedStory=checked"
        );
        // eslint-disable-next-line no-undef
    cy.get("#root > div > div > div > div").first().each((element, index) => {
        const name = `checkbox-checked${index}`;
        // eslint-disable-next-line no-undef
        cy.wrap(element).matchImageSnapshot(name);
        });
    });

    it("disabled", () => {
        // eslint-disable-next-line no-undef
        cy.visit(
            "iframe.html?selectedKind=Forms%7CCheckbox&selectedStory=disabled"
        );
        // eslint-disable-next-line no-undef
    cy.get("#root > div > div > div > div").first().each((element, index) => {
            const name = `checkbox-disabled${index}`;
            // eslint-disable-next-line no-undef
            cy.wrap(element).matchImageSnapshot(name);
        });
        });

    it("indeterminate", () => {
        // eslint-disable-next-line no-undef
        cy.visit(
            "iframe.html?selectedKind=Forms%7CCheckbox&selectedStory=indeterminate"
        );
        // eslint-disable-next-line no-undef
        cy.get("#root > div > div > div > div").first().each((element, index) => {
            const name = `checkbox-indeterminate${index}`;
            // eslint-disable-next-line no-undef
            cy.wrap(element).matchImageSnapshot(name);
        });
    });  
});