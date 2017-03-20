import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  topics: Ember.computed('spec', function() {
    return this.spec['tags'];
  })
});
