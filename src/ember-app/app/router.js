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
  this.route('i-i-s-primer-должность-l');
  this.route('i-i-s-primer-должность-e',
  { path: 'i-i-s-primer-должность-e/:id' });
  this.route('i-i-s-primer-должность-e.new',
  { path: 'i-i-s-primer-должность-e/new' });
  this.route('i-i-s-primer-сотрудник-список');
  this.route('i-i-s-primer-сотрудник-l',
  { path: 'i-i-s-primer-сотрудник-l/:id' });
  this.route('i-i-s-primer-сотрудник-l.new',
  { path: 'i-i-s-primer-сотрудник-l/new' });
});

export default Router;
