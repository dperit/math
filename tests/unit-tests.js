if ( typeof define !== "function" ) {
  var define = require( "amdefine" )( module );
}

define( function( require ) {

  return [

          "_math.test",
         
          "vector/vector2.test",
          "vector/vector3.test",
          "vector/vector4.test",
          "vector/quaternion.test",
          
          "matrix/matrix2.test",
          "matrix/matrix3.test",
          "matrix/matrix4.test",
          "matrix/transform.test"

          ];

});
