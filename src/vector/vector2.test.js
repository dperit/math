define(
  [],
  function() {
    return function( _Math ) {

      module( "Vector2", {
        setup: function() {
          this.math = new _Math();
        },
        teardown: function() {
          this.math = null;
        }
      });

      test( "create an empty vector", function() {
        expect( 2 );

        var v = new this.math.Vector2();

        equal( v.x, 0, "x is correct" );
        equal( v.y, 0, "y is correct" );
      });

      test( "create a vector with given values", function() {
        expect( 2 );

        var v = new this.math.Vector2( 1, 2 );

        equal( v.x, 1, "x is correct" );
        equal( v.y, 2, "y is correct" );
      });

      test( "create a vector with given array", function() {
        expect( 2 );

        var v = new this.math.Vector2( [2, 3] );

        equal( v.x, 2, "x is correct" );
        equal( v.y, 3, "y is correct" );
      });

      test( "add with vector object", function() {
        expect( 5 );

        var v1 = new this.math.Vector2( 1, 2 );
        var v2 = new this.math.Vector2( 3, 4 );
        var result = v1.add( v2 );

        equal( v1.x, 4, "x is correct" );
        equal( v1.y, 6, "y is correct" );
        equal( v2.x, 3, "x is the same" );
        equal( v2.y, 4, "y is the same" );
        equal( result, v1, "add returns this" );
      });

      test( "add with typed array", function() {
        expect( 5 );

        var v1 = new this.math.Vector2( 2, 3 );
        var v2 = new this.math.V2( 4, 5 );
        var result = v1.add( v2 );

        equal( v1.x, 6, "x is correct" );
        equal( v1.y, 8, "y is correct" );
        equal( v2[0], 4, "x is the same" );
        equal( v2[1], 5, "y is the same" );
        equal( result, v1, "add returns this" );
      });

      test( "add with given array", function() {
        expect( 3 );

        var v1 = new this.math.Vector2( 2, 3 );
        var result = v1.add( [-1, 2] );

        equal( v1.x, 1, "x is correct" );
        equal( v1.y, 5, "y is correct" );
        equal( result, v1, "add returns this" );
      });

      test( "angle with vector object", function() {
        expect( 1 );

        var v1 = new this.math.Vector2( 1, 1 )
        var v2 = new this.math.Vector2( 2, 3 );
        var angle = v1.angle( v2 );

        equal( angle, this.math.vector2.angle( v1.buffer, v2.buffer ),
          "angle is corrct" );
      });

      test( "angle with typed array", function() {
        expect( 1 );

        var v1 = new this.math.Vector2( 2, 3 );
        var v2 = new this.math.V2( 4, 1 );
        var angle = v1.angle( v2 );

        equal( angle, this.math.vector2.angle( v1.buffer, v2 ),
          "angle is correct" );
      });

      test( "angle with given array", function() {
        expect( 1 );

        var v1 = new this.math.Vector2( 2, 3 );
        var v2 = [3, 2]
        var angle = v1.angle( v2 );

        equal( angle, this.math.vector2.angle( v1.buffer, v2 ),
          "angle is correct" );
      });

      test( "clear", function() {
        expect( 3 );

        var v = new this.math.Vector2( 3, 4 );
        var result = v.clear();

        equal( v.x, 0, "x is correct" );
        equal( v.y, 0, "y is correct" );
        equal( result, v, "clear returns this" );
      });

      test( "clone", function() {
        expect( 2 );

        var v1 = new this.math.Vector2( 1, 2 );
        var v2 = v1.clone();

        deepEqual( v1.buffer, v2.buffer, "vectors are equal" );
        v1.x = 4;
        v1.y = 5;
        notDeepEqual( v1.buffer, v2.buffer, "vectors are not equal" );
      });

      test( "dot with vector object", function() {
        expect( 5 );

        var v1 = new this.math.Vector2( 2, 3 );
        var v2 = new this.math.Vector2( 0, 1 );
        var result = v1.dot( v2 );

        equal( result, this.math.vector2.dot( v1.buffer, v2.buffer ), "result is correct" );
        equal( v1.x, 2, "x is the same" );
        equal( v1.y, 3, "y is the same" );
        equal( v2.x, 0, "x is the same" );
        equal( v2.y, 1, "y is the same" );
      });

      test( "dot with typed array", function() {
        expect( 5 );

        var v1 = new this.math.Vector2( 2, 3 );
        var v2 = new this.math.V2( 0, 1 );
        var result = v1.dot( v2 );

        equal( result, this.math.vector2.dot( v1.buffer, v2 ), "result is correct" );
        equal( v1.x, 2, "x is the same" );
        equal( v1.y, 3, "y is the same" );
        equal( v2[0], 0, "x is the same" );
        equal( v2[1], 1, "y is the same" );
      });

      test( "dot with given array", function() {
        expect( 5 );

        var v1 = new this.math.Vector2( 2, 3 );
        var v2 = [2, 4];
        var result = v1.dot( v2 );

        equal( result, this.math.vector2.dot( v1.buffer, v2 ), "result is correct" );
        equal( v1.x, 2, "x is the same" );
        equal( v1.y, 3, "y is the same" );
        equal( v2[0], 2, "x is the same" );
        equal( v2[1], 4, "y is the same" );
      });

      test( "equal with vector object", function() {
        expect( 2 );

        var v1 = new this.math.Vector2( 3, 4 );
        var v2 = new this.math.Vector2( 2, 3 );

        ok( v1.equal( v1 ), "vector is equal to itself" );
        ok( !v1.equal( v2 ), "vector not equal to different vector" );
      });

      test( "equal with typed array", function() {
        expect( 2 );

        var v1 = new this.math.Vector2( 1, 2 );
        var v2 = new this.math.V2( 3, 4 );

        ok( v1.equal( v1.buffer ), "vector is equal to itself" );
        ok( !v1.equal( v2 ), "vector not equal to different vector" );
      });

      test( "equal with given array", function() {
        expect( 2 );

        var v1 = new this.math.Vector2( 5, 2 );
        var v2 = [2, 3];

        ok( v1.equal( [5, 2] ), "vector is equal to itself" );
        ok( !v1.equal( v2 ), "vector is not equal to different vector" );
      });

      test( "length", function() {
        expect( 1 );

        var v = new this.math.Vector2( 4, 5 );
        var result = v.length();

        equal( result, this.math.vector2.length( v.buffer ), "length is correct" );
      });

      test( "multiply", function() {
        expect( 3 );

        var v = new this.math.Vector2( 1, 2 );
        var result = v.multiply( 4 );

        equal( v.x, 4, "x is correct" );
        equal( v.y, 8, "y is correct" );
        equal( result, v, "multiply returns this" );
      });

      test( "negate", function() {
        expect( 3 );

        var v = new this.math.Vector2( -1, 2 );
        var result = v.negate();

        equal( v.x, 1, "x is correct" );
        equal( v.y, -2, "y is correct" );
        equal( result, v, "negate return this" );
      });

      test( "normalize", function() {
        expect( 2 );

        var v = new this.math.Vector2( -1, 9 );
        var result = v.normalize();

        deepEqual( v.buffer, this.math.vector2.normalize( [-1, 9] ),
          "normalized vector is correct" );
        equal( result, v, "normalize returns this" );
      });

      test( "project with vector object", function() {
        expect( 2 );

        var v1 = new this.math.Vector2( -1, 9 );
        var v2 = new this.math.Vector2( 2, 3 );
        var result = v1.project( v2 );

        deepEqual( v1.buffer, this.math.vector2.project( v1.buffer, v2.buffer ),
          "projection is correct" );
        equal( result, v1, "project returns this" );
      });

      test( "project with typed array", function() {
        expect( 2 );

        var v1 = new this.math.Vector2( -1, 9 );
        var v2 = new this.math.V2( 2, 3 );
        var result = v1.project( v2 );

        deepEqual( v1.buffer, this.math.vector2.project( v1.buffer, v2 ),
          "projection is correct" );
        equal( result, v1, "project returns this" );
      });

      test( "project with given array", function() {
        expect( 2 );

        var v1 = new this.math.Vector2( -1, 9 );
        var v2 = [3, 4];
        var result = v1.project( v2 );

        deepEqual( v1.buffer, this.math.vector2.project( v1.buffer, v2 ),
          "projection is correct" );
        equal( result, v1, "project returns this" );
      });

      test( "set with vector object", function() {
        expect( 3 );

        var v1 = new this.math.Vector2( 1, 2 );
        var v2 = new this.math.Vector2( 3, 4 );
        v1.set( v2 );

        equal( v2.x, 3, "x is the same" );
        equal( v2.y, 4, "y is the same" );
        deepEqual( v1.buffer, v2.buffer, "vectors are the same" );
      });

      test( "set with typed array", function() {
        expect( 3 );

        var v1 = new this.math.Vector2( 1, 2 );
        var v2 = new this.math.V2( 3, 4 );
        v1.set( v2 );

        equal( v2[0], 3, "x is the same" );
        equal( v2[1], 4, "y is the same" );
        deepEqual( v1.buffer, v2, "vectors are the same" );
      });

      test( "set with given array", function() {
        expect( 4 );

        var v1 = new this.math.Vector2( 1, 2 );
        var v2 = [3, 4];
        v1.set( v2 );

        equal( v2[0], 3, "x is the same" );
        equal( v2[1], 4, "y is the same" );
        equal( v1.x, v2[0], "x components are equal" );
        equal( v1.y, v2[1], "y components are equal" );
      });

      test( "set with given values", function() {
        expect( 2 );

        var v1 = new this.math.Vector2( 1, 2 );
        v1.set( 3, 4 );

        equal( v1.x, 3, "x is the same" );
        equal( v1.y, 4, "y is the same" );
      });

      test( "subtract with vector object", function() {
        expect( 5 );

        var v1 = new this.math.Vector2( 1, 2 );
        var v2 = new this.math.Vector2( 3, 4 );
        var result = v1.subtract( v2 );

        equal( v1.x, -2, "x is correct" );
        equal( v1.y, -2, "y is correct" );
        equal( v2.x, 3, "x is the same" );
        equal( v2.y, 4, "y is the same" );
        equal( result, v1, "subtract returns this" );
      });

      test( "subtract with typed array", function() {
        expect( 5 );

        var v1 = new this.math.Vector2( 2, 3 );
        var v2 = new this.math.V2( 4, 5 );
        var result = v1.subtract( v2 );

        equal( v1.x, -2, "x is correct" );
        equal( v1.y, -2, "y is correct" );
        equal( v2[0], 4, "x is the same" );
        equal( v2[1], 5, "y is the same" );
        equal( result, v1, "subtract returns this" );
      });

      test( "subtract with given array", function() {
        expect( 3 );

        var v1 = new this.math.Vector2( 2, 3 );
        var result = v1.subtract( [-1, 2] );

        equal( v1.x, 3, "x is correct" );
        equal( v1.y, 1, "y is correct" );
        equal( result, v1, "subtract returns this" );
      });

    };
  }
);
