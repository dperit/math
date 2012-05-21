define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {

    var notImplemented = require( "common/not-implemented" );
    var M4 = require( "matrix/m4" )( FLOAT_ARRAY_TYPE );
    var V3 = require( "vector/v3" )( FLOAT_ARRAY_TYPE );

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

    function determinant( m ) {
      var a0 = m[0] * m[5] - m[1] * m[4];
      var a1 = m[0] * m[6] - m[2] * m[4];
      var a2 = m[0] * m[7] - m[3] * m[4];
      var a3 = m[1] * m[6] - m[2] * m[5];
      var a4 = m[1] * m[7] - m[3] * m[5];
      var a5 = m[2] * m[7] - m[3] * m[6];
      var b0 = m[8] * m[13] - m[9] * m[12];
      var b1 = m[8] * m[14] - m[10] * m[12];
      var b2 = m[8] * m[15] - m[11] * m[12];
      var b3 = m[9] * m[14] - m[10] * m[13];
      var b4 = m[9] * m[15] - m[11] * m[13];
      var b5 = m[10] * m[15] - m[11] * m[14];

      return a0 * b5 - a1 * b4 + a2 * b3 + a3 * b2 - a4 * b1 + a5 * b0;
    }

    function equal( m1, m2, e ) {
      e = e || 0.000001;

      if( Math.abs( m1[0] - m2[0] ) > e ||
          Math.abs( m1[1] - m2[1] ) > e ||
          Math.abs( m1[2] - m2[2] ) > e ||
          Math.abs( m1[3] - m2[3] ) > e ||
          Math.abs( m1[4] - m2[4] ) > e ||
          Math.abs( m1[5] - m2[5] ) > e ||
          Math.abs( m1[6] - m2[6] ) > e ||
          Math.abs( m1[7] - m2[7] ) > e ||
          Math.abs( m1[8] - m2[8] ) > e ||
          Math.abs( m1[9] - m2[9] ) > e ||
          Math.abs( m1[10] - m2[10] ) > e ||
          Math.abs( m1[11] - m2[11] ) > e ||
          Math.abs( m1[12] - m2[12] ) > e ||
          Math.abs( m1[13] - m2[13] ) > e ||
          Math.abs( m1[14] - m2[14] ) > e ||
          Math.abs( m1[15] - m2[15] ) > e ) {
        return false;
      }

      return true;
    }

    function inverse( m, result ) {
      result = result || new M4();
                
      var a00 = m[0], a01 = m[1], a02 = m[2], a03 = m[3],
          a10 = m[4], a11 = m[5], a12 = m[6], a13 = m[7],
          a20 = m[8], a21 = m[9], a22 = m[10], a23 = m[11],
          a30 = m[12], a31 = m[13], a32 = m[14], a33 = m[15],

          b00 = a00 * a11 - a01 * a10,
          b01 = a00 * a12 - a02 * a10,
          b02 = a00 * a13 - a03 * a10,
          b03 = a01 * a12 - a02 * a11,
          b04 = a01 * a13 - a03 * a11,
          b05 = a02 * a13 - a03 * a12,
          b06 = a20 * a31 - a21 * a30,
          b07 = a20 * a32 - a22 * a30,
          b08 = a20 * a33 - a23 * a30,
          b09 = a21 * a32 - a22 * a31,
          b10 = a21 * a33 - a23 * a31,
          b11 = a22 * a33 - a23 * a32,

          determinant = (b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06),
          inverseDeterminant;

      // Determinant, throw exception if singular
      if( !determinant ) {
        return undefined;
      }
      
      inverseDeterminant = 1 / d;

      result[0] = (a11 * b11 - a12 * b10 + a13 * b09) * inverseDeterminant;
      result[1] = (-a01 * b11 + a02 * b10 - a03 * b09) * inverseDeterminant;
      result[2] = (a31 * b05 - a32 * b04 + a33 * b03) * inverseDeterminant;
      result[3] = (-a21 * b05 + a22 * b04 - a23 * b03) * inverseDeterminant;
      result[4] = (-a10 * b11 + a12 * b08 - a13 * b07) * inverseDeterminant;
      result[5] = (a00 * b11 - a02 * b08 + a03 * b07) * inverseDeterminant;
      result[6] = (-a30 * b05 + a32 * b02 - a33 * b01) * inverseDeterminant;
      result[7] = (a20 * b05 - a22 * b02 + a23 * b01) * inverseDeterminant;
      result[8] = (a10 * b10 - a11 * b08 + a13 * b06) * inverseDeterminant;
      result[9] = (-a00 * b10 + a01 * b08 - a03 * b06) * inverseDeterminant;
      result[10] = (a30 * b04 - a31 * b02 + a33 * b00) * inverseDeterminant;
      result[11] = (-a20 * b04 + a21 * b02 - a23 * b00) * inverseDeterminant;
      result[12] = (-a10 * b09 + a11 * b07 - a12 * b06) * inverseDeterminant;
      result[13] = (a00 * b09 - a01 * b07 + a02 * b06) * inverseDeterminant;
      result[14] = (-a30 * b03 + a31 * b01 - a32 * b00) * inverseDeterminant;
      result[15] = (a20 * b03 - a21 * b01 + a22 * b00) * inverseDeterminant;
      
      return result;      
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

    function multiplyV3( m, v, result ) {
      result = result || new V3();

      var x = v[0], y = v[1], z = v[2];
      
      result[0] = m[0] * x + m[4] * y + m[8] * z + m[12];
      result[1] = m[1] * x + m[5] * y + m[9] * z + m[13];
      result[2] = m[2] * x + m[6] * y + m[10] * z + m[14];

      return result;
    }

    function set( m ) {
      if( 17 === arguments.length ) {
        var values = arguments[1];
        m[0] = values[0];
        m[1] = values[1];
        m[2] = values[2];
        m[3] = values[3];
        m[4] = values[4];
        m[5] = values[5];
        m[6] = values[6];
        m[7] = values[7];
        m[8] = values[8];
        m[9] = values[9];
        m[10] = values[10];
        m[11] = values[11];
        m[12] = values[12];
        m[13] = values[13];
        m[14] = values[14];
        m[15] = values[15];
      } else {
        m[0] = arguments[0];
        m[1] = arguments[1];
        m[2] = arguments[2];
        m[3] = arguments[3];
        m[4] = arguments[4];
        m[5] = arguments[5];
        m[6] = arguments[6];
        m[7] = arguments[7];
        m[8] = arguments[8];
        m[9] = arguments[9];
        m[10] = arguments[10];
        m[11] = arguments[11];
        m[12] = arguments[12];
        m[13] = arguments[13];
        m[14] = arguments[14];
        m[15] = arguments[15];
      }
     
      return m;
    }

    function subtract( m1, m2, result ) {
      result = result || new M4();

      result[0] = m1[0] - m2[0];
      result[1] = m1[1] - m2[1];
      result[2] = m1[2] - m2[2];
      result[3] = m1[3] - m2[3];
      result[4] = m1[4] - m2[4];
      result[5] = m1[5] - m2[5];
      result[6] = m1[6] - m2[6];
      result[7] = m1[7] - m2[7];
      result[8] = m1[8] - m2[8];
      result[9] = m1[9] - m2[9];
      result[10] = m1[10] - m2[10];
      result[11] = m1[11] - m2[11];
      result[12] = m1[12] - m2[12];
      result[13] = m1[13] - m2[13];
      result[14] = m1[14] - m2[14];
      result[15] = m1[15] - m2[15];

      return result;
    }

    function transpose( m, result ) {
      if( m && m === result ) {
        var a01 = m[1], a02 = m[2], a03 = m[3],
            a12 = m[6], a13 = m[7],
            a23 = m[11];

        result[1] = m[4];
        result[2] = m[8];
        result[3] = m[12];
        result[4] = a01;
        result[6] = m[9];
        result[7] = m[13];
        result[8] = a02;
        result[9] = a12;
        result[11] = m[14];
        result[12] = a03;
        result[13] = a13;
        result[14] = a23;

        return result;
      }

      result = result || new M4();

      result[0] = m[0];
      result[1] = m[4];
      result[2] = m[8];
      result[3] = m[12];
      result[4] = m[1];
      result[5] = m[5];
      result[6] = m[9];
      result[7] = m[13];
      result[8] = m[2];
      result[9] = m[6];
      result[10] = m[10];
      result[11] = m[14];
      result[12] = m[3];
      result[13] = m[7];
      result[14] = m[11];
      result[15] = m[15];

      return result;
    }

    var matrix4 = {  
      add: add,
      clear: clear,
      determinant: determinant,
      equal: equal,
      inverse: inverse,
      multiply: multiply,
      multiplyV3: notImplemented,
      set: set,
      subtract: subtract,
      transpose: transpose,

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