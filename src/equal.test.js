define(
    [
      "equal"
    ],
    function( equal ) {
      return function( _Math ) {

        module( "equal", {
          setup: function() {
            this.math = _Math;
          },
          teardown: function() {
            this.math = null;
          }
        });

        test( "equal, within tolerance", function() {
          expect( 1 );

          ok( equal( 1, 1.0000000000001 ), "values are equal" );
        });

        test( "equal, outside tolerance", function() {
          expect( 1 );

          ok( !equal( 1, 1.00001 ), "values are not equal" );
        });

      };
    }
);