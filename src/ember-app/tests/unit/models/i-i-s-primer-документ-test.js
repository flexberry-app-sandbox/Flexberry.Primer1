import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-primer-документ', 'Unit | Model | i-i-s-primer-документ', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-primer-документ',
    'model:i-i-s-primer-должность',
    'model:i-i-s-primer-сотрудник',
    'model:i-i-s-primer-т-ч',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
