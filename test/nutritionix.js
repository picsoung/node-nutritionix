var should = require('should');
var Nutritionix = require("../lib/nutritionix");
var api_url = "https://api.nutritionix.com/v1_1/"

var apiKey = "ff97a848effe18cce7b5d8e6367ed9e6";
var apiId ="cc135298"
var nutri = new Nutritionix(apiKey,apiId);

describe('nutritionix', function(){
  describe('with no arguments',function(){
  	it('returns an error',function(){
  		(function(){
  			Nutritionix();
  		}).should.throw(/API/);
  	});
  });
  describe('with good keys and secret',function(){
  	it('return an object',function(){
      nutri.should.have.type('object');
  	});
  });
  describe('get item with upc',function(){
    it('fails because can\'t be blank',function(){
      (function(){
        nutri.getItemByUPC("");
      }).should.throw();
    });

    it('returns infos',function(done){
      nutri.getItemByUPC("52200004265",function(result){
        var r = JSON.parse(result);
        r.item_id.should.eql('51c38f3c97c3e6d3d972ef8d');
        done();
      });
    });
  });
});