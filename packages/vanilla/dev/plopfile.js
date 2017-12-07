const path = require('path');

export default function (plop) {
  plop.addHelper('absPath', p => path.resolve(plop.getPlopfilePath(), p));

  plop.addHelper('pathToBEM', (plop_path, name) => {
    if (plop_path[plop_path.length] != '/') plop_path += '/';
    let s = plop_path.split('/').join('__');
    s += plop.renderString('{{ dashCase name }}', { name });
    s = s.replace('src__web__components__', 'hig__');
    return s;
  });

  plop.addHelper('pathToInterface', function (plop_path, name) {
    const a = plop_path.split('/');
    const properCasedName = plop.renderString('{{ properCase name }}', { name });
    a.push(properCasedName);
    const new_a = [];
    a.forEach((element) => {
      if (element != 'src' && element != 'web') {
        if (element == 'components') {
          new_a.push(element);
        } else {
          const p = plop.renderString('{{ properCase element }}', { element });
          new_a.push(p);
          new_a.push('partials');
        }
      }
    }, this);

    new_a.pop(); // remove last "partials"

    let s = "['";
    s += new_a.join("']['");
    s += "']";

    return s;
  });

  plop.setGenerator('hig_skeleton', {
    description: 'skeleton HIG generator, generates HTML, SCSS and JS class files.',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What\s the name of the component?',
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
