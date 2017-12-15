gemini.suite('notifications', (parent) => {
  parent.setUrl('src/components/global-nav/top-nav/notifications/tests/gemini-notifications-empty-state.html');

  gemini.suite('notifications (empty state)', (suite) => {
    suite.setCaptureElements('body')
      .before(function (actions, find) {
        this.next = find('.hig__global-nav__top-nav__shortcut');
      })
      .capture('standard');
  });
});
