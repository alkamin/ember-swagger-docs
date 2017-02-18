import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('spec', { path: '/spec/:name' }, function() {
    this.route('paths');
    this.route('definitions');
    this.route('info');
  });
});

export default Router;
