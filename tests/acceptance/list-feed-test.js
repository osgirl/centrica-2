import { test } from 'qunit';
import moduleForAcceptance from 'centrica/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list feed');

test('should show feed as the home page', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/rentals', 'should redirect automatically');
  });
});

test('visiting /feed', function(assert) {
  visit('/feed');

  andThen(function() {
    assert.equal(currentURL(), '/feed');
  });
});

/*

test('should link to information about the company.', function (assert) {
  assert(false);
});

test('should link to contact information.', function (assert) {
  assert(false);
});
*/

test('should list notifications.', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(find('.alert').length, 3, 'should see 3 listings');
  });
});

/*
test('should filter the list of rentals by city.', function (assert) {
  assert(false);
});

test('should show details for a selected rental', function (assert) {
  assert(false);
});
*/
