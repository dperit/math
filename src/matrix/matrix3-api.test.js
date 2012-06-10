define(
  [],
  function() {
    return function( _Math ) {

      module( "matrix3", {
        setup: function() {
          this.math = _Math;
        },
        teardown: function() {
          this.math = null;
        }
      });

      test( "add, return new result", function() {
        expect( 9 );

        var m1 = new this.math.M3( 1, 2, 3,
                                   5, 6, 7,
                                   9, 1, 2 );
        var m2 = new this.math.M3( 4, 5, 6,
                                   8, 9, 1,
                                   3, 4, 5 );

        var result = this.math.matrix3.add( m1, m2 );

        for( var i = 0; i < 9; ++ i ) {
          equal( result[i], m1[i] + m2[i], "value is correct" );
        }
      });

      test( "add, set result parameter", function() {
        expect( 9 );

        var m1 = new this.math.M3( 1, 2, 3,
                                   5, 6, 7,
                                   9, 1, 2 );
        var m2 = new this.math.M3( 4, 5, 6,
                                   8, 9, 1,
                                   3, 4, 5 );

        var result = new this.math.M3();

        this.math.matrix3.add( m1, m2, result );

        for( var i = 0; i < 9; ++ i ) {
          equal( result[i], m1[i] + m2[i], "value is correct" );
        }
      });

      test( "clear", function() {
        expect( 9 );

        var m = new this.math.M3( 1, 2, 3,
                                   5, 6, 7,
                                   9, 1, 2 );

        this.math.matrix3.clear( m );

        for( var i = 0; i < 9; ++ i ) {
          equal( m[i], 0, "value is 0" );
        }
      });

      test( "determinant", function() {
        expect( 2 );

        var m1 = new this.math.M3( 1, 2, 3,
                                   5, 6, 7,
                                   9, 1, 2 );

        equal( this.math.matrix3.determinant( m1 ), -36, "determinant is correct" );

        var m2 = new this.math.M3( 1, 0, 0,
                                   0, 1, 0,
                                   0, 0, 1 );

        equal( this.math.matrix3.determinant( m2 ), 1, "determinant is correct" );
      });

      test( "equal", function() {
        expect( 2 );

        var m1 = new this.math.M3( 1, 2, 3,
                                   5, 6, 7,
                                   9, 1, 2 );
        var m2 = new this.math.M3( 4, 5, 6,
                                   8, 9, 1,
                                   3, 4, 5 );

        ok( this.math.matrix3.equal( m1, m1 ), "identical matrices are equal" );
        ok( !this.math.matrix3.equal( m1, m2 ), "different matrices are not equal" );
      });

      test( "equal, within tolerance", function() {
        expect( 9 );

        var zero = new this.math.M3( 0, 0, 0,
                                     0, 0, 0,
                                     0, 0, 0 );
        var m;
        for( var i = 0; i < 9; ++ i ) {
          m = new this.math.M3( 0, 0, 0,
                                     0, 0, 0,
                                     0, 0, 0 );
          m[i] = 0.00000000001;
          ok( this.math.matrix3.equal( m, zero ), "matrices are equal within tolerance" );
        }
      });

      test( "equal, exceed tolerance", function() {
        expect( 9 );

        var zero = new this.math.M3( 0, 0, 0,
                                     0, 0, 0,
                                     0, 0, 0 );
        var m;
        for( var i = 0; i < 9; ++ i ) {
          m = new this.math.M3( 0, 0, 0,
                                     0, 0, 0,
                                     0, 0, 0 );
          m[i] = 0.000011;
          ok( !this.math.matrix3.equal( m, zero ), "matrices outside tolerance are not equal" );
        }
      });

      test( "inverse, return new result", function() {
        expect( 18 );

        var result;

        var m1 = new this.math.M3( 1, 0, 0,
                                   0, 1, 1,
                                   0, 1, 0 );
        var expected = [1, 0, 0, 0, 0, 1, 0, 1, -1];

        result = this.math.matrix3.inverse( m1 );
        
        for( var i = 0; i < 9; ++ i ) {
          equal( result[i], expected[i], "value is correct" );
        }

        var m2 = new this.math.M3( 1, 0, 0,
                                   0, 1, 0,
                                   0, 0, 1 );

        result = this.math.matrix3.inverse( m2 );
        
        for( var i = 0; i < 9; ++ i ) {
          equal( result[i], m2[i], "value is correct" );
        }
      });

      test( "inverse, set result parameter", function() {
        expect( 18 );

        var result = new this.math.M3();

        var m1 = new this.math.M3( 1, 0, 0,
                                   0, 1, 1,
                                   0, 1, 0 );
        var expected = [1, 0, 0, 0, 0, 1, 0, 1, -1];

        this.math.matrix3.inverse( m1, result );
        
        for( var i = 0; i < 9; ++ i ) {
          equal( result[i], expected[i], "value is correct" );
        }

        var m2 = new this.math.M3( 1, 0, 0,
                                   0, 1, 0,
                                   0, 0, 1 );

        result = new this.math.M3();
        this.math.matrix3.inverse( m2, result );
        
        for( var i = 0; i < 9; ++ i ) {
          equal( result[i], m2[i], "value is correct" );
        }
      });

      test( "multiply, return new result", function() {
        expect( 9 );

        var m1 = new this.math.M3( 1, 2, 3,
                                   5, 6, 7,
                                   9, 1, 2 );
        var m2 = new this.math.M3( 4, 5, 6,
                                   8, 9, 1,
                                   3, 4, 5 );

        var result = this.math.matrix3.multiply( m1, m2 );
        var expected = [29, 35, 23, 89, 107, 71, 50, 62, 59];

        for( var i = 0; i < 9; ++ i ) {
          equal( result[i], expected[i], "value is correct" );
        }
      });

      test( "multiply, set result parameter", function() {
        expect( 9 );

        var m1 = new this.math.M3( 1, 2, 3,
                                   5, 6, 7,
                                   9, 1, 2 );
        var m2 = new this.math.M3( 4, 5, 6,
                                   8, 9, 1,
                                   3, 4, 5 );

        var result = new this.math.M3();
        this.math.matrix3.multiply( m1, m2, result );
        var expected = [29, 35, 23, 89, 107, 71, 50, 62, 59];

        for( var i = 0; i < 9; ++ i ) {
          equal( result[i], expected[i], "value is correct" );
        }
      });

      test( "set with given values", function() {
        expect( 9 );

        var m = new this.math.M3( 1, 2, 3,
                                   5, 6, 7,
                                   9, 1, 2 );

        this.math.matrix3.set( m, 2, 3, 4, 5, 6, 7, 8, 9, 1 );
        var expected = [2, 3, 4, 5, 6, 7, 8, 9, 1];

        for( var i = 0; i < 9; ++ i ) {
          equal( m[i], expected[i], "value is correct" );
        }
      });

      test( "set with given array", function() {
        expect( 9 );

        var m = new this.math.M3( 1, 2, 3,
                                   5, 6, 7,
                                   9, 1, 2 );

        this.math.matrix3.set( m, [2, 3, 4, 5, 6, 7, 8, 9, 1] );
        var expected = [2, 3, 4, 5, 6, 7, 8, 9, 1];

        for( var i = 0; i < 9; ++ i ) {
          equal( m[i], expected[i], "value is correct" );
        }
      });

      test( "subtract, return new result", function() {
        expect( 9 );

        var m1 = new this.math.M3( 1, 2, 3,
                                   5, 6, 7,
                                   9, 1, 2 );
        var m2 = new this.math.M3( 4, 5, 6,
                                   8, 9, 1,
                                   3, 4, 5 );

        var result = this.math.matrix3.subtract( m1, m2 );

        for( var i = 0; i < 9; ++ i ) {
          equal( result[i], m1[i] - m2[i], "value is correct" );
        }
      });

      test( "subtract, set result parameter", function() {
        expect( 9 );

        var m1 = new this.math.M3( 1, 2, 3,
                                   5, 6, 7,
                                   9, 1, 2 );
        var m2 = new this.math.M3( 4, 5, 6,
                                   8, 9, 1,
                                   3, 4, 5 );

        var result = new this.math.M3();

        this.math.matrix3.subtract( m1, m2, result );

        for( var i = 0; i < 9; ++ i ) {
          equal( result[i], m1[i] - m2[i], "value is correct" );
        }
      });

      test( "transpose, return new result", function() {
        expect( 18 );

        var result;

        var m1 = new this.math.M3( 1, 2, 3,
                                   5, 6, 7,
                                   9, 1, 2 );

        result = this.math.matrix3.transpose( m1 );
        var expected = [1, 5, 9, 2, 6, 1, 3, 7, 2];       
        
        for( var i = 0; i < 9; ++ i ) {
          equal( result[i], expected[i], "value is correct" );
        }

        var m2 = new this.math.M3( 1, 0, 0,
                                   0, 1, 0,
                                   0, 0, 1 );

        result = this.math.matrix3.inverse( m2 );
        
        for( var i = 0; i < 9; ++ i ) {
          equal( result[i], m2[i], "value is correct" );
        }
      });

      test( "transpose, set result parameter", function() {
        expect( 18 );

        var result = new this.math.M3();;

        var m1 = new this.math.M3( 1, 2, 3,
                                   5, 6, 7,
                                   9, 1, 2 );

        this.math.matrix3.transpose( m1, result );
        var expected = [1, 5, 9, 2, 6, 1, 3, 7, 2];       
        
        for( var i = 0; i < 9; ++ i ) {
          equal( result[i], expected[i], "value is correct" );
        }

        result = new this.math.M3();
        var m2 = new this.math.M3( 1, 0, 0,
                                   0, 1, 0,
                                   0, 0, 1 );

        this.math.matrix3.inverse( m2, result );
        
        for( var i = 0; i < 9; ++ i ) {
          equal( result[i], m2[i], "value is correct" );
        }
      });

      test( "zero matrix", function() {
        expect( 9 );

        var m = this.math.matrix3.zero;

        for( var i = 0; i < 9; ++ i ) {
          equal( m[i], 0, "value is correct" );
        }
      });

      test( "one matrix", function() {
        expect( 9 );

        var m = this.math.matrix3.one;

        for( var i = 0; i < 9; ++ i ) {
          equal( m[i], 1, "value is correct" );
        }
      });

      test( "identity matrix", function() {
        expect( 9 );

        var m = this.math.matrix3.identity;
        var expected = [1, 0, 0, 0, 1, 0, 0, 0, 1];

        for( var i = 0; i < 9; ++ i ) {
          equal( m[i], expected[i], "value is correct" );
        }
      });

    };
  }
);