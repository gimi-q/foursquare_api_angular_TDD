describe('Foursquare Venue Search', function(){

  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));

  beforeEach(function(){
      browser.get('http://localhost:8080');
  });


  it('has a title', function(){
    expect(browser.getTitle()).toEqual('FourSquare Venue search');
  });

//   You're going to be using the FourSquare API to fetch the 10 nearest locations to you and load them into a list view.
//
// As a local event seeker,
// So that I know whats LOCATIONS are nearest to me
// I would like to be able to fetch the 10 nearest LOCATIONS to me.

it('finds the 10 nearest venues/locations to a given coordinates', function() {
    searchBox.sendKeys('51.5510057,-0.13793329999998605');
    searchButton.click();
    var venues = element.all(by.repeater('venue in searchCtrl.searchResult'));

    expect( venues.get(0).element( by.css('.venuename')).getText()  ).toBe('cafe');
  });
// As a local event seeker,
// So that I know view what LOCATIONS are on nearest to me clearly
// I would like see these LOCATIONS in a list VIEW.
//
// As a local event seeker,
// So that I know what VENUES are at these LOCATIONS
// the LIST VIEW should show the VENUES.
//
// As a local event seeker,
// So that I can have more information on the VENUE
// the VENUE should display a title. DONE
//
// As a local event seeker,
// So that I can have more  detailed information on the VENUE
// the VENUE should display a short description, or a review. DONE
//
// As a local event seeker,
// So that I can know whether the venue is currently open
// the VENUE listing should display a a label at the top right corner of the cell that indicates if that venue is open or not. DONE
//
// As a local event seeker
// So that I can view the review clearly when it is longer than a line,
// the cell's layout should change in accordance with the length of the tip/review.
//
// As a local event seeker
// So that I can view multiple images of the venue,
// I would like to see multiple images for each venue in an array. ?
//
// As a local event seeker
// So that the venue results look good and display correctly on mobile devices,
// I would like the information presented in a mobile-first single page app.
//
// As a Front-end developer working as part of the dev team,
// so that I can work with the information provided effectively, easily and securely,
// I would like the information presented in a JSON that is appropriate for a front-end developer to consume.
//
// As a Front-end developer working as part of the dev team,
// so that I can provide a form that allows the event seeker to filter results based on location,
// I would like the ability to change variables put into the query (users latitude and longitude).
//
//
// NOTES:
// The API you'll be using (Foursquare) also offers day-specific opening times to help you with the Open/Closed tag using the /hours route.
//
// You must carry out the HOURS CALCULATION using your own logic and the times returned in the route.
//
// Explain why you have provided the data in the structure you have, as well as naming conventions.

});
