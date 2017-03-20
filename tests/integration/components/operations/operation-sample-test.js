import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('operations/operation-sample', 'Integration | Component | operations/operation sample', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{operations/operation-sample}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#operations/operation-sample}}
      template block text
    {{/operations/operation-sample}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
