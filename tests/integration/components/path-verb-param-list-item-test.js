import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('path-verb-param-list-item', 'Integration | Component | path verb param list item', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{path-verb-param-list-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#path-verb-param-list-item}}
      template block text
    {{/path-verb-param-list-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
