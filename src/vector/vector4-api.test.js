define(
    [],
    function() {
      return function( _Math ) {

        module( "vector4", {
          setup: function() {
            this.math = _Math;
          },
          teardown: function() {
            this.math = null;
          }
        });

        test( "add, return new result", function() {
          expect( 4 );

          var v1 = new this.math.V4( 1, 2, 3, 4 );
          var v2 = new this.math.V4( 4, 3, 2, 1 );

          var result = this.math.vector4.add( v1, v2 );

          equal( result[0], 5, "x is correct" );
          equal( result[1], 5, "y is correct" );
          equal( result[2], 5, "z is correct" );
          equal( result[3], 5, "w is correct" );
        });

        test( "add, set result parameter", function() {
          expect( 4 );

          var v1 = new this.math.V4( 2, 1, 3, 6 );
          var v2 = new this.math.V4( 3, 2, 4, 2 );
          var result = new this.math.V4();

          this.math.vector4.add( v1, v2, result );

          equal( result[0], 5, "x is correct" );
          equal( result[1], 3, "y is correct" );
          equal( result[2], 7, "z is correct" );
          equal( result[3], 8, "w is correct" );
        });

        test( "angle", function() {
          expect( 1 );

          var e = 0.0000001;

          var v1 = new this.math.V4( 1, 1, 2, 6 );
          var v2 = new this.math.V4( 0, 1, 3, -1 );

          var angle = this.math.vector4.angle( v1, v2 );

          ok( Math.abs( angle - 1.2390766096761843 ) < e, "angle is correct" );
        });

        test( "clear", function() {
          expect( 4 );

          var v = new this.math.V4( 4, 5, 2, 8 );

          this.math.vector4.clear( v );

          equal( v[0], 0, "x is cleared" );
          equal( v[1], 0, "y is cleared" );
          equal( v[2], 0, "z is cleared" );
          equal( v[3], 0, "w is cleared" );
        });

        test( "dot", function() {
          expect( 1 );

          var v1 = new this.math.V4( 3, 4, 2, -1 );
          var v2 = new this.math.V4( 4, 5, 1, -2 );

          var dot = this.math.vector4.dot( v1, v2 );

          equal( dot, 36, "dot product is correct" );
        });

        test( "equal", function() {
          expect( 2 );

          var v1 = new this.math.V4( 1, 1, 3, 4 );
          var v2 = new this.math.V4( 1, 2, 4, 5 );
          var v3 = new this.math.V4( 1, 1, 3, 4 );

          ok( !this.math.vector4.equal( v1, v2 ),
            "different vectors are not equal" );
          ok( this.math.vector4.equal( v1, v3 ),
            "identical vectors are equal" );
        });

        test( "equal, within tolerance", function() {
          expect( 1 );

          var v1 = new this.math.V4( 0, 0, 0, 0 );
          var v2 = new this.math.V4( 0.00000000001, 0.0000000002, 0.00000000001, 0.00000000001 );

          ok( this.math.vector4.equal( v1, v2 ), 
            "vectors are equal within tolerance" );
        });

        test( "equal, exceed tolerance", function() {
          expect( 4 );

          var v1 = new this.math.V4( 0, 0, 0, 0 );
          var v2 = new this.math.V4( 0.0000011, 0, 0, 0 );
          var v3 = new this.math.V4( 0, 0.0000011, 0, 0 );
          var v4 = new this.math.V4( 0, 0, 0.0000011, 0 );
          var v5 = new this.math.V4( 0, 0, 0, 0.0000011 );

          ok( !this.math.vector4.equal( v1, v2 ),
            "vectors outside tolerance are not equal" );
          ok( !this.math.vector4.equal( v1, v3 ), 
            "vectors outside tolerance are not equal" );
          ok( !this.math.vector4.equal( v1, v4 ), 
            "vectors outside tolerance are not equal" );
          ok( !this.math.vector4.equal( v1, v5 ), 
            "vectors outside tolerance are not equal" );  
        });

        test( "length", function() {
          expect( 1 );

          var v = new this.math.V4( 1, 2, 3, 4 );

          equal( this.math.vector4.length( v ), Math.sqrt( 30 ),
            "length is correct" );
        });

        test( "limit, upper limit only", function() {
          expect( 2 );
          var v = new this.math.V4( 3, 5, 7, 11 );
          var v21 = new this.math.V4( 1, 3, 5, 7 );
          var v22 = new this.math.V4( 1, 3, 5, 7 );
          var desiredLength = 13;
          this.math.vector4.limit(v, desiredLength);
          this.math.vector4.limit(v21, desiredLength);
          var actualLength = Math.sqrt( v[0] * v[0] +
            v[1] * v[1] +
            v[2] * v[2] +
            v[3] * v[3]);
          ok(this.math.equal( desiredLength, actualLength), "actual length is correct" );
          ok(this.math.vector4.equal(v21, v22), "vector within limits was unchanged");
        });

        test( "limit, upper and lower limits", function(){
          expect( 3 );
          var v1 = new this.math.V4( 3, 5, 7, 11 );
          var v2 = new this.math.V4( 13, 17, 23, 29 );
          var v31 = new this.math.V4( 7, 11, 13, 17 );
          var v32 = new this.math.V4( 7, 11, 13, 17 );
          var desiredLower = 15;
          var desiredUpper = 27;
          this.math.vector4.limit(v1, desiredLower, desiredUpper);
          this.math.vector4.limit(v2, desiredLower, desiredUpper);
          this.math.vector4.limit(v31, desiredLower, desiredUpper);
          var actualLength1 = Math.sqrt( v1[0] * v1[0] +
            v1[1] * v1[1] +
            v1[2] * v1[2] +
            v1[3] * v1[3]);
          var actualLength2 = Math.sqrt( v2[0] * v2[0] +
            v2[1] * v2[1] +
            v2[2] * v2[2] +
            v2[3] * v2[3]);
          ok(this.math.equal( desiredLower, actualLength1), "actual lower length is correct" );
          ok(this.math.equal( desiredUpper, actualLength2), "actual upper length is correct" );
          ok(this.math.vector4.equal(v31, v32), "vector within limits was unchanged");
        });

        test( "multiply, return new result", function() {
          expect( 4 );

          var v = new this.math.V4( 3, 4, 5, 1 );
          var s = 9;

          var result = this.math.vector4.multiply( v, s );

          equal( result[0], 27, "x is correct" );
          equal( result[1], 36, "y is correct" );
          equal( result[2], 45, "z is correct" );
          equal( result[3], 9, "w is correct" );
        });

        test( "multiply, set result parameter", function() {
          expect( 4 );

          var v = new this.math.V4( 2, 3, 4, 2 );
          var s = 3;
          var result = new this.math.V4();

          this.math.vector4.multiply( v, s, result );

          equal( result[0], 6, "x is correct" );
          equal( result[1], 9, "y is correct" );
          equal( result[2], 12, "z is correct" );
          equal( result[3], 6, "w is correct" );
        });

        test( "transform, return new result", function() {
          expect( 4 );

          var m = new this.math.M4( 1,  2,  3,  4,
                                    5,  6,  7,  8,
                                    9, 10, 11, 12,
                                    13, 14, 15, 16 );

          var v = new this.math.V4( 1, 2, 3, 4 );

          var result = this.math.vector4.transform( v, m );
          var expected = [30, 70, 110, 150];

          equal( result[0], expected[0], "x is correct" );
          equal( result[1], expected[1], "y is correct" );
          equal( result[2], expected[2], "z is correct" );
          equal( result[3], expected[3], "w is correct" );
        });

        test( "transform, set result parameter", function() {
          expect( 4 );

          var m = new this.math.M4( 1,  2,  3,  4,
            5,  6,  7,  8,
            9, 10, 11, 12,
            13, 14, 15, 16 );
          var v = new this.math.V4( 1, 2, 3, 4 );

          var result = new this.math.V4();
          this.math.vector4.transform( v, m, result );
          var expected = [30, 70, 110, 150];

          equal( result[0], expected[0], "x is correct" );
          equal( result[1], expected[1], "y is correct" );
          equal( result[2], expected[2], "z is correct" );
          equal( result[3], expected[3], "w is correct" );

        });

        test( "negate, return new result", function() {
          expect( 4 );

          var v = this.math.V4( -1, 2, 4, 2 );
          var result = this.math.vector4.negate( v );

          equal( result[0], 1, "x is correct" );
          equal( result[1], -2, "y is correct" );
          equal( result[2], -4, "z is correct" );
          equal( result[3], -2, "w is correct" );
        });

        test( "negate, set result parameter", function() {
          expect( 4 );

          var v = this.math.V4( 0, 1, -5, -1 );
          var result = new this.math.V4();

          this.math.vector4.negate( v, result );

          equal( result[0], 0, "x is correct" );
          equal( result[1], -1, "y is correct" );
          equal( result[2], 5, "z is correct" );
          equal( result[3], 1, "w is correct" );
        });

        test( "normalize, return new result", function() {
          expect( 4 );

          var e = 0.0000001;

          var v = new this.math.V4( 1, 1, 1, 1 );
          var result = this.math.vector4.normalize( v );

          ok( Math.abs( result[0] - 1/Math.sqrt( 4 ) ) < e, "x is correct" );
          ok( Math.abs( result[1] - 1/Math.sqrt( 4 ) ) < e, "y is correct" );
          ok( Math.abs( result[2] - 1/Math.sqrt( 4 ) ) < e, "z is correct" );
          ok( Math.abs( result[3] - 1/Math.sqrt( 4 ) ) < e, "w is correct" );
        });

        test( "normalize, set result parameter", function() {
          expect( 4 );

          var e = 0.0000001;

          var v = new this.math.V4( 1, 1, 1, 1 );
          var result = new this.math.V4();

          this.math.vector4.normalize( v, result );

          ok( Math.abs( result[0] - 1/Math.sqrt( 4 ) ) < e, "x is correct" );
          ok( Math.abs( result[1] - 1/Math.sqrt( 4 ) ) < e, "y is correct" );
          ok( Math.abs( result[2] - 1/Math.sqrt( 4 ) ) < e, "z is correct" );
          ok( Math.abs( result[3] - 1/Math.sqrt( 4 ) ) < e, "w is correct" );
        });

        test( "set with given values", function() {
          expect( 4 );

          var v = new this.math.V4();

          this.math.vector4.set( v, 3, 4, 5, 6 );

          equal( v[0], 3, "x is correct" );
          equal( v[1], 4, "y is correct" );
          equal( v[2], 5, "z is correct" );
          equal( v[3], 6, "w is correct" );
        });

        test( "set with given array", function() {
          expect( 4 );

          var v = new this.math.V4();

          this.math.vector4.set( v, [3, 4, 5, 6] );

          equal( v[0], 3, "x is correct" );
          equal( v[1], 4, "y is correct" );
          equal( v[2], 5, "z is correct" );
          equal( v[3], 6, "w is correct" );
        });

        test( "subtract, return new result", function() {
          expect( 4 );

          var v1 = new this.math.V4( 1, 2, 3, 5 );
          var v2 = new this.math.V4( 4, 3, 2, 6 );

          var result = this.math.vector4.subtract( v1, v2 );

          equal( result[0], -3, "x is correct" );
          equal( result[1], -1, "y is correct" );
          equal( result[2], 1, "z is correct" );
          equal( result[3], -1, "w is correct" );
        });

        test( "subtract, set result parameter", function() {
          expect( 4 );

          var v1 = new this.math.V4( 2, 1, 5, 8 );
          var v2 = new this.math.V4( 3, 2, 3, 2 );
          var result = new this.math.V4();

          this.math.vector4.subtract( v1, v2, result );

          equal( result[0], -1, "x is correct" );
          equal( result[1], -1, "y is correct" );
          equal( result[2], 2, "z is correct" );
          equal( result[3], 6, "w is correct" );
        });

        test( "x vector", function() {
          expect( 4 );

          equal( this.math.vector4.x[0], 1, "x is correct" );
          equal( this.math.vector4.x[1], 0, "y is correct" );
          equal( this.math.vector4.x[2], 0, "z is correct" );
          equal( this.math.vector4.x[3], 0, "w is correct" );
        });

        test( "y vector", function() {
          expect( 4 );

          equal( this.math.vector4.y[0], 0, "x is correct" );
          equal( this.math.vector4.y[1], 1, "y is correct" );
          equal( this.math.vector4.y[2], 0, "z is correct" );
          equal( this.math.vector4.y[3], 0, "w is correct" );
        });

        test( "z vector", function() {
          expect( 4 );

          equal( this.math.vector4.z[0], 0, "x is correct" );
          equal( this.math.vector4.z[1], 0, "y is correct" );
          equal( this.math.vector4.z[2], 1, "z is correct" );
          equal( this.math.vector4.z[3], 0, "w is correct" );
        });

        test( "w vector", function() {
          expect( 4 );

          equal( this.math.vector4.w[0], 0, "x is correct" );
          equal( this.math.vector4.w[1], 0, "y is correct" );
          equal( this.math.vector4.w[2], 0, "z is correct" );
          equal( this.math.vector4.w[3], 1, "w is correct" );
        });

        test( "zero vector", function() {
          expect( 4 );

          equal( this.math.vector4.zero[0], 0, "x is correct" );
          equal( this.math.vector4.zero[1], 0, "y is correct" );
          equal( this.math.vector4.zero[2], 0, "z is correct" );
          equal( this.math.vector4.zero[3], 0, "w is correct" );
        });

        test( "one vector", function() {
          expect( 4 );

          equal( this.math.vector4.one[0], 1, "x is correct" );
          equal( this.math.vector4.one[1], 1, "y is correct" );
          equal( this.math.vector4.one[2], 1, "z is correct" );
          equal( this.math.vector4.one[3], 1, "w is correct" );
        });

    };
  }
);