define(
  [],
  function() {
    return function( _Math ) {

      module( "Vector4", {
        setup: function() {
          this.math = _Math;
        },
        teardown: function() {
          this.math = null;
        }
      });

      test( "create an empty vector", function() {
        expect( 5 );

        var v = new this.math.Vector4();        

        ok( v.modified, "modified is set" );
        equal( v.x, 0, "x is correct" );
        equal( v.y, 0, "y is correct" );
        equal( v.z, 0, "z is correct" );
        equal( v.w, 0, "w is correct" );
      });

      test( "create a vector with given values", function() {
        expect( 5 );

        var v = new this.math.Vector4( 1, 2, 3, 4 );

        ok( v.modified, "modified is set" );
        equal( v.x, 1, "x is correct" );
        equal( v.y, 2, "y is correct" );
        equal( v.z, 3, "z is correct" );
        equal( v.w, 4, "w is correct" );
      });

      test( "create a vector with given array", function() {
        expect( 5 );

        var v = new this.math.Vector4( [2, 3, 4, 5] );

        ok( v.modified, "modified is set" );
        equal( v.x, 2, "x is correct" );
        equal( v.y, 3, "y is correct" );
        equal( v.z, 4, "z is correct" );
        equal( v.w, 5, "w is correct" );
      });

      test( "add with vector object", function() {
        expect( 10 );

        var v1 = new this.math.Vector4( 1, 2, 3, 4 );
        var v2 = new this.math.Vector4( 3, 4, 5, 6 );
        v1.modified = false;
        var result = v1.add( v2 );
        ok( v1.modified, "modified is set" );

        equal( v1.x, 4, "x is correct" );
        equal( v1.y, 6, "y is correct" );
        equal( v1.z, 8, "z is correct" );
        equal( v1.w, 10, "w is correct" );
        equal( v2.x, 3, "x is the same" );
        equal( v2.y, 4, "y is the same" );
        equal( v2.z, 5, "z is the same" );
        equal( v2.w, 6, "w is the same" );
        equal( result, v1, "add returns this" );
      });

      test( "add with typed array", function() {
        expect( 10 );

        var v1 = new this.math.Vector4( 2, 3, 4, 5 );
        var v2 = new this.math.V4( 4, 5, 6, 7 );
        v1.modified = false;
        var result = v1.add( v2 );
        ok( v1.modified, "modified is set" );

        equal( v1.x, 6, "x is correct" );
        equal( v1.y, 8, "y is correct" );
        equal( v1.z, 10, "z is correct" );
        equal( v1.w, 12, "w is correct" );
        equal( v2[0], 4, "x is the same" );
        equal( v2[1], 5, "y is the same" );
        equal( v2[2], 6, "z is the same" );
        equal( v2[3], 7, "w is the same" );
        equal( result, v1, "add returns this" );
      });

      test( "add with given array", function() {
        expect( 6 );

        var v1 = new this.math.Vector4( 2, 3, 4, 5 );
        v1.modified = false;
        var result = v1.add( [-1, 2, 5, 6] );
        ok( v1.modified, "modified is set" );

        equal( v1.x, 1, "x is correct" );
        equal( v1.y, 5, "y is correct" );
        equal( v1.z, 9, "z is correct" );
        equal( v1.w, 11, "w is correct" );
        equal( result, v1, "add returns this" );
      });

      test( "add with result", function() {
        expect( 5 );

        var v1 = new this.math.Vector4( 2, 3, 4, 5 );
        var result = new this.math.Vector4();
        result.modified = false;
        v1.add( [-1, 2, 4, 3], result );
        ok( result.modified, "modified is set" );

        equal( result.x, 1, "x is correct" );
        equal( result.y, 5, "y is correct" );
        equal( result.z, 8, "z is correct" );
        equal( result.w, 8, "w is correct" );
      });

      test( "angle with vector object", function() {
        expect( 1 );

        var v1 = new this.math.Vector4( 1, 1, 3, 4 )
        var v2 = new this.math.Vector4( 2, 3, -1, 5 );
        var angle = v1.angle( v2 );

        equal( angle, this.math.vector4.angle( v1.buffer, v2.buffer ),
          "angle is corrct" );
      });

      test( "angle with typed array", function() {
        expect( 1 );

        var v1 = new this.math.Vector4( 2, 3, 7, 6 );
        var v2 = new this.math.V4( 4, 1, 2, 9 );
        var angle = v1.angle( v2 );

        equal( angle, this.math.vector4.angle( v1.buffer, v2 ),
          "angle is correct" );
      });

      test( "angle with given array", function() {
        expect( 1 );

        var v1 = new this.math.Vector4( 2, 3, 2, 5 );
        var v2 = [3, 2, 5, 7]
        var angle = v1.angle( v2 );

        equal( angle, this.math.vector4.angle( v1.buffer, v2 ),
          "angle is correct" );
      });

      test( "clear", function() {
        expect( 6 );

        var v = new this.math.Vector4( 3, 4, 5, 6 );
        v.modified = false;
        var result = v.clear();
        ok( v.modified, "modified is set" );

        equal( v.x, 0, "x is correct" );
        equal( v.y, 0, "y is correct" );
        equal( v.z, 0, "z is correct" );
        equal( v.w, 0, "w is correct" );
        equal( result, v, "clear returns this" );
      });

      test( "clone", function() {
        expect( 2 );

        var v1 = new this.math.Vector4( 1, 2, 3, 4 );
        var v2 = v1.clone();

        deepEqual( v1.buffer, v2.buffer, "vectors are equal" );
        v1.x = 4;
        v1.y = 5;
        v1.z = 6;
        v1.w = 7;
        notDeepEqual( v1.buffer, v2.buffer, "vectors are not equal" );
      });

      test( "dot with vector object", function() {
        expect( 9 );

        var v1 = new this.math.Vector4( 2, 3, 4, 6 );
        var v2 = new this.math.Vector4( 0, 1, 6, 2 );
        var result = v1.dot( v2 );

        equal( result, this.math.vector4.dot( v1.buffer, v2.buffer ), "result is correct" );
        equal( v1.x, 2, "x is the same" );
        equal( v1.y, 3, "y is the same" );
        equal( v1.z, 4, "z is the same" );
        equal( v1.w, 6, "w is the same" );
        equal( v2.x, 0, "x is the same" );
        equal( v2.y, 1, "y is the same" );
        equal( v2.z, 6, "z is the same" );
        equal( v2.w, 2, "w is the same" );
      });

      test( "dot with typed array", function() {
        expect( 9 );

        var v1 = new this.math.Vector4( 2, 3, 4, 5 );
        var v2 = new this.math.V4( 0, 1, 2, 3 );
        var result = v1.dot( v2 );

        equal( result, this.math.vector4.dot( v1.buffer, v2 ), "result is correct" );
        equal( v1.x, 2, "x is the same" );
        equal( v1.y, 3, "y is the same" );
        equal( v1.z, 4, "z is the same" );
        equal( v1.w, 5, "w is the same" );
        equal( v2[0], 0, "x is the same" );
        equal( v2[1], 1, "y is the same" );
        equal( v2[2], 2, "z is the same" );
        equal( v2[3], 3, "w is the same" );
      });

      test( "dot with given array", function() {
        expect( 9 );

        var v1 = new this.math.Vector4( 2, 3, 4, 7 );
        var v2 = [2, 4, 6, 1];
        var result = v1.dot( v2 );

        equal( result, this.math.vector4.dot( v1.buffer, v2 ), "result is correct" );
        equal( v1.x, 2, "x is the same" );
        equal( v1.y, 3, "y is the same" );
        equal( v1.z, 4, "z is the same" );
        equal( v1.w, 7, "w is the same" );
        equal( v2[0], 2, "x is the same" );
        equal( v2[1], 4, "y is the same" );
        equal( v2[2], 6, "z is the same" );
        equal( v2[3], 1, "w is the same" );
      });

      test( "equal with vector object", function() {
        expect( 2 );

        var v1 = new this.math.Vector4( 3, 4, 5, 6 );
        var v2 = new this.math.Vector4( 2, 3, 4, 5 );

        ok( v1.equal( v1 ), "vector is equal to itself" );
        ok( !v1.equal( v2 ), "vector not equal to different vector" );
      });

      test( "equal with typed array", function() {
        expect( 2 );

        var v1 = new this.math.Vector4( 1, 2, 3, 6 );
        var v2 = new this.math.V4( 3, 4, 5, 2 );

        ok( v1.equal( v1.buffer ), "vector is equal to itself" );
        ok( !v1.equal( v2 ), "vector not equal to different vector" );
      });

      test( "equal with given array", function() {
        expect( 2 );

        var v1 = new this.math.Vector4( 5, 2, 1, 9 );
        var v2 = [2, 3, 5, 6];

        ok( v1.equal( [5, 2, 1, 9] ), "vector is equal to itself" );
        ok( !v1.equal( v2 ), "vector is not equal to different vector" );
      });

      test( "length", function() {
        expect( 1 );

        var v = new this.math.Vector4( 4, 5, 9, 7 );
        var result = v.length();

        equal( result, this.math.vector4.length( v.buffer ), "length is correct" );
      });

      test( "multiply", function() {
        expect( 6 );

        var v = new this.math.Vector4( 1, 2, 5, 3 );
        v.modified = false;
        var result = v.multiply( 4 );
        ok( v.modified, "modified is set" );

        equal( v.x, 4, "x is correct" );
        equal( v.y, 8, "y is correct" );
        equal( v.z, 20, "z is correct" );
        equal( v.w, 12, "w is correct" );
        equal( result, v, "multiply returns this" );
      });

      test( "multiply with result", function() {
        expect( 5 );

        var v = new this.math.Vector4( 1, 2, 5, 4 );
        var result = new this.math.Vector4();
        result.modified = false;
        v.multiply( 4, result );
        ok( result.modified, "modified is set" );

        equal( result.x, 4, "x is correct" );
        equal( result.y, 8, "y is correct" );
        equal( result.z, 20, "z is correct" );
        equal( result.w, 16, "w is correct" );
      });

      test( "negate", function() {
        expect( 6 );

        var v = new this.math.Vector4( -1, 2, 4, -2 );
        v.modified = false;
        var result = v.negate();
        ok( v.modified, "modified is set" );

        equal( v.x, 1, "x is correct" );
        equal( v.y, -2, "y is correct" );
        equal( v.z, -4, "z is correct" );
        equal( v.w, 2, "w is correct" );
        equal( result, v, "negate return this" );
      });

      test( "negate with result", function() {
        expect( 5 );

        var v = new this.math.Vector4( -1, 2, 3, -9 );
        var result = new this.math.Vector4();
        result.modified = false;
        v.negate( result );
        ok( result.modified, "modified is set" );

        equal( result.x, 1, "x is correct" );
        equal( result.y, -2, "y is correct" );
        equal( result.z, -3, "z is correct" );
        equal( result.w, 9, "w is correct" );
      });

      test( "normalize", function() {
        expect( 3 );

        var v = new this.math.Vector4( -1, 9, 2, 3 );
        v.modified = false;
        var result = v.normalize();
        ok( v.modified, "modified is set" );

        deepEqual( v.buffer, this.math.vector4.normalize( [-1, 9, 2, 3] ),
          "normalized vector is correct" );
        equal( result, v, "normalize returns this" );
      });

      test( "normalize with result", function() {
        expect( 2 );

        var v = new this.math.Vector4( -1, 9, 3, 2 );
        var result = new this.math.Vector4();
        result.modified = false;
        v.normalize( result );
        ok( result.modified, "modified is set" );

        deepEqual( result.buffer, this.math.vector4.normalize( [-1, 9, 3, 2] ),
          "normalized vector is correct" );
      });

      test( "set with vector object", function() {
        expect( 6 );

        var v1 = new this.math.Vector4( 1, 2, 3, 4 );
        var v2 = new this.math.Vector4( 3, 4, 5, 6 );
        v1.modified = false;
        v1.set( v2 );
        ok( v1.modified, "modified is set" );

        equal( v2.x, 3, "x is the same" );
        equal( v2.y, 4, "y is the same" );
        equal( v2.z, 5, "z is the same" );
        equal( v2.w, 6, "w is the same" );
        deepEqual( v1.buffer, v2.buffer, "vectors are the same" );
      });

      test( "set with typed array", function() {
        expect( 6 );

        var v1 = new this.math.Vector4( 1, 2, 3, 4 );
        var v2 = new this.math.V4( 3, 4, 5, 6 );
        v1.modified = false;
        v1.set( v2 );
        ok( v1.modified, "modified is set" );

        equal( v2[0], 3, "x is the same" );
        equal( v2[1], 4, "y is the same" );
        equal( v2[2], 5, "z is the same" );
        equal( v2[3], 6, "w is the same" );
        deepEqual( v1.buffer, v2, "vectors are the same" );
      });

      test( "set with given array", function() {
        expect( 9 );

        var v1 = new this.math.Vector4( 1, 2, 3, 4 );
        var v2 = [3, 4, 5, 6];
        v1.modified = false;
        v1.set( v2 );
        ok( v1.modified, "modified is set" );

        equal( v2[0], 3, "x is the same" );
        equal( v2[1], 4, "y is the same" );
        equal( v2[2], 5, "y is the same" );
        equal( v2[3], 6, "y is the same" );
        equal( v1.x, v2[0], "x components are equal" );
        equal( v1.y, v2[1], "y components are equal" );
        equal( v1.z, v2[2], "z components are equal" );
        equal( v1.w, v2[3], "w components are equal" );
      });

      test( "set with given values", function() {
        expect( 5 );

        var v1 = new this.math.Vector4( 1, 2, 3, 4 );
        v1.modified = false;
        v1.set( 3, 4, 5, 6 );
        ok( v1.modified, "modified is set" );

        equal( v1.x, 3, "x is the same" );
        equal( v1.y, 4, "y is the same" );
        equal( v1.z, 5, "z is the same" );
        equal( v1.w, 6, "w is the same" );
      });

      test( "subtract with vector object", function() {
        expect( 10 );

        var v1 = new this.math.Vector4( 1, 2, 3, 4 );
        var v2 = new this.math.Vector4( 3, 4, 2, 1 );
        v1.modified = false;
        var result = v1.subtract( v2 );
        ok( v1.modified, "modified is set" );

        equal( v1.x, -2, "x is correct" );
        equal( v1.y, -2, "y is correct" );
        equal( v1.z, 1, "z is correct" );
        equal( v1.w, 3, "w is correct" );
        equal( v2.x, 3, "x is the same" );
        equal( v2.y, 4, "y is the same" );
        equal( v2.z, 2, "z is the same" );
        equal( v2.w, 1, "w is the same" );
        equal( result, v1, "subtract returns this" );
      });

      test( "subtract with typed array", function() {
        expect( 10 );

        var v1 = new this.math.Vector4( 2, 3, 5, 4 );
        var v2 = new this.math.V4( 4, 5, 1, 2 );
        v1.modified = false;
        var result = v1.subtract( v2 );
        ok( v1.modified, "modified is set" );

        equal( v1.x, -2, "x is correct" );
        equal( v1.y, -2, "y is correct" );
        equal( v1.z, 4, "z is correct" );
        equal( v1.w, 2, "w is correct" );
        equal( v2[0], 4, "x is the same" );
        equal( v2[1], 5, "y is the same" );
        equal( v2[2], 1, "z is the same" );
        equal( v2[3], 2, "w is the same" );
        equal( result, v1, "subtract returns this" );
      });

      test( "subtract with given array", function() {
        expect( 6 );

        var v1 = new this.math.Vector4( 2, 3, 1, 0 );
        v1.modified = false;
        var result = v1.subtract( [-1, 2, 3, 1] );
        ok( v1.modified, "modified is set" );

        equal( v1.x, 3, "x is correct" );
        equal( v1.y, 1, "y is correct" );
        equal( v1.z, -2, "z is correct" );
        equal( v1.w, -1, "w is correct" );
        equal( result, v1, "subtract returns this" );
      });

      test( "subtract with result", function() {
        expect( 5 );

        var v1 = new this.math.Vector4( 2, 3, 4, 5 );
        var result = new this.math.Vector4();
        result.modified = false;
        v1.subtract( [-1, 2, 1, 5], result );
        ok( result.modified, "modified is set" );

        equal( result.x, 3, "x is correct" );
        equal( result.y, 1, "y is correct" );
        equal( result.z, 3, "z is correct" );
        equal( result.w, 0, "w is correct" );
      });

    };
  }
);
