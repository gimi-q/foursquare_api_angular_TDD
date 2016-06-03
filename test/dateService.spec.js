describe('Service: TodaysDate', function(){

  beforeEach(module('FoursquareSearch'));

  beforeEach(inject(function(TodaysDate){
    todaysDate = TodaysDate;
  }));

  it('returns the date formatted as YYYYMMDD with padding of single digit dates', function(){
    var sampleDate = new Date(2016,05,2);
    jasmine.clock().mockDate(sampleDate);
    expect(new Date().yyyymmdd()).toBe('20160602');
  });

});
