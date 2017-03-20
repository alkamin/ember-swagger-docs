import Ember from 'ember';

export default Ember.Component.extend({
  tag: '',

  sections: Ember.computed('spec', function() {
    return this.get('spec')['x-top-matter'];
  })
});
