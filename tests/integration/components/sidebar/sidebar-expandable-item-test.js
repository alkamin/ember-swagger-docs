import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sidebar/sidebar-expandable-item', 'Integration | Component | sidebar/sidebar expandable item', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sidebar/sidebar-expandable-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sidebar/sidebar-expandable-item}}
      template block text
    {{/sidebar/sidebar-expandable-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
