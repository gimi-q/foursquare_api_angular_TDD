foursquareVenueSearch.controller('FoursquareSearchController', [ function() {
var self = this;
this.helloWorld = "hello world";
this.searchTerm = '';
this.searchResult = [];

self.doSearch = function(){
  this.searchResult = [{
                       name:'cafe',
                       review: 'Great',
                       hours: 'Open',
                       images: 'happy.jpg'
                     },
                     {
                      name:'Bookshop',
                      review: 'Bookish',
                      hours: 'Closed',
                      images: 'sad.jpg',

                    }];
  console.log(this.SearchResult);
};



}]);
