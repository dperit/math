define(
  [],
  function() {
    return function( _Math ) {

      module( "matrix2", {
        setup: function() {
          this.math = _Math;
        },
        teardown: function() {
          this.math = null;
        }
      });

      test( "add, return new result", function() {
        expect( 4 );

        var m1 = new this.math.M2( 1, 2, 3, 4 );
        var m2 = new this.math.M2( 5, 6, 7, 8 );

        var result = this.math.matrix2.add( m1, m2 );

        for( var i = 0; i < 4; ++ i ) {
          equal( result[i], m1[i] + m2[i], "value is correct" );
        }
      });

      test( "add, set result parameter", function() {
        expect( 4 );

        var m1 = new this.math.M2( 1, 2, 3, 4 );
        var m2 = new this.math.M2( 5, 6, 7, 8 );

        var result = new this.math.M2();

        this.math.matrix2.add( m1, m2, result );

        for( var i = 0; i < 4; ++ i ) {
          equal( result[i], m1[i] + m2[i], "value is correct" );
        }
      });

      test( "clear", function() {
        expect( 4 );

        var m = new this.math.M2( 1, 2, 3, 4 );

        this.math.matrix2.clear( m );

        for( var i = 0; i < 4; ++ i ) {
          equal( m[i], 0, "value is 0" );
        }
      });

      test( "determinant", function() {
        expect( 2 );

        var m1 = new this.math.M2( 1, 2, 3, 4 );

        equal( this.math.matrix2.determinant( m1 ), -2, "determinant is correct" );

        var m2 = new this.math.M2( 1, 0, 0, 1 );

        equal( this.math.matrix2.determinant( m2 ), 1, "determinant is correct" );
      });

      test( "equal", function() {
        expect( 2 );

        var m1 = new this.math.M2( 1, 2, 3, 4 );
        var m2 = new this.math.M2( 2, 3, 4 ,5 );

        ok( this.math.matrix2.equal( m1, m1 ), "identical matrices are equal" );
        ok( !this.math.matrix2.equal( m1, m2 ), "different matrices are not equal" );
      });

      test( "equal, within tolerance", function() {
        expect( 4 );

        var zero = new this.math.M2( 0, 0, 0, 0 );
        var m;
        for( var i = 0; i < 4; ++ i ) {
          m = new this.math.M2( 0, 0, 0, 0 );
          m[i] = 0.00000000001;
          ok( this.math.matrix2.equal( m, zero ), "matrices are equal within tolerance" );
        }
      });

      test( "equal, exceed tolerance", function() {
        expect( 4 );

        var zero = new this.math.M2( 0, 0, 0, 0 );
        var m;
        for( var i = 0; i < 4; ++ i ) {
          m = new this.math.M2( 0, 0, 0, 0 );
          m[i] = 0.000011;
          ok( !this.math.matrix2.equal( m, zero ), "matrices outside tolerance are not equal" );
        }
      });

      test( "inverse, return new result", function() {
        expect( 8 );

        var result;

        var m1 = new this.math.M2( 1, 1, 0, 1 );
        var expected = [1, -1, 0, 1];

        result = this.math.matrix2.inverse( m1 );
        
        for( var i = 0; i < 4; ++ i ) {
          equal( result[i], expected[i], "value is correct" );
        }

        var m2 = new this.math.M2( 1, 0, 0, 1 );

        result = this.math.matrix2.inverse( m2 );
        
        for( var i = 0; i < 4; ++ i ) {
          equal( result[i], m2[i], "value is correct" );
        }
      });

      test( "inverse, set result parameter", function() {
        expect( 8 );

        var result = new this.math.M2();

        var m1 = new this.math.M2( 1, 1, 0, 1 );
        var expected = [1, -1, 0, 1];

        this.math.matrix2.inverse( m1, result );

        for( var i = 0; i < 4; ++ i ) {
          equal( result[i], expected[i], "value is correct" );
        }

        var m2 = new this.math.M2( 1, 0, 0, 1 );

        result = new this.math.M2();
        this.math.matrix2.inverse( m2, result );
        
        for( var i = 0; i < 4; ++ i ) {
          equal( result[i], m2[i], "value is correct" );
        }
      });

      test( "multiply, return new result", function() {
        expect( 4 );

        var m1 = new this.math.M2( 2, 3, 4, 5 );
        var m2 = new this.math.M2( 4, 3, 1, 2 );

        var result = this.math.matrix2.multiply( m1, m2 );
        var expected = [11, 12, 21, 22] ;

        for( var i = 0; i < 4; ++ i ) {
          equal( result[i], expected[i], "value is correct" );
        }
      });

      test( "multiply, set result parameter", function() {
        expect( 4 );

        var m1 = new this.math.M2( 2, 3, 4, 5 );
        var m2 = new this.math.M2( 4, 3, 1, 2 );

        var result = new this.math.M2();
        this.math.matrix2.multiply( m1, m2, result );
        var expected = [11, 12, 21, 22];

        for( var i = 0; i < 4; ++ i ) {
          equal( result[i], expected[i], "value is correct" );
        }
      });

      test( "set with given values", function() {
        expect( 4 );

        var m = new this.math.M2( 2, 3, 1, 5 );

        this.math.matrix2.set( m, 1, 2, 3, 4 );
        var expected = [1, 2, 3, 4];

        for( var i = 0; i < 4; ++ i ) {
          equal( m[i], expected[i], "value is correct" );
        }
      });

      test( "set with given array", function() {
        expect( 4 );

        var m = new this.math.M2( 5, 9, 2, 1 );

        this.math.matrix2.set( m, [1, 2, 3, 4] );
        var expected = [1, 2, 3, 4];

        for( var i = 0; i < 4; ++ i ) {
          equal( m[i], expected[i], "value is correct" );
        }
      });

      test( "subtract, return new result", function() {
        expect( 4 );

        var m1 = new this.math.M2( 6, 3, 1, 2 );
        var m2 = new this.math.M2( 6, 1, 2, 5 );

        var result = this.math.matrix2.subtract( m1, m2 );

        for( var i = 0; i < 4; ++ i ) {
          equal( result[i], m1[i] - m2[i], "value is correct" );
        }
      });

      test( "subtract, set result parameter", function() {
        expect( 4 );

        var m1 = new this.math.M2( 7, 3, 1, 3 );
        var m2 = new this.math.M2( 6, 4, 1, 2 );

        var result = new this.math.M2();

        this.math.matrix2.subtract( m1, m2, result );

        for( var i = 0; i < 4; ++ i ) {
          equal( result[i], m1[i] - m2[i], "value is correct" );
        }
      });

      test( "transpose, return new result", function() {
        expect( 8 );

        var result;

        var m1 = new this.math.M2( 4, 2, 1, 2 );

        result = this.math.matrix2.transpose( m1 );
        var expected = [4, 1, 2, 2];       
        
        for( var i = 0; i < 4; ++ i ) {
          equal( result[i], expected[i], "value is correct" );
        }

        var m2 = new this.math.M2( 1, 0, 0, 1 );

        result = this.math.matrix2.inverse( m2 );
        
        for( var i = 0; i < 4; ++ i ) {
          equal( result[i], m2[i], "value is correct" );
        }
      });

      test( "transpose, set result parameter", function() {
        expect( 8 );

        var result = new this.math.M2();;

        var m1 = new this.math.M2( 4, 2, 1, 5 );

        this.math.matrix2.transpose( m1, result );
        var expected = [4, 1, 2, 5];       
        
        for( var i = 0; i < 4; ++ i ) {
          equal( result[i], expected[i], "value is correct" );
        }

        result = new this.math.M2();
        var m2 = new this.math.M2( 1, 0, 0, 1 );

        this.math.matrix2.inverse( m2, result );
        
        for( var i = 0; i < 4; ++ i ) {
          equal( result[i], m2[i], "value is correct" );
        }
      });

      test( "zero matrix", function() {
        expect( 4 );

        var m = this.math.matrix2.zero;

        for( var i = 0; i < 4; ++ i ) {
          equal( m[i], 0, "value is correct" );
        }
      });

      test( "one matrix", function() {
        expect( 4 );

        var m = this.math.matrix2.one;

        for( var i = 0; i < 4; ++ i ) {
          equal( m[i], 1, "value is correct" );
        }
      });

      test( "identity matrix", function() {
        expect( 4 );

        var m = this.math.matrix2.identity;
        var expected = [1, 0, 0, 1];

        for( var i = 0; i < 4; ++ i ) {
          equal( m[i], expected[i], "value is correct" );
        }
      });

    };
  }
);