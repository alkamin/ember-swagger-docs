import Ember from 'ember';
import LoadingSliderMixin from '../mixins/loading-slider';

export default Ember.Route.extend(LoadingSliderMixin, {
  swaggerService: Ember.inject.service(),

  model() {
    return this.get('swaggerService').fetchSpec();
  }
});
