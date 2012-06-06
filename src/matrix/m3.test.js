define(
  [],
  function() {
    return function( _Math ) {

      module( "M3", {
        setup: function() {
          this.math = _Math;
        },
        teardown: function() {
          this.math = null;
        }
      });

      test( "create an empty matrix", function() {
        expect( 9 );

        var m = new this.math.M3();

        equal( m[0], 0, "default value is 0" );
        equal( m[1], 0, "default value is 0" );
        equal( m[2], 0, "default value is 0" );
        equal( m[3], 0, "default value is 0" );
        equal( m[4], 0, "default value is 0" );
        equal( m[5], 0, "default value is 0" );
        equal( m[6], 0, "default value is 0" );
        equal( m[7], 0, "default value is 0" );
        equal( m[8], 0, "default value is 0" );
      });

      test( "create a matrix with given values", function() {
        expect( 9 );

        var m = new this.math.M3( 1, 2, 3, 
                                  4, 5, 6, 
                                  7, 8, 9 );

        equal( m[0], 1, "value is correct" );
        equal( m[1], 2, "value is correct" );
        equal( m[2], 3, "value is correct" );
        equal( m[3], 4, "value is correct" );
        equal( m[4], 5, "value is correct" );
        equal( m[5], 6, "value is correct" );
        equal( m[6], 7, "value is correct" );
        equal( m[7], 8, "value is correct" );
        equal( m[8], 9, "value is correct" );
      });

      test( "create a matrix with given array", function() {
        expect( 9 );

        var m = new this.math.M3( [1, 2, 3, 
                                   4, 5, 6, 
                                   7, 8, 9] );

        equal( m[0], 1, "value is correct" );
        equal( m[1], 2, "value is correct" );
        equal( m[2], 3, "value is correct" );
        equal( m[3], 4, "value is correct" );
        equal( m[4], 5, "value is correct" );
        equal( m[5], 6, "value is correct" );
        equal( m[6], 7, "value is correct" );
        equal( m[7], 8, "value is correct" );
        equal( m[8], 9, "value is correct" );
      });

      test( "create a matrix given another matrix", function() {
        expect( 18 );

        var src = new this.math.M3( 1, 2, 3, 
                                    4, 5, 6, 
                                    7, 8, 9 );
        var m = new this.math.M3( src );

        equal( m[0], 1, "value is correct" );
        equal( m[1], 2, "value is correct" );
        equal( m[2], 3, "value is correct" );
        equal( m[3], 4, "value is correct" );
        equal( m[4], 5, "value is correct" );
        equal( m[5], 6, "value is correct" );
        equal( m[6], 7, "value is correct" );
        equal( m[7], 8, "value is correct" );
        equal( m[8], 9, "value is correct" );

        src[0] = 20;
        src[1] = 21;
        src[2] = 22;
        src[3] = 23;
        src[4] = 24;
        src[5] = 25;
        src[6] = 26;
        src[7] = 27;
        src[8] = 28;

        equal( m[0], 1, "value is correct after changing src" );
        equal( m[1], 2, "value is correct after changing src" );
        equal( m[2], 3, "value is correct after changing src" );
        equal( m[3], 4, "value is correct after changing src" );
        equal( m[4], 5, "value is correct after changing src" );
        equal( m[5], 6, "value is correct after changing src" );
        equal( m[6], 7, "value is correct after changing src" );
        equal( m[7], 8, "value is correct after changing src" );
        equal( m[8], 9, "value is correct after changing src" );
      });

    };
  }
);