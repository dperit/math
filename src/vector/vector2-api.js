define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {

    var notImplemented = require( "common/not-implemented" );
    var V2 = require( "vector/v2" )( FLOAT_ARRAY_TYPE );

    function add( v1, v2, result ) {
      result = result || new V2();
      
      result[0] = v1[0] + v2[0];
      result[1] = v1[1] + v2[1];
      
      return result;
    }
      
    function angle( v1, v2 ) {
      var normalizedV1 = new V2();
      var normalizedV2 = new V2();

      normalize(v1, normalizedV1);
      normalize(v2, normalizedV2);

      return Math.acos( dot( normalizedV1, normalizedV2 ) );
    }
      
    function clear( v ) {
      v[0] = 0;
      v[1] = 0;
      
      return v;
    }
      
    function dot( v1, v2 ) {
      var r = 0;
      
      r += v1[0] * v2[0];
      r += v1[1] * v2[1];
      
      return r;
    }
      
    function equal( v1, v2, e ) {
      e = e || 0.000001;

      if( v1.length != v2.length ) {
          return false;
      }
      
      if( Math.abs( v1[0] - v2[0] ) > e ||
          Math.abs( v1[1] - v2[1] ) > e ) {
          return false;
      }

      return true;
    }
    
    function length( v ) {
      var r = 0;
      
      r += v[0] * v[0];
      r += v[1] * v[1];
      
      return Math.sqrt( r );
    }
    
    function multiply( v, s, result ) {
      result = result || new V2();
      
      result[0] = s * v[0];
      result[1] = s * v[1];
      
      return result;
    }
    
    function negate( v, result ) {
      result = result || new V2();
      
      result[0] = -1 * v[0];
      result[1] = -1 * v[1];
      
      return result;
    }
    
    function normalize( v, result ) {
      result = result || new V2();
      var l = length( v );
      
      result[0] = v[0]/l;
      result[1] = v[1]/l;
      
      return result;
    }
    
    function project( v1, v2, result ) {
      result = result || new V2();
      
      var dp = v1[0]*v2[0] + v1[1]*v2[1];
      var dp_over_v2_squared_length = dp / (v2[0]*v2[0] + v2[1]*v2[1]);

      result[0] = dp_over_v2_squared_length * v2[0];
      result[1] = dp_over_v2_squared_length * v2[1];
      
      return result;
    }
    
    function set( v ) {
      if( 2 === arguments.length ) {
          v[0] = arguments[1][0];
          v[1] = arguments[1][1];
      } else {
          v[0] = arguments[1];
          v[1] = arguments[2];
      }
     
      return v;
    }
    
    function subtract( v1, v2, result ) {
      result = result || new V2();
      
      result[0] = v1[0] - v2[0];
      result[1] = v1[1] - v2[1];
      
      return result;
    }

    var vector2 = {  
      add: add,
      angle: angle,
      clear: clear,
      distance: notImplemented,
      dot: dot,
      equal: equal,
      length: length,
      limit: notImplemented,
      multiply: multiply,              
      negate: negate,
      normalize: normalize,
      project: project,
      set: set,
      subtract: subtract,
      
      x: new V2( 1, 0 ),
      u: new V2( 1, 0 ),
      y: new V2( 0, 1 ),
      v: new V2( 0, 1 ),
      zero: new V2( 0, 0 ),
      one: new V2( 1, 1 )
    };
    
    return vector2;

  };

});