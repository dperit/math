define(
  [],
  function() {
    return function( _Math ) {

      module( "Matrix3", {
        setup: function() {
          this.math = _Math;
        },
        teardown: function() {
          this.math = null;
        }
      });

      test( "create an empty matrix", function() {
        expect( 10 );

        var m = new this.math.Matrix3();
        var i, j;

        ok( m.modified, "modified is set" );
        for( i = 0; i < 3; ++ i ) {
          for( j = 0; j < 3; ++ j ) {
            equal( m[i][j], 0, "value is correct" );
          }
        }
      });

      test( "create a matrix with given values", function() {
        expect( 10 );

        var m = new this.math.Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );

        ok( m.modified, "modified is set" );
        var i, j;
        for( i = 0; i < 3; ++ i ) {
          for( j = 0; j < 3; ++ j ) {
            equal( m[j][i], 1 + i + 3*j, "value " + i + "," + j + " is correct" );
          }
        }
      });

      test( "create a matrix with given array", function() {
        expect( 10 );

        var m = new this.math.Matrix3( [1, 2, 3, 4, 5, 6, 7, 8, 9] );

        ok( m.modified, "modified is set" );
        var i, j;
        for( i = 0; i < 3; ++ i ) {
          for( j = 0; j < 3; ++ j ) {
            equal( m[j][i], 1 + i + 3*j, "value " + i + "," + j + " is correct" );
          }
        }
      });

      test( "add with matrix object", function() {
        expect( 3 );

        var m1 = new this.math.Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );
        var m2 = new this.math.Matrix3( 2, 3, 4, 5, 6, 7, 8, 9, 1 );
        m1.modified = false;
        var expected = this.math.matrix3.add( m1.buffer, m2.buffer );
        var result = m1.add( m2 );
        
        ok( m1.modified, "modified is set" );
        equal( result, m1, "add returns this" );
        deepEqual( m1.buffer, expected, "result is correct" );
      });

      test( "add with typed array", function() {
        expect( 3 );

        var m1 = new this.math.Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );
        var m2 = new this.math.M3( 2, 3, 4, 5, 6, 7, 8, 9, 1 );
        m1.modified = false;
        var expected = this.math.matrix3.add( m1.buffer, m2 );
        var result = m1.add( m2 );
        
        ok( m1.modified, "modified is set" );
        equal( result, m1, "add returns this" );
        deepEqual( m1.buffer, expected, "result is correct" );
      });

      test( "add with given array", function() {
        expect( 3 );

        var m1 = new this.math.Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );
        var m2 = [2, 3, 4, 5, 6, 7, 8, 9, 1];
        m1.modified = false;
        var expected = this.math.matrix3.add( m1.buffer, m2 );
        var result = m1.add( m2 );
        
        ok( m1.modified, "modified is set" );
        equal( result, m1, "add returns this" );
        deepEqual( m1.buffer, expected, "result is correct" );
      });

      test( "add with result", function() {
        expect( 3 );

        var m1 = new this.math.Matrix3( 5, 2, 3, 1, 5, 2, 1, 6, 2 );
        var m2 = new this.math.Matrix3( 5, 2, 1, 5, 2, 3, 1, 2, 3 );
        var expected = this.math.matrix3.add( m1.buffer, m2.buffer );
        var result = new this.math.Matrix3();
        result.modified = false;
        var returnValue = m1.add( m2, result );
        
        ok( result.modified, "modified is set" );
        equal( returnValue, m1, "add returns this" );
        deepEqual( result.buffer, expected, "result is correct" );
      });

      test( "clear", function() {
        expect( 10 );
        var m = new this.math.Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );
        m.modified = false;
        var result = m.clear();

        ok( m.modified, "modified is set" );
        for( var i = 0; i < 3; ++ i ) {
          for( var j = 0; j < 3; ++ j ) {
            equal( m[i][j], 0, "value is 0" );
          }
        }
      });

      test( "clone", function() {
        expect( 4 );

        var m1 = new this.math.Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );
        m1.modified = false;
        var m2 = m1.clone();
        ok( !m1.modified, "m1 is not modified" );
        ok( m2.modified, "m2 is modified" );

        ok( m1.equal( m2 ), "matrices are equal" );
        m1[0][0] = 100;
        ok( !m1.equal( m2 ), "matrices are not equal" );
      });

      test( "determinant", function() {
        expect( 2 );
        var m = new this.math.Matrix3( 1, 0, 0, 0, 1, 1, 0, 1, 0 );
        m.modified = false;
        var result = m.determinant();
        equal( m.modified, false, "modified is not set" );
        equal( result, this.math.matrix3.determinant( m.buffer ) );
      });

      test( "equal with matrix object", function() {
        expect( 2 );

        var m1 = new this.math.Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );
        var m2 = new this.math.Matrix3( 2, 3, 4, 5, 6, 7, 8, 9, 1 );
        ok( m1.equal( m1 ), "matrix is equal to itself" );
        ok( !m1.equal( m2 ), "matrix is not equal to different matrix" );
      });

      test( "equal with typed array", function() {
        expect( 2 );

        var m1 = new this.math.Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );
        var m2 = new this.math.Matrix3( 2, 3, 4, 5, 6, 7, 8, 9, 1 );
        ok( m1.equal( m1.buffer ), "matrix is equal to itself" );
        ok( !m1.equal( m2 ), "matrix is not equal to different matrix" );
      });

      test( "equal with given array", function() {
        expect( 2 );

        var m1 = new this.math.Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );
        var m2 = [2, 3, 4, 5, 6, 7, 8, 9, 1];
        ok( m1.equal( [1, 2, 3, 4, 5, 6, 7, 8, 9] ), "matrix is equal to itself" );
        ok( !m1.equal( m2 ), "matrix is not equal to different matrix" );
      });

      test( "inverse", function() {
        expect( 3 );
        var m = new this.math.Matrix3( 1, 0, 0, 0, 1, 1, 0, 1, 0 );
        m.modified = false;
        var expected = this.math.matrix3.inverse( m.buffer );
        var result = m.inverse();

        ok( m.modified, "modified is set" );
        equal( result, m, "result is set to this" );
        ok( this.math.matrix3.equal( result.buffer, expected ), "result is correct" );
      });

      test( "inverse with result", function() {
        expect( 4 );
        var m = new this.math.Matrix3( 1, 0, 0, 0, 1, 1, 0, 1, 0 );
        m.modified = false;
        var expected = this.math.matrix3.inverse( m.buffer );
        var result = new this.math.Matrix3();
        var returnValue = m.inverse( result );

        ok( !m.modified, "m is not modified" );
        ok( result.modified, "result is modified" );
        equal( returnValue, m, "result is set to this" );
        ok( this.math.matrix3.equal( result.buffer, expected ), "result is correct" );
      });

      test( "inverse, singular matrix", function() {
        expect( 2 );
        var m = new this.math.Matrix3( 1, 1, 1, 1, 1, 1, 1, 1, 1 );
        m.modified = false;
        raises( function() {
          m.inverse();
        }, function( error ) {
          ok( !m.modified, "matrix is not modified" );
          return error instanceof Error;
        }, "exception thrown for singular matrix");
      });

      test( "multiply with matrix object", function() {
        expect( 3 );

        var m1 = new this.math.Matrix3( 2, 4, 1, 2, 3, 1, 5, 2, 1 );
        var m2 = new this.math.Matrix3( 3, 5, 1, 6, 7, 3, 6, 3, 1 );
        m1.modified = false;
        var expected = this.math.matrix3.multiply( m1.buffer, m2.buffer );
        var result = m1.multiply( m2 );
        
        ok( m1.modified, "modified is set" );
        equal( result, m1, "multiply returns this" );
        deepEqual( m1.buffer, expected, "result is correct" );
      });

      test( "multiply with typed array", function() {
        expect( 3 );

        var m1 = new this.math.Matrix3( 2, 4, 1, 2, 3, 5, 6, 1, 2, 1 );
        var m2 = new this.math.M3( 8, 3, 5, 6, 1, 2, 1, 5, 2 );
        m1.modified = false;
        var expected = this.math.matrix3.multiply( m1.buffer, m2 );
        var result = m1.multiply( m2 );
        
        ok( m1.modified, "modified is set" );
        equal( result, m1, "multiply returns this" );
        deepEqual( m1.buffer, expected, "result is correct" );
      });

      test( "multiply with given array", function() {
        expect( 3 );

        var m1 = new this.math.Matrix3( 2, 6, 3, 2, 3, 6, 8, 1, 2 );
        var m2 = [8, 4, 2, 3, 2, 5, 6, 1, 2];
        m1.modified = false;
        var expected = this.math.matrix3.multiply( m1.buffer, m2 );
        var result = m1.multiply( m2 );
        
        ok( m1.modified, "modified is set" );
        equal( result, m1, "multiply returns this" );
        deepEqual( m1.buffer, expected, "result is correct" );
      });

      test( "multiply with result", function() {
        expect( 3 );

        var m1 = new this.math.Matrix3( 2, 4, 1, 2, 3, 1, 5, 2, 1 );
        var m2 = new this.math.Matrix3( 3, 5, 1, 6, 7, 3, 6, 3, 1 );
        var expected = this.math.matrix3.multiply( m1.buffer, m2.buffer );
        var result = new this.math.Matrix3();
        result.modified = false;
        var returnValue = m1.multiply( m2, result );
        
        ok( result.modified, "modified is set" );
        equal( returnValue, m1, "multiply returns this" );
        deepEqual( result.buffer, expected, "result is correct" );
      });

      test( "set with matrix object", function() {
        expect( 4 );

        var m1 = new this.math.Matrix3( 2, 4, 1, 2, 3, 1, 5, 2, 1 );
        var m2 = new this.math.Matrix3( 3, 5, 1, 6, 7, 3, 6, 3, 1 );
        m1.modified = m2.modified = false;
        var returnValue = m1.set( m2 );

        ok( m1.modified, "matrix is modified" );
        ok( !m2.modified, "matrix is not modified" );
        ok( this.math.matrix3.equal( m1.buffer, m2.buffer ), "matrix is set properly" );
        ok( returnValue, m1, "set returns this" );
      });

      test( "set with typed array", function() {
        expect( 3 );

        var m1 = new this.math.Matrix3( 2, 4, 1, 2, 3, 5, 6, 1, 2, 1 );
        var m2 = new this.math.M3( 8, 3, 5, 6, 1, 2, 1, 5, 2 );
        m1.modified = false;
        var returnValue = m1.set( m2 );

        ok( m1.modified, "matrix is modified" );
        ok( this.math.matrix3.equal( m1.buffer, m2 ), "matrix is set properly" );
        ok( returnValue, m1, "set returns this" );
      });

      test( "set with given array", function() {
        expect( 3 );

        var m1 = new this.math.Matrix3( 2, 6, 3, 2, 3, 6, 8, 1, 2 );
        var m2 = [8, 4, 2, 3, 2, 5, 6, 1, 2];
        m1.modified = false;
        var returnValue = m1.set( m2 );

        ok( m1.modified, "matrix is modified" );
        ok( this.math.matrix3.equal( m1.buffer, m2 ), "matrix is set properly" );
        ok( returnValue, m1, "set returns this" );
      });

      test( "subtract with matrix object", function() {
        expect( 3 );

        var m1 = new this.math.Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );
        var m2 = new this.math.Matrix3( 2, 3, 4, 5, 6, 7, 8, 9, 1 );
        m1.modified = false;
        var expected = this.math.matrix3.subtract( m1.buffer, m2.buffer );
        var result = m1.subtract( m2 );
        
        ok( m1.modified, "modified is set" );
        equal( result, m1, "subtract returns this" );
        deepEqual( m1.buffer, expected, "result is correct" );
      });

      test( "subtract with typed array", function() {
        expect( 3 );

        var m1 = new this.math.Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );
        var m2 = new this.math.M3( 2, 3, 4, 5, 6, 7, 8, 9, 1 );
        m1.modified = false;
        var expected = this.math.matrix3.subtract( m1.buffer, m2 );
        var result = m1.subtract( m2 );
        
        ok( m1.modified, "modified is set" );
        equal( result, m1, "subtract returns this" );
        deepEqual( m1.buffer, expected, "result is correct" );
      });

      test( "subtract with given array", function() {
        expect( 3 );

        var m1 = new this.math.Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );
        var m2 = [2, 3, 4, 5, 6, 7, 8, 9, 1];
        m1.modified = false;
        var expected = this.math.matrix3.subtract( m1.buffer, m2 );
        var result = m1.subtract( m2 );
        
        ok( m1.modified, "modified is set" );
        equal( result, m1, "subtract returns this" );
        deepEqual( m1.buffer, expected, "result is correct" );
      });

      test( "subtract with result", function() {
        expect( 3 );

        var m1 = new this.math.Matrix3( 5, 2, 3, 1, 5, 2, 1, 6, 2 );
        var m2 = new this.math.Matrix3( 5, 2, 1, 5, 2, 3, 1, 2, 3 );
        var expected = this.math.matrix3.subtract( m1.buffer, m2.buffer );
        var result = new this.math.Matrix3();
        result.modified = false;
        var returnValue = m1.subtract( m2, result );
        
        ok( result.modified, "modified is set" );
        equal( returnValue, m1, "subtract returns this" );
        deepEqual( result.buffer, expected, "result is correct" );
      });

      test( "transpose", function() {
        expect( 3 );
        var m = new this.math.Matrix3( 3, 2, 5, 1, 2, 1, 5, 7, 4 );
        m.modified = false;
        var expected = this.math.matrix3.transpose( m.buffer );
        var result = m.transpose();

        ok( m.modified, "modified is set" );
        equal( result, m, "result is set to this" );
        ok( this.math.matrix3.equal( result.buffer, expected ), "result is correct" );
      });

      test( "transpose with result", function() {
        expect( 4 );
        var m = new this.math.Matrix3( 7, 3, 2, 1, 5, 2, 3, 4, 1 );
        m.modified = false;
        var expected = this.math.matrix3.transpose( m.buffer );
        var result = new this.math.Matrix3();
        var returnValue = m.transpose( result );

        ok( !m.modified, "m is not modified" );
        ok( result.modified, "result is modified" );
        equal( returnValue, m, "result is set to this" );
        ok( this.math.matrix3.equal( result.buffer, expected ), "result is correct" );
      });

    };
  }
);