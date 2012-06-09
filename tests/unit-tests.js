if ( typeof define !== "function" ) {
  var define = require( "amdefine" )( module );
}

define( function( require ) {

  return [

          "_math.test",

          "vector/v2.test",
          "vector/vector2-api.test",
          "vector/vector2.test",

          "vector/v3.test",
          "vector/vector3-api.test",
          "vector/vector3.test",

          "vector/v4.test",
          "vector/vector4-api.test",
          "vector/vector4.test",

          // "vector/quaternion-api.test",
          // "vector/quaternion.test",

          "matrix/m2.test",
          // "matrix/matrix2-api.test",
          // "matrix/matrix2.test",

          "matrix/m3.test",
          // "matrix/matrix3-api.test",
          // "matrix/matrix3.test",

          "matrix/m4.test",
          "matrix/matrix4-api.test",
          "matrix/matrix4.test",

          // "matrix/transform-api.test",
          // "matrix/transform.test"

          ];

});
