QUnit.config.autostart = false;

var query = location.href.split( '?' )[1];
var parts = query && query.split( 
    query.indexOf( "&amp;" ) !== -1 ? "&amp;" : '&' );

require.config({
  baseUrl: "../src",
  paths: {
    "tests": "../tests",
  }
});

var srcNames = ["_math"];

require( ["tests/unit-tests"], function( testNames ) {
  var moduleNames = srcNames.concat( testNames );
  require( moduleNames, function( _Math ) {
    QUnit.start();
    
    var testModules = Array.prototype.slice.call( arguments, 
        srcNames.length );
    
    test( "tests modules are valid", function() {
      expect( testModules.length );
      testModules.forEach( function( testModule ) {
        ok( typeof testModule === "function", "test module is a function" );
      });
    });
    
    testModules.forEach( function( testModule ) {
      testModule( _Math );
    });
  });
});
