define(
    [],
    function() {
      return function( _Math ) {

        module( 'Matrix4', {
          setup: function() {
            this.math = new _Math();
          },
          teardown: function() {
            this.math = null;
          }
        });

        test( 'create Matrix4, compare', function() {
          expect( 4 );
          var math = this.math;

          var matrix4 = new math.Matrix4( [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] ); //Identity matrix
          ok(
              matrix4,
              'construct a matrix4 instance'
          );
          ok(
              matrix4 instanceof math.ARRAY_TYPE,
              'matrix4 is an instance of ARRAY_TYPE'
          );
          deepEqual(
              new math.ARRAY_TYPE( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ] ),
              new math.Matrix4( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ] )
          );
          ok(
              16 === matrix4.length,
              'matrix4 has length 16'
          );
        });

        test( 'default', function() {
          expect( 1 );
          var math = this.math;

          deepEqual(
              new math.Matrix4(),
              new math.Matrix4( [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ),
              'default matrix4 is the zero matrix'
          );
        });

        test( 'constants', function() {
          expect( 3 );
          var math = this.math;

          deepEqual(
              new math.Matrix4( [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] ),
              math.matrix4.identity,
              'matrix is identity matrix'
          );
          deepEqual(
              new math.Matrix4( [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] ),
              math.matrix4.one,
              'matrix is one matrix'
          );
          deepEqual(
              new math.Matrix4( [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ),
              math.matrix4.zero,
              'matrix is zero matrix'
          );
        });

        test( 'clone', function() {
          expect( 1 );
          var math = this.math;

          var m1 = new math.Matrix4( [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] );
          deepEqual(
              new math.Matrix4( m1 ),
              m1,
              'clone of Matrix3 is the same'
          );
        });

        test( 'equality', function() {
          expect( 2 );
          var math = this.math;

          var m1 = new math.Matrix4( [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] );
          var m2 = new math.Matrix4( [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] );
          var m3 = new math.Matrix4( [2, 3, 3, 2, 2, 3, 3, 2, 1, 3, 3, 2, 1, 2, 1, 3] );

          ok(
              math.matrix4.equal( m1, m2 ),
              'two identical matricies are equal'
          );
          ok(
              !math.matrix4.equal( m1, m3 ),
              'two different matricies are not equal'
          );
        });

        test( 'add, subtract', function() {
          var math = new _Math();
          expect( 2 );

          var m1 = math.Matrix4( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ] );
          var m2 = math.Matrix4( [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 ] );
          var ml = [];

          ml.push(m1);
          ml.push(m2);

          ok(
              math.matrix4.equal( math.matrix4.add( ml ),
                  [ 3, 5, 7, 9,
                    11, 13, 15, 17,
                    19, 21, 23, 25,
                    27, 29, 31, 33] ),
                    'addition is correct when returned'
          );

          ok(
              math.matrix4.equal( math.matrix4.subtract( ml ),
                  [ -1, -1, -1, -1,
                    -1, -1, -1, -1,
                    -1, -1, -1, -1,
                    -1, -1, -1, -1] ),
                    'subtraction is correct when returned'
          );
        });

        test( 'multiplication', function() {
          expect( 1 );
          var math = this.math;

          var m1 = math.Matrix4( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ] );
          var m2 = math.Matrix4( [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 ] );
          var ml = [];

          ml.push(m1);
          ml.push(m2);

          ok(
              math.matrix4.equal( math.matrix4.multiply( ml ),
                  [ 100, 110, 120, 130,
                    228, 254, 280, 306,
                    356, 398, 440, 482,
                    484, 542, 600, 658 ] ),
                    'result is correct when returned'
          );
        });

        test( 'determinant', function() {
          expect( 1 );
          var math = this.math;

          var m1 = math.Matrix4( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ] );

          ok(
              math.matrix4.equal( math.matrix4.determinant( m1 ),
                  0 ),
                  'determinant is correct when returned'
          );
        });

        test( 'inverse', function() {
          var math = new _Math();
          expect( 1 );

          var m1 = math.Matrix4( [ 1, 0, 0, 1, 0, 2, 1, 0, 2, 0, 1, 1, 1, 1, 0, 1 ] );
          var test = math.matrix4.inverse( m1 );

          ok(
              math.matrix4.equal( test,
                  [ -3,-1,1,2,-1,0,0,1,2,1,0,-2,4,1,-1,-2 ] ),
                  'inverse is correct'
          );
        });

        test( 'transpose', function() {
          expect( 1 );
          var math = this.math;

          var m1 = math.Matrix4( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ] );
          var test = math.matrix4.transpose( m1 );

          ok(
              math.matrix4.equal( test,
                  [ 1, 5, 9, 13, 2, 6, 10, 14, 3, 7, 11, 15, 4, 8, 12, 16 ] ),
                  'transpose is correct'
          );
        });

        /* test vector3 transformation by matrix
    test( 'transform point', function() {
       var math = new _Math();
       expect( 0 );

       var v = math.Vector3( [1, 1, 1] );
       var m = math.Matrix4( [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1] );

       var r = math.matrix4.multiplyVector3( m, v );
    });
         */

      };
    }
);
