gemini.suite('flyout', (parent) => {
  parent.setUrl('src/basics/flyout/tests/gemini-flyout.html');

  const examples = [
    'top-left',
    'top-center',
    'top-right',
    'right-top',
    'right-center',
    'right-bottom',
    'bottom-left',
    'bottom-center',
    'bottom-right',
    'left-top',
    'left-center',
    'left-bottom'
  ];

  gemini.suite('flyout', (suite) => {
    suite
      .setCaptureElements('.test-container')
      .before((actions, find) => {
        this.next = find('.hig__button');
      });

    examples.forEach((example) => {
      suite.capture(example, (actions, find) => {
        actions.click(this.next);
      });
    });
  });
});
