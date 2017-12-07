gemini.suite('range', (parent) => {
  parent.setUrl('src/basics/form-elements/range/tests/gemini-range.html');

  gemini.suite('regular', (suite) => {
    suite.setCaptureElements('.test-group-default')
      .before(function (actions, find) {
        this.field = find('.tests-range-defaults .hig__range__field');
      })
      .capture('plain')
      .capture('focused', function (actions, _find) {
        actions.mouseDown(this.field);
      });
  });
  gemini.suite('setters', (suite) => {
    suite.setCaptureElements('.test-group-setters')
      .before(function (actions, find) {
        this.field = find('.tests-range-setters .hig__range__field');
      })
      .capture('setters', function (actions, _find) {
        actions.mouseDown(this.field);
      });
  });
  gemini.suite('disabled', (suite) => {
    suite.setCaptureElements('.test-group-disabled')
      .before(function (actions, find) {
        this.field = find('.tests-range-disabled .hig__range__field');
      })
      .capture('disabled', function (actions, _find) {
        actions.mouseDown(this.field);
      });
  });
});
