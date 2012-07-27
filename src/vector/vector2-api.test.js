define(
    [],
    function() {
      return function( _Math ) {

        module( "vector2", {
          setup: function() {
            this.math = _Math;
          },
          teardown: function() {
            this.math = null;
          }
        });

        test( "add, return new result", function() {
          expect( 2 );

          var v1 = new this.math.V2( 1, 2 );
          var v2 = new this.math.V2( 4, 3 );

          var result = this.math.vector2.add( v1, v2 );

          equal( result[0], 5, "x is correct" );
          equal( result[1], 5, "y is correct" );
        });

        test( "add, set result parameter", function() {
          expect( 2 );

          var v1 = new this.math.V2( 2, 1 );
          var v2 = new this.math.V2( 3, 2 );
          var result = new this.math.V2();

          this.math.vector2.add( v1, v2, result );

          equal( result[0], 5, "x is correct" );
          equal( result[1], 3, "y is correct" );
        });

        test( "angle", function() {
          expect( 1 );

          var e = 0.0000001;

          var v1 = new this.math.V2( 1, 1 );
          var v2 = new this.math.V2( 0, 1 );

          var angle = this.math.vector2.angle( v1, v2 );

          ok( Math.abs( angle - this.math.TAU/8 ) < e, "angle is correct" );
        });

        test( "clear", function() {
          expect( 2 );

          var v = new this.math.V2( 4, 5 );

          this.math.vector2.clear( v );

          equal( v[0], 0, "x is cleared" );
          equal( v[1], 0, "y is cleared" );
        });

        test( "distance", function() {
          expect( 2 );

          var v1 = new this.math.V4( 3, 5 );
          var v2 = new this.math.V4( 13, 17 );
          var result = this.math.vector4.distance(v1, v2);
          var result2 = this.math.vector4.distance(v2, v1);

          var expected = Math.sqrt(244);

          equal( result, expected, "distance from 1 to 2 is correct" );
          equal( result2, expected, "distance from 2 to 1 is correct" );
        });

        test( "dot", function() {
          expect( 1 );

          var v1 = new this.math.V2( 3, 4 );
          var v2 = new this.math.V2( 4, 5 );

          var dot = this.math.vector2.dot( v1, v2 );

          equal( dot, 32, "dot product is correct" );
        });

        test( "equal", function() {
          expect( 2 );

          var v1 = new this.math.V2( 1, 1 );
          var v2 = new this.math.V2( 1, 2 );
          var v3 = new this.math.V2( 1, 1 );

          ok( !this.math.vector2.equal( v1, v2 ),
            "different vectors are not equal" );
          ok( this.math.vector2.equal( v1, v3 ),
            "identical vectors are equal" );
        });

        test( "equal, within tolerance", function() {
          expect( 1 );

          var v1 = new this.math.V2( 0, 0 );
          var v2 = new this.math.V2( 0.00000000001, 0.0000000002 );

          ok( this.math.vector2.equal( v1, v2 ), 
            "vectors are equal within tolerance" );
        });

        test( "equal, exceed tolerance", function() {
          expect( 2 );

          var v1 = new this.math.V2( 0, 0 );
          var v2 = new this.math.V2( 0.0000011, 0 );
          var v3 = new this.math.V2( 0, 0.0000011 );

          ok( !this.math.vector2.equal( v1, v2 ),
            "vectors outside tolerance are not equal" );
          ok( !this.math.vector2.equal( v1, v3 ), 
            "vectors outside tolerance are not equal" );
        });

        test( "length", function() {
          expect( 1 );

          var v = new this.math.V2( 1, 2 );

          equal( this.math.vector2.length( v ), Math.sqrt( 5 ),
            "length is correct" );
        });

        test( "limit", function() {
          expect( 2 );
          var v = new this.math.V2( 3, 5 );
          var v21 = new this.math.V2( 1, 3 );
          var v22 = new this.math.V2( 1, 3 );
          var desiredLength = 4;
          this.math.vector2.limit(v, desiredLength, v);
          this.math.vector2.limit(v21, desiredLength, v21);
          var actualLength = Math.sqrt( v[0] * v[0] +
            v[1] * v[1]);
          ok(this.math.equal( desiredLength, actualLength), "actual length is correct" );
          ok(this.math.vector2.equal(v21, v22), "vector within limit was unchanged");
        });

        test( "multiply, return new result", function() {
          expect( 2 );

          var v = new this.math.V2( 3, 4 );
          var s = 9;

          var result = this.math.vector2.multiply( v, s );

          equal( result[0], 27, "x is correct" );
          equal( result[1], 36, "y is correct" );
        });

        test( "multiply, set result parameter", function() {
          expect( 2 );

          var v = new this.math.V2( 2, 3 );
          var s = 3;
          var result = new this.math.V2();

          this.math.vector2.multiply( v, s, result );

          equal( result[0], 6, "x is correct" );
          equal( result[1], 9, "y is correct" );
        });

        test( "negate, return new result", function() {
          expect( 2 );

          var v = this.math.V2( -1, 2 );
          var result = this.math.vector2.negate( v );

          equal( result[0], 1, "x is correct" );
          equal( result[1], -2, "y is correct" );
        });

        test( "negate, set result parameter", function() {
          expect( 2 );

          var v = this.math.V2( 0, 1 );
          var result = new this.math.V2();

          this.math.vector2.negate( v, result );

          equal( result[0], 0, "x is correct" );
          equal( result[1], -1, "y is correct" );
        });

        test( "normalize, return new result", function() {
          expect( 2 );

          var e = 0.0000001;

          var v = new this.math.V2( 1, 1 );
          var result = this.math.vector2.normalize( v );

          ok( Math.abs( result[0] - 1/Math.sqrt( 2 ) ) < e, "x is correct" );
          ok( Math.abs( result[1] - 1/Math.sqrt( 2 ) ) < e, "y is correct" );
        });

        test( "normalize, set result parameter", function() {
          expect( 2 );

          var e = 0.0000001;

          var v = new this.math.V2( 1, 1 );
          var result = new this.math.V2();

          this.math.vector2.normalize( v, result );

          ok( Math.abs( result[0] - 1/Math.sqrt( 2 ) ) < e, "x is correct" );
          ok( Math.abs( result[1] - 1/Math.sqrt( 2 ) ) < e, "y is correct" );
        });

        test( "project, return new result", function() {
          expect( 2 );

          var v1 = new this.math.V2( 1, 1 );
          var v2 = new this.math.V2( 0, 2 );
          var result = this.math.vector2.project( v1, v2 );

          equal( result[0], 0, "x is correct" );
          equal( result[1], 1, "y is correct" );
        });

        test( "project, set result parameter", function() {
          expect( 2 );

          var v1 = new this.math.V2( 1, 1 );
          var v2 = new this.math.V2( 0, 2 );
          var result = new this.math.V2();

          this.math.vector2.project( v2, v1, result );

          equal( result[0], 1, "x is correct" );
          equal( result[1], 1, "y is correct" );
        });

        test( "set with given values", function() {
          expect( 2 );

          var v = new this.math.V2();

          this.math.vector2.set( v, 3, 4 );

          equal( v[0], 3, "x is correct" );
          equal( v[1], 4, "y is correct" );
        });

        test( "set with given array", function() {
          expect( 2 );

          var v = new this.math.V2();

          this.math.vector2.set( v, [3, 4] );

          equal( v[0], 3, "x is correct" );
          equal( v[1], 4, "y is correct" );
        });

        test( "subtract, return new result", function() {
          expect( 2 );

          var v1 = new this.math.V2( 1, 2 );
          var v2 = new this.math.V2( 4, 3 );

          var result = this.math.vector2.subtract( v1, v2 );

          equal( result[0], -3, "x is correct" );
          equal( result[1], -1, "y is correct" );
        });

        test( "subtract, set result parameter", function() {
          expect( 2 );

          var v1 = new this.math.V2( 2, 1 );
          var v2 = new this.math.V2( 3, 2 );
          var result = new this.math.V2();

          this.math.vector2.subtract( v1, v2, result );

          equal( result[0], -1, "x is correct" );
          equal( result[1], -1, "y is correct" );
        });

        test( "x vector", function() {
          expect( 2 );

          equal( this.math.vector2.x[0], 1, "x is correct" );
          equal( this.math.vector2.x[1], 0, "y is correct" );
        });

        test( "u vector", function() {
          expect( 2 );

          equal( this.math.vector2.u[0], 1, "x is correct" );
          equal( this.math.vector2.u[1], 0, "y is correct" );
        });

        test( "y vector", function() {
          expect( 2 );

          equal( this.math.vector2.y[0], 0, "x is correct" );
          equal( this.math.vector2.y[1], 1, "y is correct" );
        });

        test( "v vector", function() {
          expect( 2 );

          equal( this.math.vector2.v[0], 0, "x is correct" );
          equal( this.math.vector2.v[1], 1, "y is correct" );
        });

        test( "zero vector", function() {
          expect( 2 );

          equal( this.math.vector2.zero[0], 0, "x is correct" );
          equal( this.math.vector2.zero[1], 0, "y is correct" );
        });

        test( "one vector", function() {
          expect( 2 );

          equal( this.math.vector2.one[0], 1, "x is correct" );
          equal( this.math.vector2.one[1], 1, "y is correct" );
        });

    };
  }
);