import i18next from 'i18next'

const translations = {};

['en', 'de', 'ja', 'zh-Hans'].forEach(lang =>
  translations[lang] = {
    translation: require('../../languages/' + lang + '/hig-vanilla-tests.json')
  }
);

i18next.init({
  lng: 'en',
  debug: true,
  resources: translations
});

export default i18next;
