define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {

    var notImplemented = require( "common/not-implemented" );
    var M4 = require( "matrix/m4" )( FLOAT_ARRAY_TYPE );

    function add( m1, m2, result ) {
      result = result || new M4();

      result[0] = m1[0] + m2[0];
      result[1] = m1[1] + m2[1];
      result[2] = m1[2] + m2[2];
      result[3] = m1[3] + m2[3];
      result[4] = m1[4] + m2[4];
      result[5] = m1[5] + m2[5];
      result[6] = m1[6] + m2[6];
      result[7] = m1[7] + m2[7];
      result[8] = m1[8] + m2[8];
      result[9] = m1[9] + m2[9];
      result[10] = m1[10] + m2[10];
      result[11] = m1[11] + m2[11];
      result[12] = m1[12] + m2[12];
      result[13] = m1[13] + m2[13];
      result[14] = m1[14] + m2[14];
      result[15] = m1[15] + m2[15];

      return result;
    }

    function clear( m ) {
      m[0] = m[1] = m[2] = m[3] = 0;
      m[4] = m[5] = m[6] = m[7] = 0;
      m[8] = m[9] = m[10] = m[11] = 0;
      m[12] = m[13] = m[14] = m[15] = 0;

      return m;
    }

    function multiply( m1, m2, result ) {
      result = result || new M4();

      var a00 = m1[0], a01 = m1[1], a02 = m1[2], a03 = m1[3],
        a10 = m1[4], a11 = m1[5], a12 = m1[6], a13 = m1[7],
        a20 = m1[8], a21 = m1[9], a22 = m1[10], a23 = m1[11],
        a30 = m1[12], a31 = m1[13], a32 = m1[14], a33 = m1[15],

        b00 = m2[0], b01 = m2[1], b02 = m2[2], b03 = m2[3],
        b10 = m2[4], b11 = m2[5], b12 = m2[6], b13 = m2[7],
        b20 = m2[8], b21 = m2[9], b22 = m2[10], b23 = m2[11],
        b30 = m2[12], b31 = m2[13], b32 = m2[14], b33 = m2[15];

      result[0] = b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30;
      result[1] = b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31;
      result[2] = b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32;
      result[3] = b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33;
      result[4] = b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30;
      result[5] = b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31;
      result[6] = b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32;
      result[7] = b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33;
      result[8] = b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30;
      result[9] = b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31;
      result[10] = b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32;
      result[11] = b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33;
      result[12] = b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30;
      result[13] = b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31;
      result[14] = b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32;
      result[15] = b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33;

      return result;
    }

    var matrix4 = {  
      add: add,
      clear: clear,
      determinant: notImplemented,
      equal: notImplemented,
      inverse: notImplemented,
      multiply: multiply,
      multiplyV3: notImplemented,
      set: notImplemented,
      subtract: notImplemented,
      transpose: notImplemented,

      zero: new M4( 0, 0, 0, 0,
                    0, 0, 0, 0,
                    0, 0, 0, 0,
                    0, 0, 0, 0 ),
      one: new M4( 1, 1, 1, 1,
                   1, 1, 1, 1,
                   1, 1, 1, 1,
                   1, 1, 1, 1 ),
      identity: new M4( 1, 0, 0, 0,
                        0, 1, 0, 0,
                        0, 0, 1, 0,
                        0, 0, 0, 1 )
    };
    
    return matrix4;

  };

});