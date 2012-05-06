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

        test( 'basic', function() {          
          expect( 6 );
          var math = this.math;
          
          var vec2 = new math.Vector2( [1, 2] );
          ok(
              vec2,
              'construct a Vector2 instance'
          );
          ok(
              vec2 instanceof math.ARRAY_TYPE,
              'vec2 is an instance of ARRAY_TYPE'
          );
          deepEqual(
              new math.ARRAY_TYPE( [1, 2] ),
              new math.Vector2( [1, 2] )
          );
          ok(
              2 === vec2.length,
              'vec2 has length 2'
          );
          ok(
              vec2[0] === 1 && vec2[1] === 2,
              'vec2 elements are [1, 2]'
          );

          // Test vector clear
          var vec1 = new math.Vector2( [17 , 22] );
          var vec3 = new math.Vector2( [0, 0] );
          math.vector2.clear(vec1);
          ok(
              math.vector2.equal( vec1, vec3 ),
              vec1[0] + ' vector.clear, set to 0,0 ' + vec1[1]
          );

        });

        test( 'defaults', function() {
          expect( 1 );
          var math = this.math;
          
          deepEqual(
              new math.Vector2(),
              new math.Vector2( [0, 0] ),
              'default vector is the zero vector'
          );
        });

        test( 'constants', function() {
          expect( 4 );
          var math = this.math;
          
          math.vector2.x[0] = 8.7;
          deepEqual(
              math.vector2.x,
              new math.Vector2( [1, 0] ),
              'Vector2.x'
          );
          math.vector2.y[0] = 22.7;
          deepEqual(
              math.vector2.y,
              new math.Vector2( [0, 1] ),
              'Vector2.y'
          );
          math.vector2.zero[1] = Math.sqrt(87);
          deepEqual(
              math.vector2.zero,
              new math.Vector2( [0, 0] ),
              'Vector2.zero'
          );
          math.vector2.one[0] = -76;
          deepEqual(
              math.vector2.one,
              new math.Vector2( [1, 1] ),
              'Vector2.one'
          );
        });

        test( 'clone', function() {
          expect( 1 );          
          var math = this.math;
          
          var vec1 = new math.Vector2( [0, 1] );
          deepEqual(
              new math.Vector2( vec1 ),
              vec1,
              'clone of vector is the same'
          );
        });

        test( 'equality', function() {
          expect( 3 );
          var math = this.math;
          
          var vec1 = new math.Vector2( [1, 1.00000000001] );
          var vec2 = new math.Vector2( [1, 1] );
          var vec3 = new math.Vector2( [2, 3] );

          var vec4 = new math.Vector2( [2.000002, 3.000002] );

          ok(
              math.vector2.equal( vec1, vec2 ),
              'two identical vectors are equal'
          );
          ok(
              !math.vector2.equal( vec1, vec3 ),
              'two different vectors are not equal'
          );
          deepEqual(
              math.vector2.equal( vec3, vec4 ),
              false,
              'e = 0.000001'
          );
        });

        test( 'length', function() {
          expect( 1 );
          var math = this.math;

          var vec1 = new math.Vector2( [1, 1] );
          ok(
              Math.sqrt( 2 ) === math.vector2.length( vec1 ),
              '|(1, 1)| = sqrt(2)'
          );
        });

        test( 'addition', function() {
          expect( 2 );
          var math = this.math;

          var vec1 = new math.Vector2( [1, 1] );
          var vec2 = new math.Vector2( [1, 1] );
          var vec3 = new math.Vector2( [2, 2] );

          ok(
              math.vector2.equal( vec3, math.vector2.add( vec1, vec2 ) ),
              '(1,1) + (1,1) = (2,2)'
          );

          var test = math.vector2.add( vec1, vec2 );
          ok(
              math.vector2.equal( test, vec3 ),
              '(1, 1) += (2, 2)'
          );
        });

        test( 'subtraction', function() {
          expect( 2 );
          var math = this.math;

          var vec1 = new math.Vector2( [1, 1] );
          var vec2 = new math.Vector2( [1, 1] );
          var vec3 = new math.Vector2( [2, 2] );
          ok(
              math.vector2.equal( vec1, math.vector2.subtract( vec3, vec2 ) ),
              '(2, 2) - (1, 1) = (1, 1)'
          );

          var test = math.vector2.subtract( vec3, vec2 );
          ok(
              math.vector2.equal( vec1, test ),
              '(2, 2) -= (1, 1)'
          );
        });

        test( 'scalar multiplication', function() {
          expect( 2 );
          var math = this.math;

          var vec1 = new math.Vector2( [2, 3] );
          deepEqual(
              math.vector2.multiply( vec1, 2 ),
              new math.Vector2( [4, 6] ),
              '(2, 3) * 2 = (4, 6)'
          );

          var test = math.vector2.multiply( vec1, 3 );
          deepEqual(
              test,
              new math.Vector2( [6, 9] ),
              '(2, 3) *= 3'
          );
        });

        test( 'dot product, normalize', function() {
          expect( 3 );
          var math = this.math;

          var vec1 = new math.Vector2( [12, -5] );
          deepEqual(
              math.vector2.normalize( vec1 ),
              new math.Vector2( [(12/13), (-5/13)] ),
              'normalize( [12, -5] ) = [ (12/13), (-5/13) ]'
          );

          var vec2 = new math.Vector2( [10, 4] );
          var cond = math.vector2.dot( math.vector2.normalize( vec1 ), vec2 );
          deepEqual(
              Math.round ( cond * Math.pow(10,6) ),
              Math.round ( (100/13) * Math.pow(10,6) ), // Correct to 6 digits
              ' [ (12/13), (-5/13) ] . [ 10, 4 ] = (100/13) '
          );

          // Normalized vector
          var isNormalized = new math.Vector2( [ 1/Math.sqrt(2), 1/Math.sqrt(2) ] );
          deepEqual (
              math.vector2.normalize( isNormalized ),
              isNormalized,
              'normalized vector is already normalized'
          );
        });

        test( 'angle', function() {
          expect( 2 );
          var math = this.math;

          var vec1 = new math.Vector2( [10, 8] );
          var vec2 = new math.Vector2( [6, 6] );

          var cond = math.vector2.angle( vec1, vec2 );
          var res = Math.acos(9/(Math.sqrt(82)));
          deepEqual(
              Math.round ( cond * Math.pow(10,6) ),
              Math.round ( res * Math.pow(10,6) ), // Correct to 6 digits
              ' angle( vec1, vec2 ) = acos(9/(Math.sqrt(82)))'
          );

          var vec3 = new math.Vector2( [1, 0] );
          var vec4 = new math.Vector2( [0, 1] );
          deepEqual(
              math.vector2.angle(vec3, vec4),
              (Math.PI/2),
              ' Right angle axis test = pi/2'
          );
        });

        test( 'projection', function() {
          expect( 4 );
          var math = this.math;

          var x_axis = math.Vector2( [1, 0] );
          var y_axis = math.Vector2( [0, 1] );
          var y_equals_x = math.Vector2( [1, 1] );

          ok( math.vector2.equal( math.vector2.project( y_equals_x, x_axis ),
              [1, 0]
          ), 'project y=x onto x-axis' );
          ok( math.vector2.equal( math.vector2.project( y_equals_x, y_axis ),
              [0, 1]
          ), 'project y=x onto y-axis' );
          ok( math.vector2.equal( math.vector2.project( x_axis, y_equals_x ),
              [0.5, 0.5]
          ), 'project x-axis onto y=x' );
          ok( math.vector2.equal( math.vector2.project( y_axis, y_equals_x ),
              [0.5, 0.5]
          ), 'project y-axis onto y=x' );
        });

        test( 'set', function() {
          expect( 1 );
          var math = this.math;

          var v = new math.Vector2( 1, 2 );
          math.vector2.set( v, 4, 5 );
          ok( math.vector2.equal( v, [4, 5] ), 'v is set' );
        });

      };
    }
);
