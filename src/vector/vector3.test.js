define(
  [],
  function() {
    return function( _Math ) {

      module( "Vector3", {
        setup: function() {
          this.math = _Math;
        },
        teardown: function() {
          this.math = null;
        }
      });

      test( "create an empty vector", function() {
        expect( 5 );

        var v = new this.math.Vector3();        

        ok( v.modified, "modified is set" );
        equal( v.x, 0, "x is correct" );
        equal( v.y, 0, "y is correct" );
        equal( v.z, 0, "z is correct" );
        ok( v instanceof this.math.Vector3, "type is correct" );
      });

      test( "create a vector with given values", function() {
        expect( 4 );

        var v = new this.math.Vector3( 1, 2, 3 );

        ok( v.modified, "modified is set" );
        equal( v.x, 1, "x is correct" );
        equal( v.y, 2, "y is correct" );
        equal( v.z, 3, "z is correct" );
      });

      test( "create a vector with given array", function() {
        expect( 4 );

        var v = new this.math.Vector3( [2, 3, 4] );

        ok( v.modified, "modified is set" );
        equal( v.x, 2, "x is correct" );
        equal( v.y, 3, "y is correct" );
        equal( v.z, 4, "z is correct" );
      });

      test( "create a vector smaller with vector", function() {
        expect( 3 );

        var v1 = new this.math.Vector2( 2, 3 );
        var v2 = new this.math.Vector3( v1, 4 );

        equal( v2.x, 2, "x is correct" );
        equal( v2.y, 3, "y is correct" );
        equal( v2.z, 4, "z is correct" );
      });

      test( "create a vector, pass extra parameters", function() {
        expect( 3 );

        var v = new this.math.V3( 2, 3, 4, 5, 6 );

        equal( v[0], 2, "x is correct" );
        equal( v[1], 3, "y is correct" );
        equal( v[2], 4, "z is correct" );
      });

      test( "add with vector object", function() {
        expect( 8 );

        var v1 = new this.math.Vector3( 1, 2, 3 );
        var v2 = new this.math.Vector3( 3, 4, 5 );
        v1.modified = false;
        var result = v1.add( v2 );
        ok( v1.modified, "modified is set" );

        equal( v1.x, 4, "x is correct" );
        equal( v1.y, 6, "y is correct" );
        equal( v1.z, 8, "z is correct" );
        equal( v2.x, 3, "x is the same" );
        equal( v2.y, 4, "y is the same" );
        equal( v2.z, 5, "z is the same" );
        equal( result, v1, "add returns this" );
      });

      test( "add with typed array", function() {
        expect( 8 );

        var v1 = new this.math.Vector3( 2, 3, 4 );
        var v2 = new this.math.V3( 4, 5, 6 );
        v1.modified = false;
        var result = v1.add( v2 );
        ok( v1.modified, "modified is set" );

        equal( v1.x, 6, "x is correct" );
        equal( v1.y, 8, "y is correct" );
        equal( v1.z, 10, "z is correct" );
        equal( v2[0], 4, "x is the same" );
        equal( v2[1], 5, "y is the same" );
        equal( v2[2], 6, "z is the same" );
        equal( result, v1, "add returns this" );
      });

      test( "add with given array", function() {
        expect( 5 );

        var v1 = new this.math.Vector3( 2, 3, 4 );
        v1.modified = false;
        var result = v1.add( [-1, 2, 5] );
        ok( v1.modified, "modified is set" );

        equal( v1.x, 1, "x is correct" );
        equal( v1.y, 5, "y is correct" );
        equal( v1.z, 9, "z is correct" );
        equal( result, v1, "add returns this" );
      });

      test( "add with result", function() {
        expect( 4 );

        var v1 = new this.math.Vector3( 2, 3, 4 );
        var result = new this.math.Vector3();
        result.modified = false;
        v1.add( [-1, 2, 4], result );
        ok( result.modified, "modified is set" );

        equal( result.x, 1, "x is correct" );
        equal( result.y, 5, "y is correct" );
        equal( result.z, 8, "z is correct" );
      });

      test( "angle with vector object", function() {
        expect( 1 );

        var v1 = new this.math.Vector3( 1, 1, 3 );
        var v2 = new this.math.Vector3( 2, 3, -1 );
        var angle = v1.angle( v2 );

        equal( angle, this.math.vector3.angle( v1.buffer, v2.buffer ),
          "angle is corrct" );
      });

      test( "angle with typed array", function() {
        expect( 1 );

        var v1 = new this.math.Vector3( 2, 3, 7 );
        var v2 = new this.math.V3( 4, 1, 2 );
        var angle = v1.angle( v2 );

        equal( angle, this.math.vector3.angle( v1.buffer, v2 ),
          "angle is correct" );
      });

      test( "angle with given array", function() {
        expect( 1 );

        var v1 = new this.math.Vector3( 2, 3, 2 );
        var v2 = [3, 2, 5];
        var angle = v1.angle( v2 );

        equal( angle, this.math.vector3.angle( v1.buffer, v2 ),
          "angle is correct" );
      });

      test( "clear", function() {
        expect( 5 );

        var v = new this.math.Vector3( 3, 4, 5 );
        v.modified = false;
        var result = v.clear();
        ok( v.modified, "modified is set" );

        equal( v.x, 0, "x is correct" );
        equal( v.y, 0, "y is correct" );
        equal( v.z, 0, "z is correct" );
        equal( result, v, "clear returns this" );
      });

      test( "clone", function() {
        expect( 2 );

        var v1 = new this.math.Vector3( 1, 2, 3 );
        var v2 = v1.clone();

        deepEqual( v1.buffer, v2.buffer, "vectors are equal" );
        v1.x = 4;
        v1.y = 5;
        v1.z = 6;
        notDeepEqual( v1.buffer, v2.buffer, "vectors are not equal" );
      });

      test( "cross with vector object", function() {
        expect( 2 );

        var v1 = new this.math.Vector3( 2, 3, 1 );
        var v2 = new this.math.Vector3( 4, 2, 6 );
        v1.modified = false;
        var result = v1.cross( v2 );
        ok( v1.modified, "modified is set" );

        deepEqual( result.buffer, this.math.vector3.cross( [2, 3, 1], [4, 2, 6] ), "result is correct" );
      });

      test( "cross with typed array", function() {
        expect( 2 );

        var v1 = new this.math.Vector3( 2, 3, 1 );
        var v2 = new this.math.V3( 4, 2, 6 );
        v1.modified = false;
        var result = v1.cross( v2 );
        ok( v1.modified, "modified is set" );

        deepEqual( result.buffer, this.math.vector3.cross( [2, 3, 1], [4, 2, 6] ), "result is correct" );
      });

      test( "cross with given array", function() {
        expect( 2 );

        var v1 = new this.math.Vector3( 2, 3, 1 );
        var v2 = [2, 4, 1];
        v1.modified = false;
        var result = v1.cross( v2 );
        ok( v1.modified, "modified is set" );

        deepEqual( result.buffer, this.math.vector3.cross( [2, 3, 1], [2, 4, 1] ), "result is correct" );
      });

      test( "cross with result", function() {
        expect( 2 );

        var v1 = new this.math.Vector3( 2, 3, 1 );
        var v2 = new this.math.Vector3( 4, 2, 6 );
        var result = new this.math.Vector3();
        result.modified = false;
        v1.cross( v2, result );
        ok( result.modified, "modified is set" );

        deepEqual( result.buffer, this.math.vector3.cross( v1.buffer, v2.buffer ), "result is correct" );
      });

      test( "dot with vector object", function() {
        expect( 7 );

        var v1 = new this.math.Vector3( 2, 3, 4 );
        var v2 = new this.math.Vector3( 0, 1, 6 );
        var result = v1.dot( v2 );

        equal( result, this.math.vector3.dot( v1.buffer, v2.buffer ), "result is correct" );
        equal( v1.x, 2, "x is the same" );
        equal( v1.y, 3, "y is the same" );
        equal( v1.z, 4, "z is the same" );
        equal( v2.x, 0, "x is the same" );
        equal( v2.y, 1, "y is the same" );
        equal( v2.z, 6, "z is the same" );
      });

      test( "dot with typed array", function() {
        expect( 7 );

        var v1 = new this.math.Vector3( 2, 3, 4 );
        var v2 = new this.math.V3( 0, 1, 2 );
        var result = v1.dot( v2 );

        equal( result, this.math.vector3.dot( v1.buffer, v2 ), "result is correct" );
        equal( v1.x, 2, "x is the same" );
        equal( v1.y, 3, "y is the same" );
        equal( v1.z, 4, "z is the same" );
        equal( v2[0], 0, "x is the same" );
        equal( v2[1], 1, "y is the same" );
        equal( v2[2], 2, "z is the same" );
      });

      test( "dot with given array", function() {
        expect( 7 );

        var v1 = new this.math.Vector3( 2, 3, 4 );
        var v2 = [2, 4, 6];
        var result = v1.dot( v2 );

        equal( result, this.math.vector3.dot( v1.buffer, v2 ), "result is correct" );
        equal( v1.x, 2, "x is the same" );
        equal( v1.y, 3, "y is the same" );
        equal( v1.z, 4, "z is the same" );
        equal( v2[0], 2, "x is the same" );
        equal( v2[1], 4, "y is the same" );
        equal( v2[2], 6, "z is the same" );
      });

      test( "equal with vector object", function() {
        expect( 2 );

        var v1 = new this.math.Vector3( 3, 4, 5 );
        var v2 = new this.math.Vector3( 2, 3, 4 );

        ok( v1.equal( v1 ), "vector is equal to itself" );
        ok( !v1.equal( v2 ), "vector not equal to different vector" );
      });

      test( "equal with typed array", function() {
        expect( 2 );

        var v1 = new this.math.Vector3( 1, 2, 3 );
        var v2 = new this.math.V3( 3, 4, 5 );

        ok( v1.equal( v1.buffer ), "vector is equal to itself" );
        ok( !v1.equal( v2 ), "vector not equal to different vector" );
      });

      test( "equal with given array", function() {
        expect( 2 );

        var v1 = new this.math.Vector3( 5, 2, 1 );
        var v2 = [2, 3, 5];

        ok( v1.equal( [5, 2, 1] ), "vector is equal to itself" );
        ok( !v1.equal( v2 ), "vector is not equal to different vector" );
      });

      test( "length", function() {
        expect( 1 );

        var v = new this.math.Vector3( 4, 5, 9 );
        var result = v.length();

        equal( result, this.math.vector3.length( v.buffer ), "length is correct" );
      });

      test( "multiply", function() {
        expect( 5 );

        var v = new this.math.Vector3( 1, 2, 5 );
        v.modified = false;
        var result = v.multiply( 4 );
        ok( v.modified, "modified is set" );

        equal( v.x, 4, "x is correct" );
        equal( v.y, 8, "y is correct" );
        equal( v.z, 20, "z is correct" );
        equal( result, v, "multiply returns this" );
      });

      test( "multiply with result", function() {
        expect( 4 );

        var v = new this.math.Vector3( 1, 2, 5 );
        var result = new this.math.Vector3();
        result.modified = false;
        v.multiply( 4, result );
        ok( result.modified, "modified is set" );

        equal( result.x, 4, "x is correct" );
        equal( result.y, 8, "y is correct" );
        equal( result.z, 20, "z is correct" );
      });



      test( "negate", function() {
        expect( 5 );

        var v = new this.math.Vector3( -1, 2, 4 );
        v.modified = false;
        var result = v.negate();
        ok( v.modified, "modified is set" );

        equal( v.x, 1, "x is correct" );
        equal( v.y, -2, "y is correct" );
        equal( v.z, -4, "z is correct" );
        equal( result, v, "negate return this" );
      });

      test( "negate with result", function() {
        expect( 4 );

        var v = new this.math.Vector3( -1, 2, 3 );
        var result = new this.math.Vector3();
        result.modified = false;
        v.negate( result );
        ok( result.modified, "modified is set" );

        equal( result.x, 1, "x is correct" );
        equal( result.y, -2, "y is correct" );
        equal( result.z, -3, "z is correct" );
      });

      test( "normalize", function() {
        expect( 3 );

        var v = new this.math.Vector3( -1, 9, 2 );
        v.modified = false;
        var result = v.normalize();
        ok( v.modified, "modified is set" );

        deepEqual( v.buffer, this.math.vector3.normalize( [-1, 9, 2] ),
          "normalized vector is correct" );
        equal( result, v, "normalize returns this" );
      });

      test( "normalize with result", function() {
        expect( 2 );

        var v = new this.math.Vector3( -1, 9, 3 );
        var result = new this.math.Vector3();
        result.modified = false;
        v.normalize( result );
        ok( result.modified, "modified is set" );

        deepEqual( result.buffer, this.math.vector3.normalize( [-1, 9, 3] ),
          "normalized vector is correct" );
      });

      test( "set with vector object", function() {
        expect( 5 );

        var v1 = new this.math.Vector3( 1, 2, 3 );
        var v2 = new this.math.Vector3( 3, 4, 5 );
        v1.modified = false;
        v1.set( v2 );
        ok( v1.modified, "modified is set" );

        equal( v2.x, 3, "x is the same" );
        equal( v2.y, 4, "y is the same" );
        equal( v2.z, 5, "z is the same" );
        deepEqual( v1.buffer, v2.buffer, "vectors are the same" );
      });

      test( "set with typed array", function() {
        expect( 5 );

        var v1 = new this.math.Vector3( 1, 2, 3 );
        var v2 = new this.math.V3( 3, 4, 5 );
        v1.modified = false;
        v1.set( v2 );
        ok( v1.modified, "modified is set" );

        equal( v2[0], 3, "x is the same" );
        equal( v2[1], 4, "y is the same" );
        equal( v2[2], 5, "z is the same" );
        deepEqual( v1.buffer, v2, "vectors are the same" );
      });

      test( "set with given array", function() {
        expect( 7 );

        var v1 = new this.math.Vector3( 1, 2, 3 );
        var v2 = [3, 4, 5];
        v1.modified = false;
        v1.set( v2 );
        ok( v1.modified, "modified is set" );

        equal( v2[0], 3, "x is the same" );
        equal( v2[1], 4, "y is the same" );
        equal( v2[2], 5, "y is the same" );
        equal( v1.x, v2[0], "x components are equal" );
        equal( v1.y, v2[1], "y components are equal" );
        equal( v1.z, v2[2], "z components are equal" );
      });

      test( "set with given values", function() {
        expect( 4 );

        var v1 = new this.math.Vector3( 1, 2, 3 );
        v1.modified = false;
        v1.set( 3, 4, 5 );
        ok( v1.modified, "modified is set" );

        equal( v1.x, 3, "x is the same" );
        equal( v1.y, 4, "y is the same" );
        equal( v1.z, 5, "z is the same" );
      });

      test( "subtract with vector object", function() {
        expect( 8 );

        var v1 = new this.math.Vector3( 1, 2, 3 );
        var v2 = new this.math.Vector3( 3, 4, 2 );
        v1.modified = false;
        var result = v1.subtract( v2 );
        ok( v1.modified, "modified is set" );

        equal( v1.x, -2, "x is correct" );
        equal( v1.y, -2, "y is correct" );
        equal( v1.z, 1, "z is correct" );
        equal( v2.x, 3, "x is the same" );
        equal( v2.y, 4, "y is the same" );
        equal( v2.z, 2, "z is the same" );
        equal( result, v1, "subtract returns this" );
      });

      test( "subtract with typed array", function() {
        expect( 8 );

        var v1 = new this.math.Vector3( 2, 3, 5 );
        var v2 = new this.math.V3( 4, 5, 1 );
        v1.modified = false;
        var result = v1.subtract( v2 );
        ok( v1.modified, "modified is set" );

        equal( v1.x, -2, "x is correct" );
        equal( v1.y, -2, "y is correct" );
        equal( v1.z, 4, "z is correct" );
        equal( v2[0], 4, "x is the same" );
        equal( v2[1], 5, "y is the same" );
        equal( v2[2], 1, "z is the same" );
        equal( result, v1, "subtract returns this" );
      });

      test( "subtract with given array", function() {
        expect( 5 );

        var v1 = new this.math.Vector3( 2, 3, 1 );
        v1.modified = false;
        var result = v1.subtract( [-1, 2, 3] );
        ok( v1.modified, "modified is set" );

        equal( v1.x, 3, "x is correct" );
        equal( v1.y, 1, "y is correct" );
        equal( v1.z, -2, "z is correct" );
        equal( result, v1, "subtract returns this" );
      });

      test( "subtract with result", function() {
        expect( 4 );

        var v1 = new this.math.Vector3( 2, 3, 4 );
        var result = new this.math.Vector3();
        result.modified = false;
        v1.subtract( [-1, 2, 1], result );
        ok( result.modified, "modified is set" );

        equal( result.x, 3, "x is correct" );
        equal( result.y, 1, "y is correct" );
        equal( result.z, 3, "z is correct" );
      });

      test( "transform", function() {
        expect( 5 );

        var m = new this.math.Matrix3( 1, 2, 3,
          4, 5, 6,
          7, 8, 9 );

        var v = new this.math.Vector3( 1, 2, 3 );
        v.modified = false;
        var expected = this.math.vector3.transform(v.buffer, m.buffer);
        var result = v.transform( m );
        ok( v.modified, "modified is set" );

        equal( v.x, expected[0], "x is correct" );
        equal( v.y, expected[1], "y is correct" );
        equal( v.z, expected[2], "z is correct" );
        equal( result, v, "multiply returns this" );
      });

      test( "transform with result", function() {
        expect( 5 );

        var m = new this.math.Matrix3( 1, 2, 3,
          4, 5, 6,
          7, 8, 9 );

        var v = new this.math.Vector3( 1, 2, 3 );
        var result = new this.math.Vector3();
        result.modified = false;
        var expected = this.math.vector3.transform(v.buffer, m.buffer);
        var returned = v.transform( m, result );
        ok( result.modified, "modified is set" );

        equal( result.x, expected[0], "x is correct" );
        equal( result.y, expected[1], "y is correct" );
        equal( result.z, expected[2], "z is correct" );
        equal( returned, v, "multiply returns this" );
      });

    };
  }
);
