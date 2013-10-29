# Nutritonix package for Node.js
[![Build Status](https://travis-ci.org/picsoung/sleep-sort.png?branch=master)](https://travis-ci.org/picsoung/sleep-sort)

This is a simple wrapper for the [Nutritionix](www.nutritionix.com) API.

[Nutritionix](www.nutritionix.com) is a database of nutrition facts of every food item.

# Installing

`npm install nutritionix`

# Developer Portal

To use this package you need to get API keys form [Nutritionix API portal](https://developer.nutritionix.com).

The documentation of the API could be found [here](https://developer.nutritionix.com/docs/v1_1)

# Usage

```javascript
var Nutritionix = require('./lib/nutritionix');
var nutri = new Nutritionix('YOUR_API_KEY','YOUR_APP_ID');

//Search for a brand named coca-cola
nutri.searchBrand({query:"coca-cola"},function(result){
	console.log(result);
});

//Search nutrition fact of an item with barcode = 52200004265
// here it corresponds to Bay cereals for Beet nuts brand
nutri.getItemByUPC("52200004265",function(result){
	console.log(result);
});
```

