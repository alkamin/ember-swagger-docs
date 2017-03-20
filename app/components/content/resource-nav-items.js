import Ember from 'ember';

export default Ember.Component.extend({
  tag: '',

  resources: Ember.computed('spec', function() {
    return this.get('spec')['x-resources'];
  })
});
