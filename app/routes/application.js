import Ember from 'ember';
import LoadingSliderMixin from '../mixins/loading-slider';

export default Ember.Route.extend(LoadingSliderMixin, {
  model() {
    return [
      'github',
      'slack',
      'raster-foundry'
    ];
  }
});
