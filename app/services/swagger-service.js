import Ember from 'ember';
/* global SwaggerParser */

export default Ember.Service.extend({
  specPath: 'spec.yml',

  fetchSpec() {
    if (!this.swaggerParser) {
      this.swaggerParser = new SwaggerParser();
    }
    return this.swaggerParser.dereference(this.get('specPath'));
  }
});
