import { Serializer as ТЧSerializer } from
  '../mixins/regenerated/serializers/i-i-s-primer-т-ч';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
