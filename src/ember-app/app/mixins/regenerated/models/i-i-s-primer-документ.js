import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

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
