describe('FoursquareSearchController', function(){
  beforeEach(module('FoursquareSearch'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('FoursquareSearchController');
  }));

  it('initialises with a hello world', function() {
  expect(ctrl.helloWorld).toEqual("hello world");
});
});
