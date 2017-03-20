import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('operations/operation-container', 'Integration | Component | operations/operation container', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{operations/operation-container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#operations/operation-container}}
      template block text
    {{/operations/operation-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
