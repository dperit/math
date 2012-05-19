define(
  [],
  function() {
    return function( _Math ) {

      module( "M4", {
        setup: function() {
          this.math = _Math;
        },
        teardown: function() {
          this.math = null;
        }
      });

      test( "create an empty matrix", function() {
        expect( 16 );

        var m = new this.math.M4();

        equal( m[0], 0, "default value is 0" );
        equal( m[1], 0, "default value is 0" );
        equal( m[2], 0, "default value is 0" );
        equal( m[3], 0, "default value is 0" );
        equal( m[4], 0, "default value is 0" );
        equal( m[5], 0, "default value is 0" );
        equal( m[6], 0, "default value is 0" );
        equal( m[7], 0, "default value is 0" );
        equal( m[8], 0, "default value is 0" );
        equal( m[9], 0, "default value is 0" );
        equal( m[10], 0, "default value is 0" );
        equal( m[11], 0, "default value is 0" );
        equal( m[12], 0, "default value is 0" );
        equal( m[13], 0, "default value is 0" );
        equal( m[14], 0, "default value is 0" );
        equal( m[15], 0, "default value is 0" );
      });

      test( "create a matrix with given values", function() {
        expect( 16 );

        var m = new this.math.M4( 1, 2, 3, 4,
                                  5, 6, 7, 8,
                                  9, 10, 11, 12,
                                  13, 14, 15, 16 );

        equal( m[0], 1, "value is correct" );
        equal( m[1], 2, "value is correct" );
        equal( m[2], 3, "value is correct" );
        equal( m[3], 4, "value is correct" );
        equal( m[4], 5, "value is correct" );
        equal( m[5], 6, "value is correct" );
        equal( m[6], 7, "value is correct" );
        equal( m[7], 8, "value is correct" );
        equal( m[8], 9, "value is correct" );
        equal( m[9], 10, "value is correct" );
        equal( m[10], 11, "value is correct" );
        equal( m[11], 12, "value is correct" );
        equal( m[12], 13, "value is correct" );
        equal( m[13], 14, "value is correct" );
        equal( m[14], 15, "value is correct" );
        equal( m[15], 16, "value is correct" );
      });

      test( "create a matrix with given array", function() {
        expect( 16 );

        var m = new this.math.M4( [1, 2, 3, 4,
                                   5, 6, 7, 8,
                                   9, 10, 11, 12,
                                   13, 14, 15, 16] );

        equal( m[0], 1, "value is correct" );
        equal( m[1], 2, "value is correct" );
        equal( m[2], 3, "value is correct" );
        equal( m[3], 4, "value is correct" );
        equal( m[4], 5, "value is correct" );
        equal( m[5], 6, "value is correct" );
        equal( m[6], 7, "value is correct" );
        equal( m[7], 8, "value is correct" );
        equal( m[8], 9, "value is correct" );
        equal( m[9], 10, "value is correct" );
        equal( m[10], 11, "value is correct" );
        equal( m[11], 12, "value is correct" );
        equal( m[12], 13, "value is correct" );
        equal( m[13], 14, "value is correct" );
        equal( m[14], 15, "value is correct" );
        equal( m[15], 16, "value is correct" );
      });

      test( "create a matrix given another matrix", function() {
        expect( 32 );

        var src = new this.math.M4( 1, 2, 3, 4,
                                    5, 6, 7, 8,
                                    9, 10, 11, 12,
                                    13, 14, 15, 16 );
        var m = new this.math.M4( src );

        equal( m[0], 1, "value is correct" );
        equal( m[1], 2, "value is correct" );
        equal( m[2], 3, "value is correct" );
        equal( m[3], 4, "value is correct" );
        equal( m[4], 5, "value is correct" );
        equal( m[5], 6, "value is correct" );
        equal( m[6], 7, "value is correct" );
        equal( m[7], 8, "value is correct" );
        equal( m[8], 9, "value is correct" );
        equal( m[9], 10, "value is correct" );
        equal( m[10], 11, "value is correct" );
        equal( m[11], 12, "value is correct" );
        equal( m[12], 13, "value is correct" );
        equal( m[13], 14, "value is correct" );
        equal( m[14], 15, "value is correct" );
        equal( m[15], 16, "value is correct" );

        src[0] = 20;
        src[1] = 21;
        src[2] = 22;
        src[3] = 23;
        src[4] = 24;
        src[5] = 25;
        src[6] = 26;
        src[7] = 27;
        src[8] = 28;
        src[9] = 29;
        src[10] = 30;
        src[11] = 31;
        src[12] = 32;
        src[13] = 33;
        src[14] = 34;
        src[15] = 35;

        equal( m[0], 1, "value is correct after changing src" );
        equal( m[1], 2, "value is correct after changing src" );
        equal( m[2], 3, "value is correct after changing src" );
        equal( m[3], 4, "value is correct after changing src" );
        equal( m[4], 5, "value is correct after changing src" );
        equal( m[5], 6, "value is correct after changing src" );
        equal( m[6], 7, "value is correct after changing src" );
        equal( m[7], 8, "value is correct after changing src" );
        equal( m[8], 9, "value is correct after changing src" );
        equal( m[9], 10, "value is correct after changing src" );
        equal( m[10], 11, "value is correct after changing src" );
        equal( m[11], 12, "value is correct after changing src" );
        equal( m[12], 13, "value is correct after changing src" );
        equal( m[13], 14, "value is correct after changing src" );
        equal( m[14], 15, "value is correct after changing src" );
        equal( m[15], 16, "value is correct after changing src" );
      });

    };
  }
);