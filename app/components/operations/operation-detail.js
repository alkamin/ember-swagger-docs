import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['operation-details'],

  content: Ember.computed('data', function() {
    return Ember.String.htmlSafe(this.get('data.content'));
  }),

  headingTag: Ember.computed('data.level', function() {
    return `h${this.get('data.level')}`;
  }),

  heading: Ember.computed('headingTag', 'data.title', function() {
    const headingTag = this.get('headingTag');
    const title = this.get('data.title');
    return Ember.String.htmlSafe(`<${headingTag}>${title}</${headingTag}>`);
  })
});
