import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  topMatter: Ember.computed('spec', function() {
    // Generates an array of format:
    // [
    //   {label: 'Introduction', isHeading: true},
    //   {label: 'Using the API', isHeading: false}
    // ]

    return this.spec['x-top-matter'].map(s => {
      const isHeading = s.level === 1;
      return {
        label: s.title,
        isHeading: isHeading
      };
    });
  })
});
