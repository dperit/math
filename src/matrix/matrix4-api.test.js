define(
  [],
  function() {
    return function( _Math ) {

      module( "matrix4", {
        setup: function() {
          this.math = _Math;
        },
        teardown: function() {
          this.math = null;
        }
      });

      test( "add, return new result", function() {
        expect( 16 );

        var m1 = new this.math.M4( 1, 2, 3, 4,
                                   5, 6, 7, 8,
                                   9, 1, 2, 3,
                                   4, 5, 6, 7 );
        var m2 = new this.math.M4( 4, 5, 6, 7,
                                   8, 9, 1, 2,
                                   3, 4, 5, 6,
                                   7, 8, 9, 1 );

        var result = this.math.matrix4.add( m1, m2 );

        for( var i = 0; i < 16; ++ i ) {
          equal( result[i], m1[i] + m2[i], "value is correct" );
        }
      });

      test( "add, set result parameter", function() {
        expect( 16 );

        var m1 = new this.math.M4( 1, 2, 3, 4,
                                   5, 6, 7, 8,
                                   9, 1, 2, 3,
                                   4, 5, 6, 7 );
        var m2 = new this.math.M4( 4, 5, 6, 7,
                                   8, 9, 1, 2,
                                   3, 4, 5, 6,
                                   7, 8, 9, 1 );

        var result = new this.math.M4();

        this.math.matrix4.add( m1, m2, result );

        for( var i = 0; i < 16; ++ i ) {
          equal( result[i], m1[i] + m2[i], "value is correct" );
        }
      });

      test( "clear", function() {
        expect( 16 );

        var m = new this.math.M4( 1, 2, 3, 4,
                                  5, 6, 7, 8,
                                  9, 1, 2, 3,
                                  4, 5, 6, 7 );

        this.math.matrix4.clear( m );

        for( var i = 0; i < 16; ++ i ) {
          equal( m[i], 0, "value is 0" );
        }
      });

      test( "determinant", function() {
        expect( 2 );

        var m1 = new this.math.M4( 1, 2, 3, 4,
                                   5, 6, 7, 8,
                                   9, 1, 2, 3,
                                   4, 5, 6, 7 );

        equal( this.math.matrix4.determinant( m1 ), 0, "determinant is correct" );

        var m2 = new this.math.M4( 1, 0, 0, 0,
                                   0, 1, 0, 0,
                                   0, 0, 1, 0,
                                   0, 0, 0, 1 );

        equal( this.math.matrix4.determinant( m2 ), 1, "determinant is correct" );
      });

      test( "equal", function() {
        expect( 2 );

        var m1 = new this.math.M4( 1, 2, 3, 4,
                                   5, 6, 7, 8,
                                   9, 1, 2, 3,
                                   4, 5, 6, 7 );
        var m2 = new this.math.M4( 4, 5, 6, 7,
                                   8, 9, 1, 2,
                                   3, 4, 5, 6,
                                   7, 8, 9, 1 );

        ok( this.math.matrix4.equal( m1, m1 ), "identical matrices are equal" );
        ok( !this.math.matrix4.equal( m1, m2 ), "different matrices are not equal" );
      });

      test( "equal, within tolerance", function() {
        expect( 16 );

        var zero = new this.math.M4( 0, 0, 0, 0,
                                     0, 0, 0, 0,
                                     0, 0, 0, 0,
                                     0, 0, 0, 0 );
        var m;
        for( var i = 0; i < 16; ++ i ) {
          m = new this.math.M4( 0, 0, 0, 0,
                                0, 0, 0, 0,
                                0, 0, 0, 0,
                                0, 0, 0, 0 );
          m[i] = 0.00000000001;
          ok( this.math.matrix4.equal( m, zero ), "matrices are equal within tolerance" );
        }
      });

      test( "equal, exceed tolerance", function() {
        expect( 16 );

        var zero = new this.math.M4( 0, 0, 0, 0,
                                     0, 0, 0, 0,
                                     0, 0, 0, 0,
                                     0, 0, 0, 0 );
        var m;
        for( var i = 0; i < 16; ++ i ) {
          m = new this.math.M4( 0, 0, 0, 0,
                                0, 0, 0, 0,
                                0, 0, 0, 0,
                                0, 0, 0, 0 );
          m[i] = 0.000011;
          ok( !this.math.matrix4.equal( m, zero ), "matrices outside tolerance are not equal" );
        }
      });

      test( "inverse, return new result", function() {
        expect( 32 );

        var result;
        var i;

        var m1 = new this.math.M4( 1, 0, 0, 0,
                                   0, 1, 0, 0,
                                   0, 0, 0, 1,
                                   0, 0, 1, 0 );

        result = this.math.matrix4.inverse( m1 );
        
        for( i = 0; i < 16; ++ i ) {
          equal( result[i], m1[i], "value is correct" );
        }

        var m2 = new this.math.M4( 1, 0, 0, 0,
                                   0, 1, 0, 0,
                                   0, 0, 1, 0,
                                   0, 0, 0, 1 );

        result = this.math.matrix4.inverse( m2 );
        
        for( i = 0; i < 16; ++ i ) {
          equal( result[i], m2[i], "value is correct" );
        }
      });

      test( "inverse, set result parameter", function() {
        expect( 32 );

        var result = new this.math.M4();
        var i;

        var m1 = new this.math.M4( 1, 0, 0, 0,
                                   0, 1, 0, 0,
                                   0, 0, 0, 1,
                                   0, 0, 1, 0 );

        this.math.matrix4.inverse( m1, result );
        
        for( i = 0; i < 16; ++ i ) {
          equal( result[i], m1[i], "value is correct" );
        }

        var m2 = new this.math.M4( 1, 0, 0, 0,
                                   0, 1, 0, 0,
                                   0, 0, 1, 0,
                                   0, 0, 0, 1 );

        result = new this.math.M4();
        this.math.matrix4.inverse( m2, result );
        
        for( i = 0; i < 16; ++ i ) {
          equal( result[i], m2[i], "value is correct" );
        }
      });

      test( "multiply, return new result", function() {
        expect( 16 );

        var m1 = new this.math.M4( 1, 2, 3, 4,
                                   5, 6, 7, 8,
                                   9, 1, 2, 3,
                                   4, 5, 6, 7 );
        var m2 = new this.math.M4( 4, 5, 6, 7,
                                   8, 9, 1, 2,
                                   3, 4, 5, 6,
                                   7, 8, 9, 1 );

        var result = this.math.matrix4.multiply( m1, m2 );
        var expected = [57, 67, 59, 33, 145, 171, 143, 97, 71, 86, 92, 80, 123, 145, 122, 81];

        for( var i = 0; i < 16; ++ i ) {
          equal( result[i], expected[i], "value is correct" );
        }
      });

      test( "multiply, set result parameter", function() {
        expect( 16 );

        var m1 = new this.math.M4( 1, 2, 3, 4,
                                   5, 6, 7, 8,
                                   9, 1, 2, 3,
                                   4, 5, 6, 7 );
        var m2 = new this.math.M4( 4, 5, 6, 7,
                                   8, 9, 1, 2,
                                   3, 4, 5, 6,
                                   7, 8, 9, 1 );

        var result = new this.math.M4();
        this.math.matrix4.multiply( m1, m2, result );
        var expected = [57, 67, 59, 33, 145, 171, 143, 97, 71, 86, 92, 80, 123, 145, 122, 81];

        for( var i = 0; i < 16; ++ i ) {
          equal( result[i], expected[i], "value is correct" );
        }
      });

      test( "set with given values", function() {
        expect( 16 );

        var m = new this.math.M4( 1, 2, 3, 4,
                                  5, 6, 7, 8,
                                  9, 1, 2, 3,
                                  4, 5, 6, 7 );

        this.math.matrix4.set( m, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8 );
        var expected = [2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8];

        for( var i = 0; i < 16; ++ i ) {
          equal( m[i], expected[i], "value is correct" );
        }
      });

      test( "set with given array", function() {
        expect( 16 );

        var m = new this.math.M4( 1, 2, 3, 4,
                                  5, 6, 7, 8,
                                  9, 1, 2, 3,
                                  4, 5, 6, 7 );

        this.math.matrix4.set( m, [2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8] );
        var expected = [2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8];

        for( var i = 0; i < 16; ++ i ) {
          equal( m[i], expected[i], "value is correct" );
        }
      });

      test( "subtract, return new result", function() {
        expect( 16 );

        var m1 = new this.math.M4( 1, 2, 3, 4,
                                   5, 6, 7, 8,
                                   9, 1, 2, 3,
                                   4, 5, 6, 7 );
        var m2 = new this.math.M4( 4, 5, 6, 7,
                                   8, 9, 1, 2,
                                   3, 4, 5, 6,
                                   7, 8, 9, 1 );

        var result = this.math.matrix4.subtract( m1, m2 );

        for( var i = 0; i < 16; ++ i ) {
          equal( result[i], m1[i] - m2[i], "value is correct" );
        }
      });

      test( "subtract, set result parameter", function() {
        expect( 16 );

        var m1 = new this.math.M4( 1, 2, 3, 4,
                                   5, 6, 7, 8,
                                   9, 1, 2, 3,
                                   4, 5, 6, 7 );
        var m2 = new this.math.M4( 4, 5, 6, 7,
                                   8, 9, 1, 2,
                                   3, 4, 5, 6,
                                   7, 8, 9, 1 );

        var result = new this.math.M4();

        this.math.matrix4.subtract( m1, m2, result );

        for( var i = 0; i < 16; ++ i ) {
          equal( result[i], m1[i] - m2[i], "value is correct" );
        }
      });

      test( "transpose, return new result", function() {
        expect( 32 );

        var result;
        var i;

        var m1 = new this.math.M4( 1, 2, 3, 4,
                                   5, 6, 7, 8,
                                   9, 1, 2, 3,
                                   4, 5, 6, 7 );

        result = this.math.matrix4.transpose( m1 );
        var expected = [1, 5, 9, 4, 2, 6, 1, 5, 3, 7, 2, 6, 4, 8, 3, 7];       
        
        for( i = 0; i < 16; ++ i ) {
          equal( result[i], expected[i], "value is correct" );
        }

        var m2 = new this.math.M4( 1, 0, 0, 0,
                                   0, 1, 0, 0,
                                   0, 0, 1, 0,
                                   0, 0, 0, 1 );

        result = this.math.matrix4.inverse( m2 );
        
        for( i = 0; i < 16; ++ i ) {
          equal( result[i], m2[i], "value is correct" );
        }
      });

      test( "transpose, set result parameter", function() {
        expect( 32 );

        var result = new this.math.M4();
        var i;

        var m1 = new this.math.M4( 1, 2, 3, 4,
                                   5, 6, 7, 8,
                                   9, 1, 2, 3,
                                   4, 5, 6, 7 );

        this.math.matrix4.transpose( m1, result );
        var expected = [1, 5, 9, 4, 2, 6, 1, 5, 3, 7, 2, 6, 4, 8, 3, 7];       
        
        for( i = 0; i < 16; ++ i ) {
          equal( result[i], expected[i], "value is correct" );
        }

        result = new this.math.M4();
        var m2 = new this.math.M4( 1, 0, 0, 0,
                                   0, 1, 0, 0,
                                   0, 0, 1, 0,
                                   0, 0, 0, 1 );

        this.math.matrix4.inverse( m2, result );
        
        for( i = 0; i < 16; ++ i ) {
          equal( result[i], m2[i], "value is correct" );
        }
      });

      test( "zero matrix", function() {
        expect( 16 );

        var m = this.math.matrix4.zero;

        for( var i = 0; i < 16; ++ i ) {
          equal( m[i], 0, "value is correct" );
        }
      });

      test( "one matrix", function() {
        expect( 16 );

        var m = this.math.matrix4.one;

        for( var i = 0; i < 16; ++ i ) {
          equal( m[i], 1, "value is correct" );
        }
      });

      test( "identity matrix", function() {
        expect( 16 );

        var m = this.math.matrix4.identity;
        var expected = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

        for( var i = 0; i < 16; ++ i ) {
          equal( m[i], expected[i], "value is correct" );
        }
      });

    };
  }
);