import i18next from 'i18next';

const translations = {};

['en', 'ja'].forEach(lang => // eslint-disable-line no-return-assign
  translations[lang] = {
    translation: require(`../../languages/${lang}/hig-vanilla-tests.json`), // eslint-disable-line global-require
  },
);

i18next.init({
  lng: 'en',
  debug: true,
  resources: translations,
});

export default i18next;
