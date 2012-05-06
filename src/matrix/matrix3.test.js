define(
    [],
    function() {
      return function( _Math ) {

        module( 'Matrix3', {
          setup: function() {
            this.math = new _Math();
          },
          teardown: function() {
            this.math = null;
          }
        });

        test( 'create Matrix3, compare', function() {
          expect( 5 );
          var math = this.math;

          var matrix3 = new math.Matrix3( [1, 0, 0, 0, 1, 0, 0, 0, 1] ); //Identity matrix
          ok(
              matrix3,
              'construct a matrix3 instance'
          );
          ok(
              matrix3 instanceof math.ARRAY_TYPE,
              'matrix3 is an instance of ARRAY_TYPE'
          );
          deepEqual(
              new math.ARRAY_TYPE( [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] ),
              new math.Matrix3( [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] )
          );
          ok(
              9 === matrix3.length,
              'matrix3 has length 9'
          );
          ok(
              matrix3[0] === 1 && matrix3[1] === 0 && matrix3[2] === 0
              && matrix3[3] === 0 && matrix3[4] === 1 && matrix3[5] === 0
              && matrix3[6] === 0 && matrix3[7] === 0 && matrix3[8] === 1,
              'matrix3 elements are [1, 0, 0, 0, 1, 0, 0, 0, 1]'
          );
        });

        test( 'default', function() {
          expect( 1 );
          var math = this.math;

          deepEqual(
              new math.Matrix3(),
              new math.Matrix3( [0, 0, 0, 0, 0, 0, 0, 0, 0] ),
              'default is correct'
          );
        });

        test( 'constants', function() {
          expect( 3 );
          var math = this.math;

          deepEqual(
              new math.Matrix3( [1, 0, 0, 0, 1, 0, 0, 0, 1] ),
              math.matrix3.identity,
              'matrix is identity matrix'
          );
          deepEqual(
              new math.Matrix3( [1, 1, 1, 1, 1, 1, 1, 1, 1] ),
              math.matrix3.one,
              'matrix is one matrix'
          );
          deepEqual(
              new math.Matrix3( [0, 0, 0, 0, 0, 0, 0, 0, 0] ),
              math.matrix3.zero,
              'matrix is zero matrix'
          );
        });

        test( 'Clone Matrix', function() {
          var math = new _Math();
          expect( 1 );

          var m1 = new math.Matrix3( [1, 0, 0, 0, 1, 0, 0, 0, 1] );
          deepEqual(
              new math.Matrix3( m1 ),
              m1,
              'Clone of Matrix3 is the same'
          );
        });

        test( 'equality', function() {
          expect( 2 );
          var math = this.math;

          var m1 = new math.Matrix3( [1, 1, 1, 1, 1, 1, 1, 1, 1]);
          var m2 = new math.Matrix3( [1, 1, 1, 1, 1, 1, 1, 1, 1] );
          var m3 = new math.Matrix3( [2, 3, 3, 2, 2, 3, 3, 2, 1] );

          ok(
              math.matrix3.equal( m1, m2 ),
              'two identical matricies are equal'
          );
          ok(
              !math.matrix3.equal( m1, m3 ),
              'two different matricies are not equal'
          );
        });

        test( 'add, subtract', function() {
          expect( 2 );
          var math = this.math;

          var m1 = math.Matrix3( [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] );
          var m2 = math.Matrix3( [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] );
          var ml = [];

          ml.push(m1);
          ml.push(m2);

          ok(
              math.matrix3.equal( math.matrix3.add( ml ),
                  [ 3, 5, 7,
                    9, 11, 13,
                    15, 17, 19 ] ),
                    'addition is correct when returned'
          );

          ok(
              math.matrix3.equal( math.matrix3.subtract( ml ),
                  [ -1, -1, -1,
                    -1, -1, -1,
                    -1, -1, -1] ),
                    'subtraction is correct when returned'
          );

        });

        test( 'multiplication', function() {
          expect( 1 );
          var math = this.math;

          var m1 = math.Matrix3( [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] );
          var m2 = math.Matrix3( [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] );
          var ml = [];

          ml.push(m1);
          ml.push(m2);

          ok(
              math.matrix3.equal( math.matrix3.multiply( ml ),
                  [ 36, 42, 48,
                    81, 96, 111,
                    126, 150, 174] ),
                    'result is correct when returned'
          );
        });

        test( 'determinant', function() {
          expect( 1 );
          var math = this.math;

          var m1 = math.Matrix3( [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] );

          ok(
              math.matrix3.equal( math.matrix3.determinant( m1 ),
                  0 ),
                  'determinant is correct when returned'
          );
        });

        test( 'inverse', function() {
          expect( 1 );
          var math = this.math;

          var m1 = math.Matrix3( [ 0, 0, 1, 0, 1, 0, 1, 0, 0 ] );
          var test = math.matrix3.inverse( m1 );

          ok(
              math.matrix3.equal( test,
                  [ 0,0,1,0,1,0,1,0,0 ] ),
                  'inverse is correct'
          );
        });

        test( 'transpose', function() {
          expect( 1 );
          var math = this.math;

          var m1 = math.Matrix3( [ 7, 2, 3, 1, 7, 4, 9, 8, 2 ] );
          var test = math.matrix3.transpose( m1 );

          ok(
              math.matrix3.equal( test,
                  [ 7, 1, 9, 2, 7, 8, 3, 4, 2 ] ),
                  'transpose is correct'
          );
        });

      };
    }
);
