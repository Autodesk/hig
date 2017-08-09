gemini.suite('flyout', parent => {
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

  examples.forEach(example => {
    gemini.suite(example, suite => {
      suite.setCaptureElements(`.test-container`).capture(example, actions => {
        actions.click(`.test-container`);
      });
    });
  });
});
