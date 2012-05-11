define(
    [],
    function() {
      return function( _Math ) {

        module( "vector2", {
          setup: function() {
            this.math = new _Math();
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

          var v = new this.math.V2( 1, 1 );

          equal( this.math.vector2.length( v ), Math.sqrt( 2 ),
            "length is correct" );
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

    };
  }
);