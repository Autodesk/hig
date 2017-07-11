/**
 * Created by shannon on 7/11/17.
 */
gemini.suite('checkbox', (parent) => {
  parent.setUrl('src/web/basics/form-elements/checkbox/tests/gemini-checkbox.html');

  gemini.suite('basic', (suite) => {
    suite.setCaptureElements('.tests-checkbox')
         .capture('basic');
  });

  gemini.suite('checked', (suite) => {
    suite.setCaptureElements('.tests-checkbox1')
         .capture('checked');
  });

  gemini.suite('required', (suite) => {
    suite.setCaptureElements('.tests-checkbox2')
         .capture('required');
  });
  gemini.suite('disabled', (suite) => {
    suite.setCaptureElements('.tests-checkbox3')
         .capture('disabled');
  });
  gemini.suite('callcheck', (suite) => {
    suite.setCaptureElements('.tests-checkbox4')
         .capture('call check');
  });
  gemini.suite('callrequired', (suite) => {
    suite.setCaptureElements('.tests-checkbox5')
         .capture('call required');
  });
  gemini.suite('calldisable', (suite) => {
    suite.setCaptureElements('.tests-checkbox6')
       .capture('call disable');
  });
});