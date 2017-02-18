import Ember from 'ember';
/* global SwaggerParser */

export default Ember.Route.extend({
  model(params) {
    const swg = new SwaggerParser();
    let name = params.name || 'github';
    const spec = swg.dereference(`/${name}.swagger.yaml`);
    return Ember.RSVP.hash({ spec, name });
  }
});
