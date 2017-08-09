gemini.suite('spacer', parent => {
  parent.setUrl('src/web/basics/spacer/tests/gemini-spacer.html');

  const examples = [
    'stack-none',
    'stack-xxs',
    'stack-xs',
    'stack-s',
    'stack-m',
    'stack-l',
    'stack-xl',
    'stack-xxl',

    'inline-none',
    'inline-xxs',
    'inline-xs',
    'inline-s',
    'inline-m',
    'inline-l',
    'inline-xl',
    'inline-xxl',

    'inset-none',
    'inset-xxs',
    'inset-xs',
    'inset-s',
    'inset-m',
    'inset-l',
    'inset-xl',
    'inset-xxl'
  ];

  examples.forEach(example => {
    gemini.suite(example, suite => {
      suite.setCaptureElements(`#${example}`).capture(example, actions => {
        actions.click(`#${example}-link`);
      });
    });
  });
});
