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

        test( 'basic', function() {
          expect( 2 );

          var math = this.math;
          ok(
              math,
              'math found'
          );
          ok(
              math.ARRAY_TYPE,
              'found ARRAY_TYPE'
          );
        });

      };
    }
);