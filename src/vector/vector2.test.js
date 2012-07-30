define(
  [],
  function() {
    return function( _Math ) {

      module( "Vector2", {
        setup: function() {
          this.math = _Math;
        },
        teardown: function() {
          this.math = null;
        }
      });

      test( "create an empty vector", function() {
        expect( 3 );

        var v = new this.math.Vector2();

        equal( v.x, 0, "x is correct" );
        equal( v.y, 0, "y is correct" );
        ok( v.modified, "modified is set" );
      });

      test( "create a vector with given values", function() {
        expect( 3 );

        var v = new this.math.Vector2( 1, 2 );

        equal( v.x, 1, "x is correct" );
        equal( v.y, 2, "y is correct" );
        ok( v.modified, "modified is set" );
      });

      test( "create a vector with given array", function() {
        expect( 3 );

        var v = new this.math.Vector2( [2, 3] );

        equal( v.x, 2, "x is correct" );
        equal( v.y, 3, "y is correct" );
        ok( v.modified, "modified is set" );
      });

      test( "create a vector, pass extra parameters", function() {
        expect( 2 );

        var v = new this.math.V2( 2, 3, 4, 5, 6 );

        equal( v[0], 2, "x is correct" );
        equal( v[1], 3, "y is correct" );
      });

      test( "add with vector object", function() {
        expect( 6 );

        var v1 = new this.math.Vector2( 1, 2 );
        var v2 = new this.math.Vector2( 3, 4 );
        v1.modified = false;
        var result = v1.add( v2 );
        ok( v1.modified, "modified is set" );

        equal( v1.x, 4, "x is correct" );
        equal( v1.y, 6, "y is correct" );
        equal( v2.x, 3, "x is the same" );
        equal( v2.y, 4, "y is the same" );
        equal( result, v1, "add returns this" );
      });

      test( "add with typed array", function() {
        expect( 6 );

        var v1 = new this.math.Vector2( 2, 3 );
        var v2 = new this.math.V2( 4, 5 );
        v1.modified = false;
        var result = v1.add( v2 );
        ok( v1.modified, "modified is set" );

        equal( v1.x, 6, "x is correct" );
        equal( v1.y, 8, "y is correct" );
        equal( v2[0], 4, "x is the same" );
        equal( v2[1], 5, "y is the same" );
        equal( result, v1, "add returns this" );
      });

      test( "add with given array", function() {
        expect( 4 );

        var v1 = new this.math.Vector2( 2, 3 );
        v1.modified = false;
        var result = v1.add( [-1, 2] );
        ok( v1.modified, "modified is set" );

        equal( v1.x, 1, "x is correct" );
        equal( v1.y, 5, "y is correct" );
        equal( result, v1, "add returns this" );
      });

      test( "add with result", function() {
        expect( 3 );

        var v1 = new this.math.Vector2( 2, 3 );
        var result = new this.math.Vector2();
        result.modified = false;
        v1.add( [-1, 2], result );
        ok( result.modified, "modified is set" );

        equal( result.x, 1, "x is correct" );
        equal( result.y, 5, "y is correct" );
      });

      test( "angle with vector object", function() {
        expect( 1 );

        var v1 = new this.math.Vector2( 1, 1 );
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
        var v2 = [3, 2];
        var angle = v1.angle( v2 );

        equal( angle, this.math.vector2.angle( v1.buffer, v2 ),
          "angle is correct" );
      });

      test( "clear", function() {
        expect( 4 );

        var v = new this.math.Vector2( 3, 4 );
        v.modified = false;
        var result = v.clear();
        ok( v.modified, "modified is set" );

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

      test( "distance", function() {
        expect( 3 );

        var v1 = new this.math.Vector4( 3, 5 );
        var v2 = new this.math.Vector4( 13, 17 );
        var result = v1.distance(v2);
        var result2 = v2.distance(v1);

        equal( result, this.math.vector4.distance( v1.buffer, v2.buffer ), "distance from 1 to 2 is correct" );
        equal( result2, this.math.vector4.distance( v2.buffer, v1.buffer ), "distance from 2 to 1 is correct" );
        equal( result, result2, "distance is commutative" );
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

      test( "limit", function() {
        expect( 2 );
        var v = new this.math.Vector2( 3, 5 );
        var v2 = new this.math.Vector2( 1, 3 );
        var desiredLength = 4;
        var expectedResult = this.math.vector2.limit(new this.math.V2( 3, 5 ), desiredLength);
        var expectedResult2 = this.math.vector2.limit(new this.math.V2( 1, 3 ), desiredLength);
        v.limit(desiredLength);
        v2.limit(desiredLength);
        ok(this.math.vector2.equal( v.buffer, expectedResult ), "limit is correct" );
        ok(this.math.vector2.equal( v2.buffer, expectedResult2 ), "within limit is correct" );
      });

      test( "multiply", function() {
        expect( 4 );

        var v = new this.math.Vector2( 1, 2 );
        v.modified = false;
        var result = v.multiply( 4 );
        ok( v.modified, "modified is set" );

        equal( v.x, 4, "x is correct" );
        equal( v.y, 8, "y is correct" );
        equal( result, v, "multiply returns this" );
      });

      test( "multiply with result", function() {
        expect( 3 );

        var v = new this.math.Vector2( 1, 2 );
        var result = new this.math.Vector2();
        result.modified = false;
        v.multiply( 4, result );
        ok( result.modified, "modified is set" );

        equal( result.x, 4, "x is correct" );
        equal( result.y, 8, "y is correct" );
      });

      test( "negate", function() {
        expect( 4 );

        var v = new this.math.Vector2( -1, 2 );
        v.modified = false;
        var result = v.negate();
        ok( v.modified, "modified is set" );

        equal( v.x, 1, "x is correct" );
        equal( v.y, -2, "y is correct" );
        equal( result, v, "negate return this" );
      });

      test( "negate with result", function() {
        expect( 3 );

        var v = new this.math.Vector2( -1, 2 );
        var result = new this.math.Vector2();
        result.modified = false;
        v.negate( result );
        ok( result.modified, "modified is set" );

        equal( result.x, 1, "x is correct" );
        equal( result.y, -2, "y is correct" );
      });

      test( "normalize", function() {
        expect( 3 );

        var v = new this.math.Vector2( -1, 9 );
        v.modified = false;
        var result = v.normalize();
        ok( v.modified, "modified is set" );

        deepEqual( v.buffer, this.math.vector2.normalize( [-1, 9] ),
          "normalized vector is correct" );
        equal( result, v, "normalize returns this" );
      });

      test( "normalize with result", function() {
        expect( 2 );

        var v = new this.math.Vector2( -1, 9 );
        var result = new this.math.Vector2();
        result.modified = false;
        v.normalize( result );
        ok( result.modified, "modified is set" );

        deepEqual( result.buffer, this.math.vector2.normalize( [-1, 9] ),
          "normalized vector is correct" );
      });

      test( "project with vector object", function() {
        expect( 3 );

        var v1 = new this.math.Vector2( -1, 9 );
        var v2 = new this.math.Vector2( 2, 3 );
        v1.modified = false;
        var result = v1.project( v2 );
        ok( v1.modified, "modified is set" );

        deepEqual( v1.buffer, this.math.vector2.project( v1.buffer, v2.buffer ),
          "projection is correct" );
        equal( result, v1, "project returns this" );
      });

      test( "project with typed array", function() {
        expect( 3 );

        var v1 = new this.math.Vector2( -1, 9 );
        var v2 = new this.math.V2( 2, 3 );
        v1.modified = false;
        var result = v1.project( v2 );
        ok( v1.modified, "modified is set" );

        deepEqual( v1.buffer, this.math.vector2.project( v1.buffer, v2 ),
          "projection is correct" );
        equal( result, v1, "project returns this" );
      });

      test( "project with given array", function() {
        expect( 3 );

        var v1 = new this.math.Vector2( -1, 9 );
        var v2 = [3, 4];
        v1.modified = false;
        var result = v1.project( v2 );
        ok( v1.modified, "modified is set" );

        deepEqual( v1.buffer, this.math.vector2.project( v1.buffer, v2 ),
          "projection is correct" );
        equal( result, v1, "project returns this" );
      });

      test( "project with result", function() {
        expect( 2 );

        var v1 = new this.math.Vector2( -1, 9 );
        var v2 = [3, 4];
        var result = new this.math.Vector2();
        result.modified = false;
        v1.project( v2, result );
        ok( result.modified, "modified is set" );

        deepEqual( result.buffer, this.math.vector2.project( v1.buffer, v2 ),
          "projection is correct" );
      });

      test( "rotate", function(){
        expect();

        var v = new this.math.Vector2( -3, 7 );
        var r = 3.9;
        var result = new this.math.Vector2();
        var result2 = v.rotate(r, result);
        var vResult = this.math.vector2.rotate(v.buffer, r);
        v.rotate(r);
        equal(result, result2, "result is both set and returned");
        deepEqual(result.buffer, vResult, "calls vector API functions correctly");
        deepEqual(v.buffer, vResult, "result-less call will put results in object that called it");
      });

      test( "set with vector object", function() {
        expect( 4 );

        var v1 = new this.math.Vector2( 1, 2 );
        var v2 = new this.math.Vector2( 3, 4 );
        v1.modified = false;
        v1.set( v2 );
        ok( v1.modified, "modified is set" );

        equal( v2.x, 3, "x is the same" );
        equal( v2.y, 4, "y is the same" );
        deepEqual( v1.buffer, v2.buffer, "vectors are the same" );
      });

      test( "set with typed array", function() {
        expect( 4 );

        var v1 = new this.math.Vector2( 1, 2 );
        var v2 = new this.math.V2( 3, 4 );
        v1.modified = false;
        v1.set( v2 );
        ok( v1.modified, "modified is set" );

        equal( v2[0], 3, "x is the same" );
        equal( v2[1], 4, "y is the same" );
        deepEqual( v1.buffer, v2, "vectors are the same" );
      });

      test( "set with given array", function() {
        expect( 5 );

        var v1 = new this.math.Vector2( 1, 2 );
        var v2 = [3, 4];
        v1.modified = false;
        v1.set( v2 );
        ok( v1.modified, "modified is set" );

        equal( v2[0], 3, "x is the same" );
        equal( v2[1], 4, "y is the same" );
        equal( v1.x, v2[0], "x components are equal" );
        equal( v1.y, v2[1], "y components are equal" );
      });

      test( "set with given values", function() {
        expect( 3 );

        var v1 = new this.math.Vector2( 1, 2 );
        v1.modified = false;
        v1.set( 3, 4 );
        ok( v1.modified, "modified is set" );

        equal( v1.x, 3, "x is the same" );
        equal( v1.y, 4, "y is the same" );
      });

      test( "subtract with vector object", function() {
        expect( 6 );

        var v1 = new this.math.Vector2( 1, 2 );
        var v2 = new this.math.Vector2( 3, 4 );
        v1.modified = false;
        var result = v1.subtract( v2 );
        ok( v1.modified, "modified is set" );

        equal( v1.x, -2, "x is correct" );
        equal( v1.y, -2, "y is correct" );
        equal( v2.x, 3, "x is the same" );
        equal( v2.y, 4, "y is the same" );
        equal( result, v1, "subtract returns this" );
      });

      test( "subtract with typed array", function() {
        expect( 6 );

        var v1 = new this.math.Vector2( 2, 3 );
        var v2 = new this.math.V2( 4, 5 );
        v1.modified = false;
        var result = v1.subtract( v2 );
        ok( v1.modified, "modified is set" );

        equal( v1.x, -2, "x is correct" );
        equal( v1.y, -2, "y is correct" );
        equal( v2[0], 4, "x is the same" );
        equal( v2[1], 5, "y is the same" );
        equal( result, v1, "subtract returns this" );
      });

      test( "subtract with given array", function() {
        expect( 4 );

        var v1 = new this.math.Vector2( 2, 3 );
        v1.modified = false;
        var result = v1.subtract( [-1, 2] );
        ok( v1.modified, "modified is set" );

        equal( v1.x, 3, "x is correct" );
        equal( v1.y, 1, "y is correct" );
        equal( result, v1, "subtract returns this" );
      });

      test( "subtract with result", function() {
        expect( 3 );

        var v1 = new this.math.Vector2( 2, 3 );
        var result = new this.math.Vector2();
        result.modified = false;
        v1.subtract( [-1, 2], result );
        ok( result.modified, "modified is set" );

        equal( result.x, 3, "x is correct" );
        equal( result.y, 1, "y is correct" );
      });

    };
  }
);
