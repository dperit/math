define(
    [],
    function() {
      return function( _Math ) {

        module( 'Matrix2', {
          setup: function() {
            this.math = new _Math();
          },
          teardown: function() {
            this.math = null;
          }
        });

        test( 'create Matrix2, compare', function() {
          expect( 5 );
          var math = this.math;

          var matrix2 = new math.Matrix2( [1, 0, 0, 1] ); //Identity matrix
          ok(
              matrix2,
              'construct a matrix2 instance'
          );
          ok(
              matrix2 instanceof math.ARRAY_TYPE,
              'matrix2 is an instance of ARRAY_TYPE'
          );
          deepEqual(
              new math.ARRAY_TYPE( [1, 2, 2, 1] ),
              new math.Matrix2( [1, 2, 2, 1] )
          );
          ok(
              4 === matrix2.length,
              'matrix2 has length 4'
          );
          ok(
              matrix2[0] === 1 && matrix2[1] === 0 && matrix2[2] === 0 && matrix2[3] === 1,
              'matrix2 elements are [1, 0, 0, 1]'
          );
        });

        test( 'default Matrix', function() {
          expect( 1 );
          var math = this.math;

          deepEqual(
              new math.Matrix2(),
              new math.Matrix2( [0, 0, 0, 0] ),
              'default matrix2 is the zero matrix [0, 0, 0, 0]'
          );
        });

        test( 'constants', function() {
          expect( 3 );
          var math = this.math;

          deepEqual(
              new math.Matrix2( [1, 0, 0, 1] ),
              math.matrix2.identity,
              'matrix is identity matrix'
          );
          deepEqual(
              new math.Matrix2( [1, 1, 1, 1] ),
              math.matrix2.one,
              'matrix is one matrix'
          );
          deepEqual(
              new math.Matrix2( [0, 0, 0, 0] ),
              math.matrix2.zero,
              'matrix is zero matrix'
          );
        });

        test( 'clone', function() {
          expect( 1 );
          var math = this.math;

          var m1 = new math.Matrix2( [1, 0, 0, 1] );
          deepEqual(
              new math.Matrix2( m1 ),
              m1,
              'clone of Matrix2 is the same'
          );
        });

        test( 'equality', function() {
          expect( 2 );
          var math = this.math;

          var m1 = new math.Matrix2( [1, 1, 1, 1] );
          var m2 = new math.Matrix2( [1, 1, 1, 1] );
          var m3 = new math.Matrix2( [2, 3, 3, 2] );

          ok(
              math.matrix2.equal( m1, m2 ),
              'two identical matricies are equal'
          );
          ok(
              !math.matrix2.equal( m1, m3 ),
              'two different matricies are not equal'
          );
        });

        test( 'add, subtract', function() {
          expect( 2 );
          var math = this.math;

          var m1 = math.Matrix2( [ 1, 2, 3, 4 ] );
          var m2 = math.Matrix2( [ 2, 3, 4, 5 ] );
          var ml = [];

          ml.push(m1);
          ml.push(m2);

          ok(
              math.matrix2.equal( math.matrix2.add( ml ),
                  [ 3, 5,
                    7, 9] ),
                    'addition is correct when returned'
          );

          ok(
              math.matrix2.equal( math.matrix2.subtract( ml ),
                  [ -1, -1,
                    -1, -1] ),
                    'subtraction is correct when returned'
          );
        });

        test( 'multiplication', function() {
          expect( 1 );
          var math = this.math;

          var m1 = math.Matrix2( [ 1, 2, 3, 4 ] );
          var m2 = math.Matrix2( [ 2, 3, 4, 5 ] );
          var ml = [];

          ml.push(m1);
          ml.push(m2);

          ok(
              math.matrix2.equal( math.matrix2.multiply( ml ),
                  [ 10, 13,
                    22, 29] ),
                    'result is correct when returned'
          );
        });

        test( 'determinant', function() {
          expect( 1 );
          var math = this.math;

          var m1 = math.Matrix2( [ 1, 2, 3, 4 ] );

          ok(
              math.matrix2.equal( math.matrix2.determinant( m1 ),
                  -2 ),
                  'determinant is correct when returned'
          );
        });

        test( 'inverse', function() {
          expect( 1 );
          var math = this.math;

          var m1 = math.Matrix2( [ 1, 2, 3, 4 ] );
          var test = math.matrix2.inverse( m1 );

          ok(
              math.matrix2.equal( test,
                  [ -2, 1, 1.5, -0.5 ] ),
                  'inverse is correct'
          );
        });

        test( 'transpose', function() {
          expect( 1 );
          var math = this.math;

          var m1 = math.Matrix2( [ 7, 2, 1, 4 ] );
          var test = math.matrix2.transpose( m1 );

          ok(
              math.matrix2.equal( test,
                  [ 7, 1, 2, 4 ] ),
                  'transpose is correct'
          );
        });
        
      };
    }
);
