import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['isExpanded:expanded'],
  isExpanded: true,
  click() {
    this.toggleProperty('isExpanded')
  }
});
