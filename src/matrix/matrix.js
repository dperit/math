/*jshint white: false, strict: false, plusplus: false, onevar: false,
  nomen: false */
/*global define: false, console: false, window: false, setTimeout: false */

define( function ( require ) {

    return function( FLOAT_ARRAY_TYPE ) {
      
        var Matrix = function( dim, args ) {
        
            var elements = null;
            if( 1 === args.length ) {
                elements = args[0];
            } else {
                elements = args;
            }
            
            var matrix = new FLOAT_ARRAY_TYPE( dim );
            for( var i = 0; i < dim; ++ i ) {
                matrix[i] = elements[i];
            }
            
            return matrix;
            
        };
        
        var matrix = {
                
                $: Matrix,
          
                iadd: function( m1, m2 ) {
                    for( var i = 0; i < m1.length; ++ i ) {
                        m1[i] += m2[i];
                    }
//                  Test
                    return m1;
                },
                
                isubtract: function( m1, m2 ) {
                    for( var i = 0; i < m1.length; ++ i ) {
                        m1[i] -= m2[i];
                    }
//                  Test
                    return m1;
                },
                
                clear: function( m ) {
                    for( var i = 0; i < m.length; ++ i ) {
                        m[i] = 0;
                    }
                },
                
                equal: function( m1, m2 ) {
                    if( m1.length != m2.length ) {
                        return false;
                    }
                    
                    var dim = m1.length;
                    for( var i = 0; i < dim; ++ i ) {
                        if( m1[i] != m2[i] ) {
                            return false;
                        }
                    }

                    return true;
                }
                
        };
        
        return matrix;
        
    };
    
});