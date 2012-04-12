/*jshint white: false, strict: false, plusplus: false, onevar: false,
  nomen: false */
/*global gladius: false, document: false, window: false, module: false, start,
  test: false, expect: false, ok: false, notEqual: false, stop, QUnit: false */

define(function() {
  return function (_Math) {
    module( 'Math' );

    test( 'Basic', function() {
      expect( 2 );

      var math = new _Math();
      ok(
        math,
        'Math found'
      );
      ok(
        math.ARRAY_TYPE,
        'Found ARRAY_TYPE'
      );
    });
  };
});
