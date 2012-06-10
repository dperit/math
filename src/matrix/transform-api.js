define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {

    var notImplemented = require( "common/not-implemented" );
    var M4 = require( "matrix/m4" );

    function fixed( translation, rotation, scale, result ) {
      result = result || new M4();

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

    function rotate( v, result ) {
      result || new M4( matrix4.identity );

      var sinA,
          cosA;
      var rotation;

      if( 0 !== v[2] ) {
        sinA = Math.sin( v[2] );
        cosA = Math.cos( v[2] );

        rotation = [ cosA, sinA, 0, 0,
                     -sinA, cosA, 0, 0,
                     0, 0, 1, 0,
                     0, 0, 0, 1 ];
        matrix4.set( result, rotation );
      }

      if( 0 !== v[1] ) {
        sinA = Math.sin( v[1] );
        cosA = Math.cos( v[1] );

        rotation = [ cosA, 0, -sinA, 0,
                     0, 1, 0, 0,
                     sinA, 0, cosA, 0,
                     0, 0, 0, 1 ];
        matrix4.multiply( rotation, result, result );
      }

      if( 0 !== v[0] ) {
        sinA = Math.sin( v[0] );
        cosA = Math.cos( v[0] );
        
        rotation = [ 1, 0, 0, 0,
                     0, cosA, sinA, 0,
                     0, -sinA, cosA, 0,
                     0, 0, 0, 1 ];
        matrix4.multiply( rotation, result, result );
      }

      return result;
    }

    function scale( v, result ) {
      result = result || new M4();

      matrix4.set( result, v[0], 0, 0, 0,
                           0, v[1], 0, 0,
                           0, 0, v[2], 0,
                           0, 0, 0, 1 );

      return result;
    }

    function translate( v, result ) {
      result = result || new M4();

      matrix4.set( result, 1, 0, 0, 0,
                           0, 1, 0, 0,
                           0, 0, 1, 0,
                           v[0], v[1], v[2], 1 );

      return result;
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