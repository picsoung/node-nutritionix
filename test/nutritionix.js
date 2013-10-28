var should = require('should');
var nutrionix = require("../lib/nutrionix");

describe('nutrionix', function(){
  describe('with no arguments',function(){
  	it('returns an error',function(){
  		nutrionix().should.throwError(/^APIkeys.*/);
  	});
  });
});