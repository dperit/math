define(
    [],
    function() {
      return function( _Math ) {

        module( "Math", {
          setup: function() {
            this.math = new _Math();
          },
          teardown: function() {
            this.math = null;
          }
        });

        test( 'instance', function() {
          expect( 3 );

          var math = this.math;
          ok( math, "math found" );
          ok( math.ARRAY_TYPE, "found ARRAY_TYPE" );
          equal( math.ARRAY_TYPE, math.FLOAT_ARRAY_ENUM.Float32,
            "default is float32" );
        });

      };
    }
);