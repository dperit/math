define(
  [],
  function() {
    return function( _Math ) {

      module( "V2", {
        setup: function() {
          this.math = _Math;
        },
        teardown: function() {
          this.math = null;
        }
      });

      test( "create an empty vector", function() {
        expect( 2 );

        var v = new this.math.V2();

        equal( v[0], 0, "default x is 0" );
        equal( v[1], 0, "default y is 0" );
      });

      test( "create a vector with given values", function() {
        expect( 2 );

        var v = new this.math.V2( 1, 2 );

        equal( v[0], 1, "x is correct" );
        equal( v[1], 2, "y is correct" );
      });

      test( "create a vector with given array", function() {
        expect( 2 );

        var v = new this.math.V2( [3, 4] );

        equal( v[0], 3, "x is correct" );
        equal( v[1], 4, "y is correct" );
      });

      test( "create a vector given another vector", function() {
        expect( 4 );

        var src = new this.math.V2( 2, 4 );
        var v = new this.math.V2( src );

        equal( v[0], 2, "x is correct" );
        equal( v[1], 4, "y is correct" );

        src[0] = 1;
        src[1] = 3;

        equal( v[0], 2, "x is correct after changing src" );
        equal( v[1], 4, "y is correct after changing src" );
      });

    };
  }
);