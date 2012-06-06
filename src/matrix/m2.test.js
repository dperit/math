define(
  [],
  function() {
    return function( _Math ) {

      module( "M2", {
        setup: function() {
          this.math = _Math;
        },
        teardown: function() {
          this.math = null;
        }
      });

      test( "create an empty matrix", function() {
        expect( 4 );

        var m = new this.math.M2();

        equal( m[0], 0, "default value is 0" );
        equal( m[1], 0, "default value is 0" );
        equal( m[2], 0, "default value is 0" );
        equal( m[3], 0, "default value is 0" );
      });

      test( "create a matrix with given values", function() {
        expect( 4 );

        var m = new this.math.M2( 1, 2, 
                                  3, 4 );

        equal( m[0], 1, "value is correct" );
        equal( m[1], 2, "value is correct" );
        equal( m[2], 3, "value is correct" );
        equal( m[3], 4, "value is correct" );
      });

      test( "create a matrix with given array", function() {
        expect( 4 );

        var m = new this.math.M2( [1, 2, 
                                   3, 4] );

        equal( m[0], 1, "value is correct" );
        equal( m[1], 2, "value is correct" );
        equal( m[2], 3, "value is correct" );
        equal( m[3], 4, "value is correct" );
      });

      test( "create a matrix given another matrix", function() {
        expect( 8 );

        var src = new this.math.M2( 1, 2, 
                                    3, 4 );
        var m = new this.math.M2( src );

        equal( m[0], 1, "value is correct" );
        equal( m[1], 2, "value is correct" );
        equal( m[2], 3, "value is correct" );
        equal( m[3], 4, "value is correct" );

        src[0] = 20;
        src[1] = 21;
        src[2] = 22;
        src[3] = 23;

        equal( m[0], 1, "value is correct after changing src" );
        equal( m[1], 2, "value is correct after changing src" );
        equal( m[2], 3, "value is correct after changing src" );
        equal( m[3], 4, "value is correct after changing src" );
      });

    };
  }
);