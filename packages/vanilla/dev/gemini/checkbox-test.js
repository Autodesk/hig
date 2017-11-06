/**
 * Created by shannon on 7/11/17.
 */
gemini.suite('checkbox', (parent) => {
  parent.setUrl('src/basics/form-elements/checkbox/tests/gemini-checkbox.html');

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

  gemini.suite('without label', (suite) => {
    suite.setCaptureElements('.tests-checkbox4')
         .capture('without label');
  });

  gemini.suite('chekd and disabled checkbox', (suite) => {
    suite.setCaptureElements('.tests-checkbox5')
         .capture('checked and disabled Checkbox');
  });
});