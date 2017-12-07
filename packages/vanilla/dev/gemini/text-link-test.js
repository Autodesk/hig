gemini.suite('text link', (parent) => {
  parent.setUrl('src/basics/text-link/tests/gemini-text-link.html');

  gemini.suite('defaults', (suite) => {
    suite.setCaptureElements('.tests-text-link-defaults')
      .before(function (actions, find) {
        this.field = find('.hig__text-link');
      })
      .capture('plain')
      .capture('focused', function (actions, find) {
        actions.mouseDown(this.field);
        actions.mouseUp(this.field);
      })
      .capture('hovered', function (actions, find) {
        actions.mouseMove(this.field);
      });
  });

  gemini.suite('with text and href', (suite) => {
    suite.setCaptureElements('.tests-text-link-with-href')
      .before(function (actions, find) {
        this.field = find('.hig__text-link');
      })
      .capture('plain')
      .capture('focused', function (actions, find) {
        actions.mouseDown(this.field);
        actions.mouseUp(this.field);
      })
      .capture('hovered', function (actions, find) {
        actions.mouseMove(this.field);
      });
  });

  gemini.suite('secondary', (suite) => {
    suite.setCaptureElements('.tests-text-link-secondary')
      .before(function (actions, find) {
        this.field = find('.hig__text-link');
      })
      .capture('plain')
      .capture('focused', function (actions, find) {
        actions.mouseDown(this.field);
        actions.mouseUp(this.field);
      })
      .capture('hovered', function (actions, find) {
        actions.mouseMove(this.field);
      });
  });

  gemini.suite('secondary with href', (suite) => {
    suite.setCaptureElements('.tests-text-link-secondary-with-href')
      .before(function (actions, find) {
        this.field = find('.hig__text-link');
      })
      .capture('plain')
      .capture('focused', function (actions, find) {
        actions.mouseDown(this.field);
        actions.mouseUp(this.field);
      })
      .capture('hovered', function (actions, find) {
        actions.mouseMove(this.field);
      });
  });

  gemini.suite('with onclick', (suite) => {
    suite.setCaptureElements('.tests-text-link-with-onclick')
      .before(function (actions, find) {
        this.field = find('.hig__text-link');
      })
      .capture('plain')
      .capture('focused', function (actions, find) {
        actions.mouseDown(this.field);
        actions.mouseUp(this.field);
      })
      .capture('hovered', function (actions, find) {
        actions.mouseMove(this.field);
      });
  });

  gemini.suite('with onclick and href', (suite) => {
    suite.setCaptureElements('.tests-text-link-with-onclick-and-href')
      .before(function (actions, find) {
        this.field = find('.hig__text-link');
      })
      .capture('plain')
      .capture('focused', function (actions, find) {
        actions.mouseDown(this.field);
        actions.mouseUp(this.field);
      })
      .capture('hovered', function (actions, find) {
        actions.mouseMove(this.field);
      });
  });
});
