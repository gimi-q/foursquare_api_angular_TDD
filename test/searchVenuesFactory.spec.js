describe('factory: SearchVenues', function(){
  var search;

  beforeEach(module('FoursquareSearch'));

  beforeEach(inject(function(SearchVenues){
    search = SearchVenues;
  }));

  var httpBackend;

  beforeEach(inject(function($httpBackend){
    httpBackend = $httpBackend;
  }));

  var access_token = process.env.ACCESS_TOKEN;


  var items = [
    {
      "name": "cafe",
      "reviews": "good",
      "hours": "open"
    },
  ];

  function stubHttpRequestWithQuery(query){
    httpBackend
    .when('GET', "https://api.foursquare.com/v2/venues/search?oauth_token=" + access_token+ "&v=20160601" )
    .respond(
      { items: items }
    );
  }

  it('returns search results', function(){
    stubHttpRequestWithQuery('51.5510057,-0.13793329999998605');
    search.query('51.5510057,-0.13793329999998605')
      .then(function(response) {
        expect(response.data.items).toEqual(items);
      });
      httpBackend.flush();
  });

  afterEach(function(){
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });
});
