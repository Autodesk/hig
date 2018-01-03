gemini.suite('notifications', (parent) => {
  parent.setUrl(
    'src/components/global-nav/top-nav/notifications/tests/gemini-notifications.html'
  );

  gemini.suite('regular', (suite) => {
    suite.setCaptureElements('body').capture('notifications');
  });
});
