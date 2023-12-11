import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Primer',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Primer',
          title: 'Primer'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
