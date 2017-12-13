const path = require('path');

export default function (plop) {
  plop.addHelper('absPath', p => path.resolve(plop.getPlopfilePath(), p));

  plop.addHelper('pathToBEM', (plopPath, name) => {
    if (plopPath[plopPath.length] !== '/') plopPath += '/';
    let s = plopPath.split('/').join('__');
    s += plop.renderString('{{ dashCase name }}', { name });
    s = s.replace('src__web__components__', 'hig__');
    return s;
  });

  plop.addHelper('pathToInterface', function (plopPath, name) {
    const a = plopPath.split('/');
    const properCasedName = plop.renderString('{{ properCase name }}', { name });
    a.push(properCasedName);
    const newArr = [];
    a.forEach((element) => {
      if (element !== 'src' && element !== 'web') {
        if (element === 'components') {
          newArr.push(element);
        } else {
          const p = plop.renderString('{{ properCase element }}', { element });
          newArr.push(p);
          newArr.push('partials');
        }
      }
    }, this);

    newArr.pop(); // remove last "partials"

    let s = "['";
    s += newArr.join("']['");
    s += "']";

    return s;
  });

  plop.setGenerator('hig_skeleton', {
    description: 'skeleton HIG generator, generates HTML, SCSS and JS class files.',
    prompts: [{
      type: 'input',
      name: 'name',
      message: "What's the name of the component?",
      validate(value) {
        if ((/.+/).test(value)) { return true; }
        return 'name is required';
      },
    }, {
      type: 'directory',
      name: 'path',
      message: 'where would you like to put this component?',
      basePath: plop.getPlopfilePath(),
    }],
    actions: [{
      type: 'add',
      path: '{{absPath path}}/{{ dashCase name }}/tests/tests-{{ dashCase name }}.html',
      templateFile: '../src/helpers/skeletons/skeleton-tests-template.html',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '{{absPath path}}/{{ dashCase name }}/tests/gemini-{{ dashCase name }}.html',
      templateFile: '../src/helpers/skeletons/skeleton-gemini-template.html',
      abortOnFail: true,
    }, {
      type: 'add',
      path: 'gemini/{{ dashCase name }}-test.js',
      templateFile: '../src/helpers/skeletons/skeleton-gemini-test.js',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '{{absPath path}}/{{ dashCase name }}/{{ dashCase name }}.html',
      templateFile: '../src/helpers/skeletons/skeleton-template.html',
      abortOnFail: true,
    }, {
      type: 'modify',
      path: '{{absPath path}}/{{ dashCase name }}/{{ dashCase name }}.html',
      pattern: /## replace css class here ##/gi,
      template: '{{ pathToBEM path name }}',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '{{absPath path}}/{{ dashCase name }}/{{ dashCase name }}.scss',
      templateFile: '../src/helpers/skeletons/skeleton-template.scss',
      abortOnFail: true,
    }, {
      type: 'modify',
      path: '{{absPath path}}/{{ dashCase name }}/{{ dashCase name }}.scss',
      pattern: /## replace css class here ##/gi,
      template: '{{ pathToBEM path name }}',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '{{absPath path}}/{{ dashCase name }}/{{ dashCase name }}.js',
      templateFile: '../src/helpers/skeletons/skeleton-template.js',
      abortOnFail: true,
    }, {
      type: 'modify',
      path: '{{absPath path}}/{{ dashCase name }}/{{ dashCase name }}.js',
      pattern: /## replace interface here ##/gi,
      template: '{{{ pathToInterface path name }}}',
      abortOnFail: true,
    }],
  });
}
