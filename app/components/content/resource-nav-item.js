import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  matchingPaths: Ember.computed('spec', 'resourceName', function() {
    const resourceName = this.get('resourceName');
    const paths = this.get('spec.paths');
    const pathsArray = Object.values(paths);
    return pathsArray.filter(p => p['x-resource'] == resourceName);
  }),

  matchingMethods: Ember.computed('matchingPaths', function() {
    const matchingPaths = this.get('matchingPaths');
    const methods = matchingPaths.map(path => {
      return Object.values(path).filter(method => method.hasOwnProperty('summary'));
    });
    return [].concat.apply([], methods);
  })
});
