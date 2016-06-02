describe('FoursquareSearchController', function(){
  beforeEach(module('FoursquareSearch'));

  var ctrl;

  describe('when searching for local venues', function(){

    beforeEach(inject(function($controller) {
      ctrl = $controller('FoursquareSearchController');
    }));

    // it('initialises with a hello world', function() {
    //   expect(ctrl.helloWorld).toEqual("hello world");
    // });

    it('initialises with an empty search term(latitude and longitude)', function() {
        expect(ctrl.searchTerm).toBe('');
    });

  });

});
