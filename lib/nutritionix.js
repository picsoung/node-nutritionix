var api_url = "https://api.nutritionix.com/v1_1/";
var request = require('request');

function Nutritionix(apiKey,apiID){
	if(!apiID || !apiKey)
		throw new Error("API key and secret are mandatory paramaters.");

	this.api_key = apiKey;
	this.api_id = apiID;
}

Nutritionix.prototype={
	getItemByUPC: function(upc,callback){
		if(!upc)
			throw new Error("UPC paramater can't be blank");

		var url = api_url + "item?";
		url += "upc="+upc;
		url = this.addKeystoUrl(url);

		request.get(url, function(error,response,body){
			callback(error || body);
		});
	},

	getItemById: function(id, callback){
		if(!id)
			throw new Error("ID paramater can't be blank");

		var url = api_url + "item?";
		url += "id="+id;
		url = this.addKeystoUrl(url);

		request.get(url, function(error,response,body){
			callback(error || body);
		});
	},

	getBrand: function(id, callback){
		if(!id)
			throw new Error("ID paramater can't be blank");

		var url = api_url + "brand/";
		url += id+"?";
		url = this.addKeystoUrl(url);

		request.get(url, function(error,response,body){
			callback(error || body);
		});
	},

	searchBrand: function(opts, callback){
		var url = api_url + "brand/search?";
		url += this.optsToUrlParam(opts);
		url = this.addKeystoUrl(url);
		console.log(url);

		request.get(url, function(error,response,body){
			callback(error || body);
		});
	},

	searchFood: function(opts, callback){
		var url = api_url + "search?";
		url += this.optsToUrlParam(opts);
		url = this.addKeystoUrl(url);
		console.log(url);

		request.get(url, function(error,response,body){
			callback(error || body);
		});
	},
}
Nutritionix.prototype.addKeystoUrl = function(url){
	url += "&appId="+this['api_id'];
	url += "&appKey="+this['api_key'];
	return url;
}
/**
 * Change an hash to url query string
 */

Nutritionix.prototype.optsToUrlParam =function(opts){
    var url = "";
    this.checkOpts(opts);
    if (opts != null && Object.keys(opts).length >0){
        for (var key in opts) {
                url += "&";
                url += key;
                url += "=";
                url += opts[key];
            }
    }
    return url;
}

Nutritionix.prototype.checkOpts = function(opts){
	if((opts['offset'] && !opts['limit']) || (!opts['offset'] && opts['limit']))
		console.warn("WARN: offset and limit both have to be specified.")
	
	if(opts['auto'] != true && opts['auto'] != false && opts['auto'] != undefined )
		console.warn("WARN: auto paramater could only be true or false")

	if(opts['type'] != true && opts['type'] != false && opts['type'] != undefined )
		console.warn("WARN: type paramater only accepts 1 or 2 as value.  1=search only restaurant brands (ie mcdonalds), 2=search only food manufacturer brands (ie kashi)")
}

module.exports = Nutritionix;