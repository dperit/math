define( function ( require ) {

    return function( FLOAT_ARRAY_TYPE ) {

        var Vector2 = require( './vector2' )( FLOAT_ARRAY_TYPE );

        function add( v1, v2, result ) {
            result = result || new Vector2();
            
            result[0] = v1[0] + v2[0];
            result[1] = v1[1] + v2[1];
            
            return result;
        }
        
        function angle( v1, v2 ) {
            var nV1 = Vector2();
            var nV2 = Vector2();

            vector.normalize(v1, nV1);
            vector.normalize(v2, nV2);

            return Math.acos( vector.dot( nV1, nV2 ) );
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
            result = result || new Vector2();
            
            result[0] = s * v[0];
            result[1] = s * v[1];
            
            return result;
        }
        
        function negate( v, result ) {
            result = result || new Vector2();
            
            result[0] = -1 * v[0];
            result[1] = -1 * v[1];
            
            return result;
        }
        
        function normalize( v, result ) {
            result = result || new Vector2();
            var l = _length( v );
            
            result[0] = v[0]/l;
            result[1] = v[1]/l;
            
            return result;
        }
        
        function project( v1, v2, result ) {
            result = result || new Vector2();
            
            var dp = v1[0]*v2[0] + v1[1]*v2[1];
            var dp_over_v2_squared_length = dp / (v2[0]*v2[0] + v2[1]*v2[1]);

            result[0] = dp_over_v2_squared_length * v2[0];
            result[1] = dp_over_v2_squared_length * v2[1];
            
            return result;
        }
        
        function set( v, x, y ) {
          v[0] = x;
          v[1] = y;
          
          return v;
        }
        
        function subtract( v1, v2, result ) {
          result = result || new Vector2();
          
          result[0] = v1[0] - v2[0];
          result[1] = v1[1] - v2[1];
          
          return result;
        }
        
        function x() {
          return new Vector2( 1, 0 );
        }
        
        function y() {
          return new Vector2( 0, 1 );
        }
        
        function zero() {
          return new Vector2( 0, 0 );
        }
        
        function one() {
          return new Vector2( 1, 1 );
        }
        
        var vector2 = {  
                add: add,
                angle: angle,
                clear: clear,
                dot: dot,
                equal: equal,
                length: length,
                multiply: multiply,              
                negate: negate,
                normalize: normalize,
                project: project,
                set: set,
                subtract: subtract,
                
                x: x,
                u: x,
                y: y,
                v: y,
                zero: zero,
                one: one
        };
        
        return vector2;

    };

});