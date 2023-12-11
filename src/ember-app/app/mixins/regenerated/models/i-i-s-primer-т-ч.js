import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  строка: DS.attr('number'),
  сумма: DS.attr('decimal'),
  сотрудник: DS.belongsTo('i-i-s-primer-сотрудник', { inverse: null, async: false }),
  документ: DS.belongsTo('i-i-s-primer-документ', { inverse: 'тЧ', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-primer-т-ч.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  строка: {
    descriptionKey: 'models.i-i-s-primer-т-ч.validations.строка.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-primer-т-ч.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-primer-т-ч.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  документ: {
    descriptionKey: 'models.i-i-s-primer-т-ч.validations.документ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧE', 'i-i-s-primer-т-ч', {
    строка: attr('Строка', { index: 0 }),
    количество: attr('Количество', { index: 1 }),
    сумма: attr('Сумма', { index: 2 }),
    сотрудник: belongsTo('i-i-s-primer-сотрудник', 'ФИО', {
      фИО: attr('ФИО', { index: 3 }),
      должность: belongsTo('i-i-s-primer-должность', '', {
        должность: attr('Должность', { index: 4 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
