import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-primer-сотрудник', 'Unit | Serializer | i-i-s-primer-сотрудник', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-primer-сотрудник',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
