var CI = {
	//==================================================================
	//Setup
	//==================================================================
	setup: function () {
		try {

		} catch (e) {
			CF.log('Setup: exception caught: ' + e);
		}
	}, // end setup function	
	//=====================================================================================	
	//Function
	//=====================================================================================	
	getJoins: function (array) {
	    // We create the object for joins
	    const arrayToObject = (array) =>
	       array.reduce((obj, item) => {
	         obj[item.name] = item.join;
	         return obj;
	       }, {});
	    
	    return arrayToObject(array);
	}, 

	getLanguage: function (array, language, instanceID) {
	    // We create the object for joins
	    const arrayToObject = (array, language) =>
	       array.reduce((obj, item) => {
	         obj[item.name] = item[language.toLowerCase()];
	         return obj;
	       }, {});
	    
	    var languages = arrayToObject(array, language);
	    
		// For joins and tags
		var joinChanges = [];
		var tagChanges = [];
		// Get joins and tags
		for (var i = 0; i < array.length; i++) {
			if (array[i].join) {
				joinChanges.push({'join': 's' + array[i].join, value: array[i][language.toLowerCase()]});
				tagChanges.push({'join': instanceID + array[i].tag, value: array[i][language.toLowerCase()]});
			}
		}
		CF.setJoins(joinChanges);
		CF.setJoins(tagChanges);
	    
	    return languages;
	}
};

CF.modules.push({name: 'Contrôle-i api', setup:CI.setup, object: CI, version: 1.0});