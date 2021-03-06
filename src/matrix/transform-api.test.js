define(
  [],
  function() {
    return function( _Math ) {

      module( "transform", {
        setup: function() {
          this.math = _Math;
        },
        teardown: function() {
          this.math = null;
        }
      });

      test( "rotation", function() {
        expect( 1 );

        var rotation = [this.math.TAU/2, this.math.TAU/3, this.math.TAU/4];
        var transform = this.math.transform.rotate( rotation );
        var expected = [0, -1/2, -Math.sqrt(3)/2, 0,
                        1, 0, 0, 0,
                        0, -Math.sqrt(3)/2, 1/2, 0,
                        0, 0, 0, 1];
        ok( this.math.matrix4.equal( transform, expected ), "transform is correct" );
      });

      test( "rotation, set result parameter", function() {
        expect( 1 );

        var rotation = [this.math.TAU/2, this.math.TAU/3, this.math.TAU/4];
        var transform = this.math.M4( this.math.matrix4.identity );
        this.math.transform.rotate( rotation, transform );
        var expected = [0, -1/2, -Math.sqrt(3)/2, 0,
                        1, 0, 0, 0,
                        0, -Math.sqrt(3)/2, 1/2, 0,
                        0, 0, 0, 1];
        ok( this.math.matrix4.equal( transform, expected ), "transform is correct" );
      });

      test( "translate", function() {
        expect( 1 );

        var position = [1, 2, 3];
        var transform = this.math.transform.translate( position );
        var expected = [1, 0, 0, 1, 0, 1, 0, 2, 0, 0, 1, 3, 0, 0, 0, 1];
        ok( this.math.matrix4.equal( transform, expected ), "transform is correct" );
      });

      test( "translate, set result parameter", function() {
        expect( 1 );

        var position = [1, 2, 3];
        var transform = this.math.M4( this.math.matrix4.identity );
        this.math.transform.translate( position, transform );
        var expected = [1, 0, 0, 1, 0, 1, 0, 2, 0, 0, 1, 3, 0, 0, 0, 1];
        ok( this.math.matrix4.equal( transform, expected ), "transform is correct" );
      });

      test( "scale", function() {
        expect( 1 );

        var scale = [1, 2, 3];
        var transform = this.math.transform.scale( scale );
        var expected = [1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1];
        ok( this.math.matrix4.equal( transform, expected ), "transform is correct" );
      });

      test( "scale, set result parameter", function() {
        expect( 1 );

        var scale = [1, 2, 3];
        var transform = this.math.M4( this.math.matrix4.identity );
        this.math.transform.scale( scale, transform );
        var expected = [1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1];
        ok( this.math.matrix4.equal( transform, expected ), "transform is correct" );
      });

      test( "fixed", function() {
        expect( 1 );

        var position = [1, 2, 3];
        var rotation = [this.math.TAU/2, this.math.TAU/3, this.math.TAU/4];
        var scale = [0.1, 0.2, 0.3];
        var transform = this.math.transform.fixed( position, rotation, scale );
        var expected = [-3.061515801837882e-18, -0.10000000149011612, -0.25980761647224426, -3.598076105117798, 0.10000000149011612, 8.964740287749623e-18, -1.8369095638207904e-17, 1, 6.94336233357624e-18, -0.17320507764816284, 0.15000000596046448, -0.2320508062839508, 0, 0, 0, 1];
        ok( this.math.matrix4.equal( transform, expected ), "transform is correct" );
      });

      test( "fixed, set result parameter", function() {
        expect( 1 );

        var position = [1, 2, 3];
        var rotation = [this.math.TAU/2, this.math.TAU/3, this.math.TAU/4];
        var scale = [0.1, 0.2, 0.3];
        var transform = this.math.M4( this.math.matrix4.identity );
        this.math.transform.fixed( position, rotation, scale, transform );
        var expected = [-3.061515801837882e-18, -0.10000000149011612, -0.25980761647224426, -3.598076105117798, 0.10000000149011612, 8.964740287749623e-18, -1.8369095638207904e-17, 1, 6.94336233357624e-18, -0.17320507764816284, 0.15000000596046448, -0.2320508062839508, 0, 0, 0, 1];
        ok( this.math.matrix4.equal( transform, expected ), "transform is correct" );
      });

    };
  }
);