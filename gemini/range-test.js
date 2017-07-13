gemini.suite('range', (parent) => {
  parent.setUrl('src/web/basics/form-elements/range/tests/gemini-range.html');

  gemini.suite('regular', (suite) => {
       suite.setCaptureElements('.test-group-default')
            .before(function(actions, find) {
                this.field = find('.test-range .hig__range__field');
            })
            .capture('plain')
            .capture('focused', function(actions, find) {
                actions.mouseDown(this.field);
            })
  });

	 gemini.suite('disabled', (suite) => {
       suite.setCaptureElements('.test-group-disabled')
            .before(function(actions, find) {
                this.field = find('.test-range-disabled .hig__range__field');
            })
            .capture('disabed', function(actions, find) {
                actions.mouseDown(this.field);
            })
  });
});