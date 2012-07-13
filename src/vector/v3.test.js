define(
  [],
  function() {
    return function( _Math ) {

      module( "V3", {
        setup: function() {
          this.math = _Math;
        },
        teardown: function() {
          this.math = null;
        }
      });

      test( "create an empty vector", function() {
        expect( 3 );

        var v = new this.math.V3();

        equal( v[0], 0, "default x is 0" );
        equal( v[1], 0, "default y is 0" );
        equal( v[2], 0, "default z is 0" );
      });

      test( "create a vector with given values", function() {
        expect( 3 );

        var v = new this.math.V3( 1, 2, 3 );

        equal( v[0], 1, "x is correct" );
        equal( v[1], 2, "y is correct" );
        equal( v[2], 3, "z is correct" );
      });

      test( "create a vector with given array", function() {
        expect( 3 );

        var v = new this.math.V3( [3, 4, 5] );

        equal( v[0], 3, "x is correct" );
        equal( v[1], 4, "y is correct" );
        equal( v[2], 5, "z is correct" );
      });

      test( "create a vector given another vector", function() {
        expect( 6 );

        var src = new this.math.V3( 2, 4, 6 );
        var v = new this.math.V3( src );

        equal( v[0], 2, "x is correct" );
        equal( v[1], 4, "y is correct" );
        equal( v[2], 6, "y is correct" );

        src[0] = 1;
        src[1] = 3;
        src[2] = 5;

        equal( v[0], 2, "x is correct after changing src" );
        equal( v[1], 4, "y is correct after changing src" );
        equal( v[2], 6, "y is correct after changing src" );
      });

      test( "create a vector with smaller vector", function() {
        expect( 4 );

        var v1 = new this.math.V2( 2, 3 );
        var v2 = new this.math.V3( v1, 4, 5 );

        equal( v2[0], 2, "x is correct" );
        equal( v2[1], 3, "y is correct" );
        equal( v2[2], 4, "z is correct" );
        equal( v2.length, 3, "length is corrct" );
      });

      test( "create a vector, pass extra parameters", function() {
        expect( 4 );

        var v = new this.math.V3( 2, 3, 4, 5, 6 );

        equal( v[0], 2, "x is correct" );
        equal( v[1], 3, "y is correct" );
        equal( v[2], 4, "z is correct" );
        equal( v.length, 3, "length is correct" );
      });

    };
  }
);