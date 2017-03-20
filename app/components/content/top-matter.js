import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  sections: Ember.computed('spec', function() {
    return this.get('spec')['x-top-matter'];
  })
});
