import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      'github',
      'slack',
      'raster-foundry'
    ];
  }
});
