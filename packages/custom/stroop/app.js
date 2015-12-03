'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Stroop = new Module('stroop');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Stroop.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Stroop.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Stroop.menus.add({
    title: 'stroop example page',
    link: 'welcome',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Stroop.aggregateAsset('css', 'stroop.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Stroop.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Stroop.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Stroop.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Stroop;
});
