import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPrimerДокументLForm from './forms/i-i-s-primer-документ-l';
import IISPrimerДолжностьLForm from './forms/i-i-s-primer-должность-l';
import IISPrimerСотрудникСписокForm from './forms/i-i-s-primer-сотрудник-список';
import IISPrimerДокументEForm from './forms/i-i-s-primer-документ-e';
import IISPrimerДолжностьEForm from './forms/i-i-s-primer-должность-e';
import IISPrimerСотрудникLForm from './forms/i-i-s-primer-сотрудник-l';
import IISPrimerДокументModel from './models/i-i-s-primer-документ';
import IISPrimerДолжностьModel from './models/i-i-s-primer-должность';
import IISPrimerСотрудникModel from './models/i-i-s-primer-сотрудник';
import IISPrimerТЧModel from './models/i-i-s-primer-т-ч';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-primer-документ': IISPrimerДокументModel,
    'i-i-s-primer-должность': IISPrimerДолжностьModel,
    'i-i-s-primer-сотрудник': IISPrimerСотрудникModel,
    'i-i-s-primer-т-ч': IISPrimerТЧModel
  },

  'application-name': 'Primer',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Primer',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Primer',
          title: 'Primer'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        primer: {
          caption: 'Primer',
          title: 'Primer',
          'i-i-s-primer-документ-l': {
            caption: 'Документ',
            title: ''
          },
          'i-i-s-primer-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-primer-сотрудник-список': {
            caption: 'СотрудникСписок',
            title: ''
          }
        },
        'new-folder1': {
          caption: 'NewFolder1',
          title: 'NewFolder1'
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-primer-документ-l': IISPrimerДокументLForm,
    'i-i-s-primer-должность-l': IISPrimerДолжностьLForm,
    'i-i-s-primer-сотрудник-список': IISPrimerСотрудникСписокForm,
    'i-i-s-primer-документ-e': IISPrimerДокументEForm,
    'i-i-s-primer-должность-e': IISPrimerДолжностьEForm,
    'i-i-s-primer-сотрудник-l': IISPrimerСотрудникLForm
  },

});

export default translations;
