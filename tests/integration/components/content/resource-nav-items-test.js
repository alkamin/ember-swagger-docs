import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('content/resource-nav-items', 'Integration | Component | content/resource nav items', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{content/resource-nav-items}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#content/resource-nav-items}}
      template block text
    {{/content/resource-nav-items}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
