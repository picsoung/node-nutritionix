var Nutritionix = function(apiKey,apiSecret){
	if(!apiSecret || !apiKey)
		throw new Error("API key and secret are mandatory paramaters.");

	this.api_key = apiKey;
	this.api_secret = apiSecret;

	return this;
}

Nutritionix.prototype={

}

module.exports = Nutritionix;