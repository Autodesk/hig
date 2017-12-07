gemini.suite('tooltip', (parent) => {
  parent.setUrl('src/basics/tooltip/tests/gemini-tooltip.html');

  const examples = [
    'top-center',
    'right-center',
    'bottom-center',
    'left-center',
  ];

  gemini.suite('toolip', (suite) => {
    suite
      .setCaptureElements('.test-container')
      .before((actions, find) => {
        this.next = find('.hig__button');
      });

    examples.forEach((example) => {
      suite.capture(example, (actions, _find) => {
        actions.click(this.next);
      });
    });
  });
});
