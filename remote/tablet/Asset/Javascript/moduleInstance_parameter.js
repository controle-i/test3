// ======================================================================
// Parameter Module
// ======================================================================
var moduleInstance_paremeter = {
    // ==================================================================
    // Global variables 
    // ==================================================================
    // Module Instance
    instanceID: 'moduleInstance_', // Dont change this
    
    // Join
    join: {},

    joins: [{
        join: 28001,
        name: 'buttonDemonstration'
    }, {
        join: 28002,
        name: 'SerialDemonstration'
    }],
    
    // Language
    language: {},

    languages: [{
        fr: 'Bonjour',
        en: 'Hello',
        es: 'Buenos dias',
        name:'Hello', // Call language by name. Ex: CF.setJoin('moduleInstance_language_hello', this.language.GoodEvening); CF.setJoin('s1', this.language.GoodEvening);
        join: 28001, // Serial join (When starting the remote control, the join will be updated with the name. Put null is no language)
        tag: 'language_hello'  // Name of the tag. Ex: 'moduleInstance_language_hello' (When starting the remote control, the tag will be updated with the name. Put null is no language)
    }, {
        fr: 'Bonsoir',
        en: 'Good evening',
        es: 'buena tarde',
        name:'GoodEvening', // Call language by name. Ex: CF.log(this.language.GoodEvening); CF.log(moduleInstance_paremeter.language.GoodEvening);
        join: null, // Serial join (When starting the remote control, the join will be updated with the name. Put null is no language)
        tag: null   // Name of the tag. Ex: 'moduleInstance_language_hello' (When starting the remote control, the tag will be updated with the name. Put null is no language)
    }],

    languageDefault: 'fr', // For testing your module, you can change language (fr, en or es)
    // ==================================================================
    // Setup
    // ==================================================================
    setup: function () {
        try {
           // Get joins
           this.join = CI.getJoins(this.joins);
           CF.setJoin('d' + moduleInstance_paremeter.join.buttonDemonstration, 1);
           CF.setJoin('moduleInstance_button_exemple', 1);
           // Get language
           this.language = CI.getLanguage(this.languages, this.languageDefault, this.instanceID);
           CF.log(this.language.GoodEvening);
           CF.log('sdasdsasd');
           // tag
           CF.setJoin('moduleInstance_language_hello', this.language.GoodEvening);
           // join
           CF.setJoin('s1', this.language.GoodEvening);
        }
        catch (e) {
            CF.log('Setup: exception caught: ' + e);
        }
    }, // end setup function    
    // ==================================================================    
    // Function  
    // ==================================================================
    // ==================================================================    
    // Setting  
    // ==================================================================
    joinCloseExemple: function() {
        CF.setJoin('d' + this.join.buttonDemonstration, 0);
        /// or (if you are in another js file)
        CF.setJoin('d' + moduleInstance_paremeter.join.buttonDemonstration, 0);
    },

    joinCloseExemple2: function(join) {
        CF.log(join);
        CF.setJoin(join, 0);
    },

    tagCloseExemple2: function() {
        CF.setJoin('moduleInstance_button_exemple', 0);
    }
};
CF.modules.push({
    name: 'moduleInstance_Parameter',
    setup: moduleInstance_paremeter.setup,
    object: moduleInstance_paremeter,
    version: 1.0
});

