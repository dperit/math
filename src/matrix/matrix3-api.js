define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {

    var notImplemented = require( "common/not-implemented" );
    var M3 = require( "matrix/m3" )( FLOAT_ARRAY_TYPE );

    function add( m1, m2, result ) {
      result = result || new M3();

      result[0] = m1[0] + m2[0];
      result[1] = m1[1] + m2[1];
      result[2] = m1[2] + m2[2];
      result[3] = m1[3] + m2[3];
      result[4] = m1[4] + m2[4];
      result[5] = m1[5] + m2[5];
      result[6] = m1[6] + m2[6];
      result[7] = m1[7] + m2[7];
      result[8] = m1[8] + m2[8];

      return result;
    }

    function clear( m ) {
      m[0] = m[1] = m[2] = 0;
      m[3] = m[4] = m[5] = 0;
      m[6] = m[7] = m[8] = 0;

      return m;
    }

    function determinant( m ) {
      var a00 = m[0], a01 = m[1], a02 = m[2],
          a10 = m[3], a11 = m[4], a12 = m[5],
          a20 = m[6], a21 = m[7], a22 = m[8];

      return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
    };

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
          Math.abs( m1[8] - m2[8] ) > e ) {
        return false;
      }

      return true;
    }

    function inverse( m, result ) {
      result = result || new M3();

      var a00 = m[0], a01 = m[1], a02 = m[2],
          a10 = m[3], a11 = m[4], a12 = m[5],
          a20 = m[6], a21 = m[7], a22 = m[8],

          b01 = a22 * a11 - a12 * a21,
          b11 = -a22 * a10 + a12 * a20,
          b21 = a21 * a10 - a11 * a20,

          determinant = a00 * b01 + a01 * b11 + a02 * b21,
          inverseDeterminant;

      if( !determinant ) { return null; }
      inverseDeterminant = 1 / determinant;

      result[0] = b01 * inverseDeterminant;
      result[1] = (-a22 * a01 + a02 * a21) * inverseDeterminant;
      result[2] = (a12 * a01 - a02 * a11) * inverseDeterminant;
      result[3] = b11 * inverseDeterminant;
      result[4] = (a22 * a00 - a02 * a20) * inverseDeterminant;
      result[5] = (-a12 * a00 + a02 * a10) * inverseDeterminant;
      result[6] = b21 * inverseDeterminant;
      result[7] = (-a21 * a00 + a01 * a20) * inverseDeterminant;
      result[8] = (a11 * a00 - a01 * a10) * inverseDeterminant;

      return result;
    };

    // https://github.com/toji/gl-matrix/blob/8d6179c15aa938159feb2cb617d8a3af3fa2c7f3/gl-matrix.js#L682
    function multiply( m1, m2, result ) {
        result = result || new M3();
        
        // Cache the matrix values (makes for huge speed increases!)
        var a00 = m1[0], a01 = m1[1], a02 = m1[2],
            a10 = m1[3], a11 = m1[4], a12 = m1[5],
            a20 = m1[6], a21 = m1[7], a22 = m1[8],

            b00 = m2[0], b01 = m2[1], b02 = m2[2],
            b10 = m2[3], b11 = m2[4], b12 = m2[5],
            b20 = m2[6], b21 = m2[7], b22 = m2[8];

        result[0] = a00 * b00 + a01 * b10 + a02 * b20;
        result[1] = a00 * b01 + a01 * b11 + a02 * b21;
        result[2] = a00 * b02 + a01 * b12 + a02 * b22;

        result[3] = a10 * b00 + a11 * b10 + a12 * b20;
        result[4] = a10 * b01 + a11 * b11 + a12 * b21;
        result[5] = a10 * b02 + a11 * b12 + a12 * b22;

        result[6] = a20 * b00 + a21 * b10 + a22 * b20;
        result[7] = a20 * b01 + a21 * b11 + a22 * b21;
        result[8] = a20 * b02 + a21 * b12 + a22 * a22;

        return result;
    }

    function set( m ) {
      if( 2 === arguments.length ) {
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
      } else {
        m[0] = arguments[1];
        m[1] = arguments[2];
        m[2] = arguments[3];
        m[3] = arguments[4];
        m[4] = arguments[5];
        m[5] = arguments[6];
        m[6] = arguments[7];
        m[7] = arguments[8];
        m[8] = arguments[9];
      }
     
      return m;
    }

    function subtract( m1, m2, result ) {
      result = result || new M3();

      result[0] = m1[0] - m2[0];
      result[1] = m1[1] - m2[1];
      result[2] = m1[2] - m2[2];
      result[3] = m1[3] - m2[3];
      result[4] = m1[4] - m2[4];
      result[5] = m1[5] - m2[5];
      result[6] = m1[6] - m2[6];
      result[7] = m1[7] - m2[7];
      result[8] = m1[8] - m2[8];

      return result;
    }

    function transpose( m, result ) {
      if( m && m === result ) {
        var a01 = m[1], a02 = m[2],
            a12 = m[5];

        result[1] = m[3];
        result[2] = m[6];
        result[3] = a01;
        result[5] = m[7];
        result[6] = a02;
        result[7] = a12;

        return result;
      }

      result = result || new M3();

      result[0] = m[0];
      result[1] = m[3];
      result[2] = m[6];
      result[3] = m[1];
      result[4] = m[4];
      result[5] = m[7];
      result[6] = m[2];
      result[7] = m[5];
      result[8] = m[8];

      return result;
    }

    var matrix3 = {  
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

      zero: new M3( 0, 0, 0,
                    0, 0, 0,
                    0, 0, 0 ),
      one: new M3( 1, 1, 1,
                   1, 1, 1,
                   1, 1, 1 ),
      identity: new M3( 1, 0, 0,
                        0, 1, 0,
                        0, 0, 1 )
    };
    
    return matrix3;

  };

});