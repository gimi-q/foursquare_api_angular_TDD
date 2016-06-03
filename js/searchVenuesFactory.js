foursquareVenueSearch.factory('SearchVenues', ['$http','TodaysDate', function($http, TodaysDate){

  var queryUrl = 'https://api.foursquare.com/v2/venues/search';
  var access_token = process.env.ACCESS_TOKEN;
  var version = TodaysDate.yyyymmdd();//'20160528';

  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'll': searchTerm,
          'v': version,
          'oauth_token': access_token,
          'limit' : 10
        }
      });
    }
  };
}]);
