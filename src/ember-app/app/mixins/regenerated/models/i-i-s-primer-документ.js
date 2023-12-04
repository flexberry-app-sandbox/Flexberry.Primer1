import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  описание: DS.attr('string'),
  тЧ: DS.hasMany('i-i-s-primer-т-ч', { inverse: 'документ', async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-primer-документ.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  описание: {
    descriptionKey: 'models.i-i-s-primer-документ.validations.описание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  тЧ: {
    descriptionKey: 'models.i-i-s-primer-документ.validations.тЧ.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокументE', 'i-i-s-primer-документ', {
    iD: attr('ID', { index: 0 }),
    описание: attr('Описание', { index: 1 }),
    тЧ: hasMany('i-i-s-primer-т-ч', 'ТЧ', {
      строка: attr('Строка', { index: 0 }),
      количество: attr('Количество', { index: 1 }),
      сумма: attr('Сумма', { index: 2 })
    })
  });

  modelClass.defineProjection('ДокументL', 'i-i-s-primer-документ', {
    iD: attr('ID', { index: 0 }),
    описание: attr('Описание', { index: 1 })
  });
};
