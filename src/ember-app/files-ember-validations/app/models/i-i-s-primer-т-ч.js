import {
  defineNamespace,
  Model as ТЧMixin
} from '../mixins/regenerated/models/i-i-s-primer-т-ч';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧMixin, {
});

defineNamespace(Model);

export default Model;
