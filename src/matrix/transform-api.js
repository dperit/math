define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {

    var notImplemented = require( "common/not-implemented" );
    var T = require( "matrix/t" );

    function fixed( translation, rotation, scale, result ) {
      result = result || new T();

      if( translation ) {
        translate( translation, result );
      }

      if( rotation ) {
        rotate( rotation, result );
      }

      if( scale ) {
        scale( scale, result );
      }

      return result;
    }

    function rotate( rotation, result ) {
      result || matrix4.identity;

      var sinA,
          cosA;

      var ml;
      if( 0 !== v[2] ) {
        sinA = Math.sin( v[2] );
        cosA = Math.cos( v[2] );
        ml = [];
        ml.push(matrix4.$([ cosA, sinA, 0, 0,
                           -sinA, cosA, 0, 0,
                            0, 0, 1, 0,
                            0, 0, 0, 1 ] ));
        ml.push(matrix4.$(r));
        
        matrix4.multiply( ml, r );
      }

      if( 0 !== v[1] ) {
        sinA = Math.sin( v[1] );
        cosA = Math.cos( v[1] );
        ml = [];
        ml.push(matrix4.$([ cosA, 0, -sinA, 0,
                            0, 1, 0, 0,
                            sinA, 0, cosA, 0,
                            0, 0, 0, 1 ] ));
        ml.push(matrix4.$(r));
        
        matrix4.multiply( ml, r );
      }

      if( 0 !== v[0] ) {
        sinA = Math.sin( v[0] );
        cosA = Math.cos( v[0] );
        ml = [];
        ml.push(matrix4.$([ 1, 0, 0, 0,
                            0, cosA, sinA, 0,
                            0, -sinA, cosA, 0,
                            0, 0, 0, 1 ] ));
        ml.push(matrix4.$(r));
        
        matrix4.multiply( ml, r );
      }

      if( !result ) {
        return r;
      }
    }

    function scale( scale, result ) {

    }

    function translate( translation, result ) {

    }

    var transform = {
      fixed: fixed,
      rotate: rotate,
      scale: scale,
      translate: translate
    };

    return transform;

  };

});