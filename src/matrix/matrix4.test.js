define(
  [],
  function() {
    return function( _Math ) {

      module( "Matrix4", {
        setup: function() {
          this.math = _Math;
        },
        teardown: function() {
          this.math = null;
        }
      });

      test( "create an empty matrix", function() {
        expect( 16 );

        var m = new this.math.Matrix4();
        var i, j;

        for( i = 0; i < 4; ++ i ) {
          for( j = 0; j < 4; ++ j ) {
            equal( m[i][j], 0, "x is correct" );
          }
        }
      });

    };
  }
);