import {
  defineNamespace,
  Model as ДокументMixin
} from '../mixins/regenerated/models/i-i-s-primer-документ';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДокументMixin, {
});

defineNamespace(Model);

export default Model;
