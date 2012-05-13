define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {

    var V3 = require( "vector/v3" )( FLOAT_ARRAY_TYPE );

    function add( v1, v2, result ) {
      if( result === v1 ) {
        v1[0] += v2[0];
        v1[1] += v2[1];
        v1[2] += v2[2];
        return;
      }

      if( undefined === result ) {
        result = new V3( v1[0] + v2[0], 
          v1[1] + v2[1], v1[2] + v2[2] );
        return result;
      } else {
        result[0] = v1[0] + v2[0];
        result[1] = v1[1] + v2[1];
        result[2] = v1[2] + v2[2];
        return;
      }
    }

    var vector3 = {  
      add: add
    };
    
    return vector3;

  };

});