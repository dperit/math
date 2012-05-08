define( function ( require ) {

    return function( FLOAT_ARRAY_TYPE ) {

        var Vector = function( dim, args ) {
            var elements = null;
            if( 1 === args.length ) {
                elements = args[0];
            } else {
                elements = args;
            }

            var vector = new FLOAT_ARRAY_TYPE( dim );
            for( var i = 0; i < dim; ++ i ) {
                vector[i] = elements[i];
            }

            return vector;
        };

        return Vector;

    };

});