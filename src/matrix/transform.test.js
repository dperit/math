define(
    [],
    function() {
      return function( _Math ) {

        module( 'Transform', {
          setup: function() {
            this.math = new _Math();
          },
          teardown: function() {
            this.math = null;
          }
        });

        test( 'translation', function() {
          expect( 1 );
          var math = this.math;

          var position = math.Vector3( 1, 2, 3 );
          var result = math.transform.translate( position );

          ok(
              math.matrix4.equal( result,
                  [ 1, 0, 0, 0,
                    0, 1, 0, 0,
                    0, 0, 1, 0,
                    1, 2, 3, 1 ] ),
                    'translation matrix is correct'
          );
        });

        test( 'rotation', function() {
          expect( 1 );
          var math = this.math;

          var rotation = math.Vector3( math.TAU/2, math.TAU/3, math.TAU/4 );
          var result = math.transform.rotate( rotation );
          var expected = [ 0, -1/2, -Math.sqrt(3)/2, 0,
                           1, 0, 0, 0,
                           0, -Math.sqrt(3)/2, 1/2, 0,
                           0, 0, 0, 1 ];

          ok(
              math.matrix4.equal( result, expected ),
              'rotation is correct'
          );
        });

        test( 'scale', function() {
          expect( 1 );
          var math = this.math;

          var scale = math.Vector3( 2, 2, 2 );
          var result = math.transform.scale( scale );

          ok(
              math.matrix4.equal( result,
                  [ 2, 0, 0, 0,
                    0, 2, 0, 0,
                    0, 0, 2, 0,
                    0, 0, 0, 1 ] ),
                    'scale matrix is correct'
          );
        });

        test( 'fixed', function() {
          expect( 3 );
          var math = this.math;

          var result;

          var position = math.Vector3( 1, 2, 3 );
          result = math.transform.fixed( position, null, null );

          ok(
              math.matrix4.equal( result,
                  [ 1, 0, 0, 0,
                    0, 1, 0, 0,
                    0, 0, 1, 0,
                    1, 2, 3, 1 ] ),
                    'position is correct'
          );

          var rotation = math.Vector3( math.TAU/2, math.TAU/3, math.TAU/4 );
          result = math.transform.fixed( null, rotation, null );
          var expected = [ 0, -1/2, -Math.sqrt(3)/2, 0,
                           1, 0, 0, 0,
                           0, -Math.sqrt(3)/2, 1/2, 0,
                           0, 0, 0, 1 ];

          ok(
              math.matrix4.equal( result, expected ),
              'fixed transform is correct'

          );

          var scale = math.Vector3( 2, 2, 2 );
          result = math.transform.fixed( null, null, scale );

          ok(
              math.matrix4.equal( result,
                  [ 2, 0, 0, 0,
                    0, 2, 0, 0,
                    0, 0, 2, 0,
                    0, 0, 0, 1 ] ),
                    'scale matrix is correct'
          );

          /*
        position = math.Vector3( [ 1, 2, 3 ] );
        rotation = math.Vector3( [ 1, 2, 3 ] );
        scale = math.Vector3( [ 1, 2, 3 ] );

        expected = Float32Array([1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, 1, 2, 3, 1]);
        result = math.transform.fixed( position, rotation, scale );

        ok(
          math.matrix4.equal( result, expected ), "Fixed function is correct"
        );
           */
        });

      };
    }
);
