define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {

    var notImplemented = require( "common/not-implemented" );
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

    function angle( v1, v2 ) {
      return Math.acos(
        (v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2]) /
        (Math.sqrt(v1[0] * v1[0] + v1[1] * v1[1] + v1[2] * v1[2]) *
          Math.sqrt(v2[0] * v2[0] + v2[1] * v2[1] + v2[2] * v2[2]) ) );
    }

    function clear( v ) {
      v[0] = 0;
      v[1] = 0;
      v[2] = 0;

      return v;
    }

    function cross( v1, v2, result ) {
      result = result || new V3();

      var v1_0 = v1[0],
        v1_1 = v1[1],
        v1_2 = v1[2];
      var v2_0 = v2[0],
        v2_1 = v2[1],
        v2_2 = v2[2];

      result[0] = (v1_1 * v2_2) - (v2_1 * v1_2);
      result[1] = (v1_2 * v2_0) - (v2_2 * v1_0);
      result[2] = (v1_0 * v2_1) - (v2_0 * v1_1);

      return result;
    }

    function dot( v1, v2 ) {
      return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
    }

    function equal( v1, v2, e ) {
      e = e || 0.000001;

      if( v1.length !== v2.length ) {
        return false;
      }

      var d0 = Math.abs( v1[0] - v2[0] );
      var d1 = Math.abs( v1[1] - v2[1] );
      var d2 = Math.abs( v1[2] - v2[2] );

      if( isNaN( d0 ) || d0 > e ||
          isNaN( d1 ) || d1 > e ||
          isNaN( d2 ) || d2 > e ) {
        return false;
      }

      return true;
    }

    function length( v ) {
      var r = 0;
      
      r += v[0] * v[0];
      r += v[1] * v[1];
      r += v[2] * v[2];
      
      return Math.sqrt( r );      
    }

    function multiply( v, s, result ) {
      result = result || new V3();
      
      result[0] = s * v[0];
      result[1] = s * v[1];
      result[2] = s * v[2];
      
      return result;      
    }

    function negate( v, result ) {
      result = result || new V3();
      
      result[0] = -1 * v[0];
      result[1] = -1 * v[1];
      result[2] = -1 * v[2];
      
      return result;      
    }

    function normalize( v, result ) {
      result = result || new V3();
      var l = length( v );
      
      result[0] = v[0]/l;
      result[1] = v[1]/l;
      result[2] = v[2]/l;
      
      return result;      
    }

    function set( v ) {
      if( 2 === arguments.length ) {
        v[0] = arguments[1][0];
        v[1] = arguments[1][1];
        v[2] = arguments[1][2];
      } else {          
        v[0] = arguments[1];
        v[1] = arguments[2];
        v[2] = arguments[3];
      }
     
      return v;      
    }

    function subtract( v1, v2, result ) {
      result = result || new V3();
      
      result[0] = v1[0] - v2[0];
      result[1] = v1[1] - v2[1];
      result[2] = v1[2] - v2[2];
      
      return result;
    }

    var vector3 = {
      add: add,
      angle: angle,
      clear: clear,
      cross: cross,
      distance: notImplemented,
      dot: dot,
      equal: equal,
      length: length,
      limit: notImplemented,
      multiply: multiply,
      negate: negate,
      normalize: normalize,
      set: set,
      subtract: subtract,

      x: new V3( 1, 0, 0 ),
      y: new V3( 0, 1, 0 ),
      z: new V3( 0, 0, 1 ),
      zero: new V3( 0, 0, 0 ),
      one: new V3( 1, 1, 1 )
    };
    
    return vector3;

  };

});