import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-primer-документ-l');
  this.route('i-i-s-primer-документ-e',
  { path: 'i-i-s-primer-документ-e/:id' });
  this.route('i-i-s-primer-документ-e.new',
  { path: 'i-i-s-primer-документ-e/new' });
});

export default Router;
