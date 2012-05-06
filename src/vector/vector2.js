/*jshint white: false, strict: false, plusplus: false, onevar: false,
  nomen: false */
/*global define: false, console: false, window: false, setTimeout: false */

define( function ( require ) {

    return function( FLOAT_ARRAY_TYPE ) {

        var vector = require( './vector' )( FLOAT_ARRAY_TYPE );
        var constants = require( '../constants' )();

        var Vector2 = function() {
            if( 0 === arguments.length ) {
                return vector.$( 2, [0, 0] );
            } else {
                return vector.$( 2, arguments );
            }
        };
        
        function _add( v1, v2, result ) {
            result = result || Vector2();
            
            result[0] = v1[0] + v2[0];
            result[1] = v1[1] + v2[1];
            
            return result;
        }
        
        function _angle( v1, v2 ) {
            var nV1 = Vector2();
            var nV2 = Vector2();

            vector.normalize(v1, nV1);
            vector.normalize(v2, nV2);

            return Math.acos( vector.dot( nV1, nV2 ) );
        }
        
        function _clear( v ) {
            v[0] = 0;
            v[1] = 0;
        }
        
        function _dot( v1, v2 ) {
            var r = 0;
            r += v1[0] * v2[0];
            r += v1[1] * v2[1];
            return r;
        }
        
        function _equal( v1, v2, e ) {
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
        
        function _length( v ) {
            var r = 0;
            r += v[0] * v[0];
            r += v[1] * v[1];
            return Math.sqrt( r );
        }
        
        function _multiply( v, s, result ) {
            result = result || Vector2();
            
            result[0] = s * v[0];
            result[1] = s * v[1];
            
            return result;
        }
        
        function _negate( v, result ) {
            result = result || Vector2();
            
            result[0] = -1 * v[0];
            result[1] = -1 * v[1];
            
            return result;
        }
        
        function _normalize( v, result ) {
            result = result || Vector2();
            var l = _length( v );
            
            result[0] = v[0]/l;
            result[1] = v[1]/l;
            
            return result;
        }
        
        function _project( v1, v2, result ) {
            result = result || Vector2();
            
            var dp = v1[0]*v2[0] + v1[1]*v2[1];
            var dp_over_v2_squared_length = dp / (v2[0]*v2[0] + v2[1]*v2[1]);

            result[0] = dp_over_v2_squared_length * v2[0];
            result[1] = dp_over_v2_squared_length * v2[1];
            
            return result;
        }
        
        var vector2 = {                
                $: Vector2,          
                add: _add,
                angle: _angle,
                clear: _clear,
                dot: _dot,
                equal: _equal,
                length: _length,
                multiply: _multiply,              
                negate: _negate,
                normalize: _normalize,
                project: _project,
                set: function( v, x, y ) {
                    v[0] = x;
                    v[1] = y;
                },
                subtract: function( v1, v2, result ) {
                    result = result || Vector2();

                    return vector.subtract( v1, v2, result );
                }                
        };
        
        Object.defineProperty( vector2, 'x', {
            get: function() {
                return Vector2( [1, 0] );
            },
            enumerable: true
        });

        Object.defineProperty( vector2, 'u', {
            get: function() {
                return Vector2( [1, 0] );
            },
            enumerable: true
        });

        Object.defineProperty( vector2, 'y', {
            get: function() {
                return Vector2( [0, 1] );
            },
            enumerable: true
        });

        Object.defineProperty( vector2, 'v', {
            get: function() {
                return Vector2( [0, 1] );
            },
            enumerable: true
        });

        Object.defineProperty( vector2, 'zero', {
            get: function() {
                return Vector2( [0, 0] );
            },
            enumerable: true
        });

        Object.defineProperty( vector2, 'one', {
            get: function() {
                return Vector2( [1, 1] );
            },
            enumerable: true
        });

        return vector2;

    };

});