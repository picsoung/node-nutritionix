var should = require('should');
var nutritionix = require("../lib/nutritionix");

describe('nutrionix', function(){
  describe('with no arguments',function(){
  	it('returns an error',function(){
  		(function(){
  			nutritionix();
		}).should.throw(/API/);
  	}),
  });
});