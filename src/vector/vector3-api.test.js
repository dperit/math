define(
    [],
    function() {
      return function( _Math ) {

        module( "vector3", {
          setup: function() {
            this.math = _Math;
          },
          teardown: function() {
            this.math = null;
          }
        });

        test( "add, return new result", function() {
          expect( 3 );

          var v1 = new this.math.V3( 1, 2, 3 );
          var v2 = new this.math.V3( 4, 3, 2 );

          var result = this.math.vector3.add( v1, v2 );

          equal( result[0], 5, "x is correct" );
          equal( result[1], 5, "y is correct" );
          equal( result[2], 5, "z is correct" );
        });

        test( "add, set result parameter", function() {
          expect( 3 );

          var v1 = new this.math.V3( 2, 1, 3 );
          var v2 = new this.math.V3( 3, 2, 4 );
          var result = new this.math.V3();

          this.math.vector3.add( v1, v2, result );

          equal( result[0], 5, "x is correct" );
          equal( result[1], 3, "y is correct" );
          equal( result[2], 7, "z is correct" );
        });

        test( "angle", function() {
          expect( 1 );

          var e = 0.0000001;

          var v1 = new this.math.V3( 1, 1, 2 );
          var v2 = new this.math.V3( 0, 1, 3 );

          var angle = this.math.vector3.angle( v1, v2 );

          ok( Math.abs( angle - 0.44247168108809276 ) < e, "angle is correct" );
        });

        test( "clear", function() {
          expect( 3 );

          var v = new this.math.V3( 4, 5, 2 );

          this.math.vector3.clear( v );

          equal( v[0], 0, "x is cleared" );
          equal( v[1], 0, "y is cleared" );
          equal( v[2], 0, "z is cleared" );
        });

        test( "cross, return new result", function() {
          expect( 3 );

          var v1 = new this.math.V3( 1, 0, 0 );
          var v2 = new this.math.V3( 0, 1, 0 );
          var result = this.math.vector3.cross( v1, v2 );

          equal( result[0], 0, "x is correct" );
          equal( result[1], 0, "y is correct" );
          equal( result[2], 1, "z is correct" );
        });

        test( "cross, set result parameter", function() {
          expect( 3 );

          var v1 = new this.math.V3( 1, 0, 0 );
          var v2 = new this.math.V3( 0, 1, 0 );
          var result = new this.math.V3();
          this.math.vector3.cross( v1, v2, result );

          equal( result[0], 0, "x is correct" );
          equal( result[1], 0, "y is correct" );
          equal( result[2], 1, "z is correct" );
        });

        test( "distance", function() {
          expect( 2 );

          var v1 = new this.math.V4( 3, 5, 7 );
          var v2 = new this.math.V4( 13, 17, 19 );
          var result = this.math.vector4.distance(v1, v2);
          var result2 = this.math.vector4.distance(v2, v1);

          var expected = Math.sqrt(388);

          equal( result, expected, "distance from 1 to 2 is correct" );
          equal( result2, expected, "distance from 2 to 1 is correct" );
        });

        test( "dot", function() {
          expect( 1 );

          var v1 = new this.math.V3( 3, 4, 2 );
          var v2 = new this.math.V3( 4, 5, 1 );

          var dot = this.math.vector3.dot( v1, v2 );

          equal( dot, 34, "dot product is correct" );
        });

        test( "equal", function() {
          expect( 2 );

          var v1 = new this.math.V3( 1, 1, 3 );
          var v2 = new this.math.V3( 1, 2, 4 );
          var v3 = new this.math.V3( 1, 1, 3 );

          ok( !this.math.vector3.equal( v1, v2 ),
            "different vectors are not equal" );
          ok( this.math.vector3.equal( v1, v3 ),
            "identical vectors are equal" );
        });

        test( "equal, within tolerance", function() {
          expect( 1 );

          var v1 = new this.math.V3( 0, 0, 0 );
          var v2 = new this.math.V3( 0.00000000001, 0.0000000002, 0.00000000001 );

          ok( this.math.vector3.equal( v1, v2 ), 
            "vectors are equal within tolerance" );
        });

        test( "equal, exceed tolerance", function() {
          expect( 3 );

          var v1 = new this.math.V3( 0, 0, 0 );
          var v2 = new this.math.V3( 0.0000011, 0, 0 );
          var v3 = new this.math.V3( 0, 0.0000011, 0 );
          var v4 = new this.math.V3( 0, 0, 0.0000011 );

          ok( !this.math.vector3.equal( v1, v2 ),
            "vectors outside tolerance are not equal" );
          ok( !this.math.vector3.equal( v1, v3 ), 
            "vectors outside tolerance are not equal" );
          ok( !this.math.vector3.equal( v1, v4 ), 
            "vectors outside tolerance are not equal" );          
        });

        test( "length", function() {
          expect( 1 );

          var v = new this.math.V3( 1, 2, 3 );

          equal( this.math.vector3.length( v ), Math.sqrt( 14 ),
            "length is correct" );
        });

        test( "limit", function() {
          expect( 2 );
          var v = new this.math.V3( 3, 5, 7 );
          var v21 = new this.math.V3( 1, 3, 5 );
          var v22 = new this.math.V3( 1, 3, 5 );
          var desiredLength = 8;
          this.math.vector3.limit(v, desiredLength);
          this.math.vector3.limit(v21, desiredLength);
          var actualLength = Math.sqrt( v[0] * v[0] +
            v[1] * v[1] +
            v[2] * v[2]);
          ok(this.math.equal( desiredLength, actualLength), "actual length is correct" );
          ok(this.math.vector3.equal(v21, v22), "vector within limit was unchanged");
        });

        test( "multiply, return new result", function() {
          expect( 3 );

          var v = new this.math.V3( 3, 4, 5 );
          var s = 9;

          var result = this.math.vector3.multiply( v, s );

          equal( result[0], 27, "x is correct" );
          equal( result[1], 36, "y is correct" );
          equal( result[2], 45, "z is correct" );
        });

        test( "multiply, set result parameter", function() {
          expect( 3 );

          var v = new this.math.V3( 2, 3, 4 );
          var s = 3;
          var result = new this.math.V3();

          this.math.vector3.multiply( v, s, result );

          equal( result[0], 6, "x is correct" );
          equal( result[1], 9, "y is correct" );
          equal( result[2], 12, "z is correct" );
        });

        test( "negate, return new result", function() {
          expect( 3 );

          var v = this.math.V3( -1, 2, 4 );
          var result = this.math.vector3.negate( v );

          equal( result[0], 1, "x is correct" );
          equal( result[1], -2, "y is correct" );
          equal( result[2], -4, "z is correct" );
        });

        test( "negate, set result parameter", function() {
          expect( 3 );

          var v = this.math.V3( 0, 1, -5 );
          var result = new this.math.V3();

          this.math.vector3.negate( v, result );

          equal( result[0], 0, "x is correct" );
          equal( result[1], -1, "y is correct" );
          equal( result[2], 5, "z is correct" );
        });

        test( "normalize, return new result", function() {
          expect( 3 );

          var e = 0.0000001;

          var v = new this.math.V3( 1, 1, 1 );
          var result = this.math.vector3.normalize( v );

          ok( Math.abs( result[0] - 1/Math.sqrt( 3 ) ) < e, "x is correct" );
          ok( Math.abs( result[1] - 1/Math.sqrt( 3 ) ) < e, "y is correct" );
          ok( Math.abs( result[2] - 1/Math.sqrt( 3 ) ) < e, "z is correct" );
        });

        test( "normalize, set result parameter", function() {
          expect( 3 );

          var e = 0.0000001;

          var v = new this.math.V3( 1, 1, 1 );
          var result = new this.math.V3();

          this.math.vector3.normalize( v, result );

          ok( Math.abs( result[0] - 1/Math.sqrt( 3 ) ) < e, "x is correct" );
          ok( Math.abs( result[1] - 1/Math.sqrt( 3 ) ) < e, "y is correct" );
          ok( Math.abs( result[2] - 1/Math.sqrt( 3 ) ) < e, "z is correct" );
        });

        test( "set with given values", function() {
          expect( 3 );

          var v = new this.math.V3();

          this.math.vector3.set( v, 3, 4, 5 );

          equal( v[0], 3, "x is correct" );
          equal( v[1], 4, "y is correct" );
          equal( v[2], 5, "z is correct" );
        });

        test( "set with given array", function() {
          expect( 3 );

          var v = new this.math.V3();

          this.math.vector3.set( v, [3, 4, 5] );

          equal( v[0], 3, "x is correct" );
          equal( v[1], 4, "y is correct" );
          equal( v[2], 5, "z is correct" );
        });

        test( "subtract, return new result", function() {
          expect( 3 );

          var v1 = new this.math.V3( 1, 2, 3 );
          var v2 = new this.math.V3( 4, 3, 2 );

          var result = this.math.vector3.subtract( v1, v2 );

          equal( result[0], -3, "x is correct" );
          equal( result[1], -1, "y is correct" );
          equal( result[2], 1, "z is correct" );
        });

        test( "subtract, set result parameter", function() {
          expect( 3 );

          var v1 = new this.math.V3( 2, 1, 5 );
          var v2 = new this.math.V3( 3, 2, 3 );
          var result = new this.math.V3();

          this.math.vector3.subtract( v1, v2, result );

          equal( result[0], -1, "x is correct" );
          equal( result[1], -1, "y is correct" );
          equal( result[2], 2, "z is correct" );
        });

        test( "x vector", function() {
          expect( 3 );

          equal( this.math.vector3.x[0], 1, "x is correct" );
          equal( this.math.vector3.x[1], 0, "y is correct" );
          equal( this.math.vector3.x[2], 0, "z is correct" );
        });

        test( "y vector", function() {
          expect( 3 );

          equal( this.math.vector3.y[0], 0, "x is correct" );
          equal( this.math.vector3.y[1], 1, "y is correct" );
          equal( this.math.vector3.y[2], 0, "z is correct" );
        });

        test( "z vector", function() {
          expect( 3 );

          equal( this.math.vector3.z[0], 0, "x is correct" );
          equal( this.math.vector3.z[1], 0, "y is correct" );
          equal( this.math.vector3.z[2], 1, "z is correct" );
        });

        test( "zero vector", function() {
          expect( 3 );

          equal( this.math.vector3.zero[0], 0, "x is correct" );
          equal( this.math.vector3.zero[1], 0, "y is correct" );
          equal( this.math.vector3.zero[2], 0, "z is correct" );
        });

        test( "one vector", function() {
          expect( 3 );

          equal( this.math.vector3.one[0], 1, "x is correct" );
          equal( this.math.vector3.one[1], 1, "y is correct" );
          equal( this.math.vector3.one[2], 1, "z is correct" );
        });

        test( "transform, return new result", function() {
          expect( 3 );

          var m = new this.math.M3( 1, 2, 3,
            4, 5, 6,
            7, 8, 9 );

          var v = new this.math.V3( 1, 2, 3 );

          var result = this.math.vector3.transform( v, m );
          var expected = [14, 32, 50];

          equal( result[0], expected[0], "x is correct" );
          equal( result[1], expected[1], "y is correct" );
          equal( result[2], expected[2], "z is correct" );
        });

        test( "transform, set result parameter", function() {
          expect( 3 );

          var m = new this.math.M3( 1, 2, 3,
            4, 5, 6,
            7, 8, 9 );

          var v = new this.math.V3( 1, 2, 3 );

          var result = new this.math.V3();
          this.math.vector3.transform( v, m, result );
          var expected = [14, 32, 50];

          equal( result[0], expected[0], "x is correct" );
          equal( result[1], expected[1], "y is correct" );
          equal( result[2], expected[2], "z is correct" );
        });

    };
  }
);