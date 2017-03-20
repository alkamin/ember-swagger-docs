import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sidebar/sidebar-item', 'Integration | Component | sidebar/sidebar item', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sidebar/sidebar-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sidebar/sidebar-item}}
      template block text
    {{/sidebar/sidebar-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
