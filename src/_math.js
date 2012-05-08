define( function ( require ) {

  var constants = require( "constants" );
  var Vector2 = require( "vector/vector2" );
  var vector2Operations = require( "vector/vector2-operations" );

  function extend( object, extra ) {
    for ( var prop in extra ) {
      if ( !object.hasOwnProperty( prop ) && extra.hasOwnProperty( prop ) ) {
        object[prop] = extra[prop];
      }
    }
  }

  var _Math = function( options ) {
    var FLOAT_ARRAY_ENUM = {
        Float32: Float32Array,
        Float64: Float64Array
    };
    this.FLOAT_ARRAY_ENUM = FLOAT_ARRAY_ENUM;

    var ARRAY_TYPE = FLOAT_ARRAY_ENUM.Float32;
    this.ARRAY_TYPE = ARRAY_TYPE;

    extend( this, constants );

    this.Vector2 = Vector2( this.ARRAY_TYPE );
    this.vector2 = vector2Operations( this.ARRAY_TYPE );
  };

  return _Math;

});