import { test } from 'qunit';
import moduleForAcceptance from 'centrica/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list feed');

test("I can view the customers", function() {
  let authors = server.createList('customer', 3);

  visit('/customers');

  andThen(() => {
    equal(find('li').length, 3);
    equal(find('li:first').text(), authors[0].firstName);
  });
});

test("I can view the notifications", function() {
  //let authors = server.createList('notification', 3);

  visit('/notifications');

  /*
  andThen(() => {
    equal(find('li').length, 3);
    equal(find('li:first').text(), authors[0].firstName);
  });
  */
});

test("I can view the employees", function() {
  let employees = server.createList('employee', 3);

  visit('/employees');

  andThen(() => {
    equal(find('li').length, 3);
    equal(find('li:first').text(), employees[0].firstName);
  });
});
