import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИО: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-primer-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  фИО: {
    descriptionKey: 'models.i-i-s-primer-сотрудник.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-primer-сотрудник.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПредставлениеE', 'i-i-s-primer-сотрудник', {
    фИО: attr('', { index: 0 }),
    должность: belongsTo('i-i-s-primer-должность', '', {

    }, { index: 1 })
  });

  modelClass.defineProjection('ПредставлениеL', 'i-i-s-primer-сотрудник', {
    фИО: attr('', { index: 0 })
  });
};
