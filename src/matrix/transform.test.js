define(
  [],
  function() {
    return function( _Math ) {

      module( "Transform", {
        setup: function() {
          this.math = _Math;
        },
        teardown: function() {
          this.math = null;
        }
      });

      test( "create an empty transform", function() {
        expect( 2 );

        var transform = new this.math.Transform();
        ok( transform.modified, "modified is set" );
        ok( this.math.matrix4.equal( transform.buffer, this.math.matrix4.identity ), 
          "transform is correct" );
      });

      test( "create a transform with a position", function() {
        expect( 2 );

        var transform = new this.math.Transform( [1, 2, 3] );
        var expected = this.math.transform.translate( [1, 2, 3] );
        ok( transform.modified, "modified is set" );
        ok( this.math.matrix4.equal( transform.buffer, expected ), 
          "transform is correct" );
      });

      test( "create a transform with a rotation", function() {
        expect( 2 );

        var transform = new this.math.Transform( null, [1, 2, 3] );
        var expected = this.math.transform.rotate( [1, 2, 3] );
        ok( transform.modified, "modified is set" );
        ok( this.math.matrix4.equal( transform.buffer, expected ), 
          "transform is correct" );
      });

      test( "create a transform with a scale", function() {
        expect( 2 );

        var transform = new this.math.Transform( null, null, [1, 2, 3] );
        var expected = this.math.transform.scale( [1, 2, 3] );
        ok( transform.modified, "modified is set" );
        ok( this.math.matrix4.equal( transform.buffer, expected ), 
          "transform is correct" );
      });

      test( "create a transform with a position, rotation and scale", function() {
        expect( 2 );

        var transform = new this.math.Transform( [1, 2, 3], [4, 5, 6], [7, 8, 9] );
        var expected = this.math.transform.fixed( [1, 2, 3], [4, 5, 6], [7, 8, 9] );
        ok( transform.modified, "modified is set" );
        ok( this.math.matrix4.equal( transform.buffer, expected ), 
          "transform is correct" );
      });

      test( "clone", function() {
        expect( 2 );
        var transform1 = new this.math.Transform( [1, 2, 3], [4, 5, 6], [7, 8, 9] );
        transform1.modified = false;
        var transform2 = transform1.clone();
        ok( !transform1.modified, "transform1 is not modified" );
        ok( this.math.matrix4.equal( transform1.buffer, transform2.buffer ), "transforms are equal" );
      });

      test( "equal", function() {
        expect( 2 );
        var transform1 = new this.math.Transform( [1, 2, 3], [4, 5, 6], [7, 8, 9] );
        var transform2 = new this.math.Transform( [3, 2, 1], [4, 5, 6], [7, 8, 9] );

        ok( transform1.equal( transform1 ), "transform is equal to itself" );
        ok( !transform1.equal( transform2 ), "transform is not equal to different transform" );
      });

      test( "multiply", function() {
        expect( 3 );
        var transform1 = new this.math.Transform( [1, 2, 3], [4, 5, 6], [7, 8, 9] );
        var transform2 = new this.math.Transform( [3, 2, 1], [4, 5, 6], [7, 8, 9] );
        transform1.modified = false;
        transform2.modified = false;

        var expected = this.math.matrix4.multiply( transform1.buffer, transform2.buffer );
        transform1.multiply( transform2 );

        ok( this.math.matrix4.equal( transform1.buffer, expected ), "result is correct" );
        ok( transform1.modified, "transform1 is modified" );
        ok( !transform2.modified, "transform2 is not modified" );
      });

      test( "multiply, set result parameter", function() {
        expect( 3 );
        var transform1 = new this.math.Transform( [1, 2, 3], [4, 5, 6], [7, 8, 9] );
        var transform2 = new this.math.Transform( [3, 2, 1], [4, 5, 6], [7, 8, 9] );
        var result = new this.math.Transform();
        transform1.modified = false;
        transform2.modified = false;

        var expected = this.math.matrix4.multiply( transform1.buffer, transform2.buffer );
        transform1.multiply( transform2, result );

        ok( this.math.matrix4.equal( result.buffer, expected ), "result is correct" );
        ok( !transform1.modified, "transform1 is modified" );
        ok( !transform2.modified, "transform2 is not modified" );
      });

      test( "rotate", function() {
        expect( 2 );
        var transform = new this.math.Transform( [1, 2, 3], [4, 5, 6], [7, 8, 9] );
        transform.modified = false;
        var expected = this.math.matrix4.multiply( transform.buffer, this.math.transform.rotate( [1, 2, 3] ) );
        transform.rotate( [1, 2, 3] );

        ok( transform.modified, "transform is modified" );
        ok( this.math.matrix4.equal( transform.buffer, expected ), "result is correct" );
      });

      test( "rotate, set result parameter", function() {
        expect( 2 );
        var transform = new this.math.Transform( [1, 2, 3], [4, 5, 6], [7, 8, 9] );
        transform.modified = false;
        var expected = this.math.matrix4.multiply( transform.buffer, this.math.transform.rotate( [1, 2, 3] ) );
        var result = new this.math.Transform();
        transform.rotate( [1, 2, 3], result );

        ok( !transform.modified, "transform is modified" );
        ok( this.math.matrix4.equal( result.buffer, expected ), "result is correct" );
      });

      test( "scale", function() {
        expect( 2 );
        var transform = new this.math.Transform( [1, 2, 3], [4, 5, 6], [7, 8, 9] );
        transform.modified = false;
        var expected = this.math.matrix4.multiply( transform.buffer, this.math.transform.scale( [1, 2, 3] ) );
        transform.scale( [1, 2, 3] );

        ok( transform.modified, "transform is modified" );
        ok( this.math.matrix4.equal( transform.buffer, expected ), "result is correct" );
      });

      test( "scale, set result parameter", function() {
        expect( 2 );
        var transform = new this.math.Transform( [1, 2, 3], [4, 5, 6], [7, 8, 9] );
        transform.modified = false;
        var expected = this.math.matrix4.multiply( transform.buffer, this.math.transform.scale( [1, 2, 3] ) );
        var result = new this.math.Transform();
        transform.scale( [1, 2, 3], result );

        ok( !transform.modified, "transform is modified" );
        ok( this.math.matrix4.equal( result.buffer, expected ), "result is correct" );
      });

      test( "translate", function() {
        expect( 2 );
        var transform = new this.math.Transform( [1, 2, 3], [4, 5, 6], [7, 8, 9] );
        transform.modified = false;
        var expected = this.math.matrix4.multiply( transform.buffer, this.math.transform.translate( [1, 2, 3] ) );
        transform.translate( [1, 2, 3] );

        ok( transform.modified, "transform is modified" );
        ok( this.math.matrix4.equal( transform.buffer, expected ), "result is correct" );
      });

      test( "translate, set result parameter", function() {
        expect( 2 );
        var transform = new this.math.Transform( [1, 2, 3], [4, 5, 6], [7, 8, 9] );
        transform.modified = false;
        var expected = this.math.matrix4.multiply( transform.buffer, this.math.transform.translate( [1, 2, 3] ) );
        var result = new this.math.Transform();
        transform.translate( [1, 2, 3], result );

        ok( !transform.modified, "transform is modified" );
        ok( this.math.matrix4.equal( result.buffer, expected ), "result is correct" );
      });

    };
  }
);