define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {

    var notImplemented = require( "common/not-implemented" );
    var M2 = require( "matrix/m2" )( FLOAT_ARRAY_TYPE );

    function add( m1, m2, result ) {
      result = result || new M2();

      result[0] = m1[0] + m2[0];
      result[1] = m1[1] + m2[1];
      result[2] = m1[2] + m2[2];
      result[3] = m1[3] + m2[3];

      return result;
    }

    function clear( m ) {
      m[0] = m[1] = 0;
      m[2] = m[3] = 0;

      return m;
    }

    function determinant( m ) {
      var a00 = m[0], a01 = m[1], 
          a10 = m[2], a11 = m[3];

      return a00 * a11 - a01 * a10;
    };

    function equal( m1, m2, e ) {
      e = e || 0.000001;

      if( Math.abs( m1[0] - m2[0] ) > e ||
          Math.abs( m1[1] - m2[1] ) > e ||
          Math.abs( m1[2] - m2[2] ) > e ||
          Math.abs( m1[3] - m2[3] ) > e ) {
        return false;
      }

      return true;
    }

    function inverse( m, result ) {
      result = result || new M2();

      var a00 = m[0], a01 = m[1], 
          a10 = m[2], a11 = m[3],

          determinant = a00 * a11 - a01 * a10,
          inverseDeterminant;

      if( !determinant ) { return null; }
      inverseDeterminant = 1 / determinant;

      result[0] = a11 * inverseDeterminant;
      result[1] = -a01 * inverseDeterminant;
      result[2] = -a10 * inverseDeterminant;
      result[3] = a00 * inverseDeterminant;

      return result;
    };

    function multiply( m1, m2, result ) {
      result = result || new M2();
      
      var a00 = m1[0], a01 = m1[1], a10 = m1[2], a11 = m1[3];
      var b00 = m2[0], b01 = m2[1], b10 = m2[2], b11 = m2[3];

      result[0] = a00 * b00 + a01 * b10;
      result[1] = a00 * b01 + a01 * b11;
      result[2] = a10 * b00 + a11 * b10;
      result[3] = a10 * b01 + a11 * b11;

      return result;
    }

    function set( m ) {
      if( 2 === arguments.length ) {
        var values = arguments[1];
        m[0] = values[0];
        m[1] = values[1];
        m[2] = values[2];
        m[3] = values[3];
      } else {
        m[0] = arguments[1];
        m[1] = arguments[2];
        m[2] = arguments[3];
        m[3] = arguments[4];
      }
     
      return m;
    }

    function subtract( m1, m2, result ) {
      result = result || new M2();

      result[0] = m1[0] - m2[0];
      result[1] = m1[1] - m2[1];
      result[2] = m1[2] - m2[2];
      result[3] = m1[3] - m2[3];

      return result;
    }

    function transpose( m, result ) {
      if( m && m === result ) {
        var a10 = m[2];

        result[1] = m[2];
        result[2] = a10;

        return result;
      }

      result = result || new M2();

      result[0] = m[0];
      result[1] = m[2];
      result[2] = m[1];
      result[3] = m[3];

      return result;
    }

    var matrix2 = {  
      add: add,
      clear: clear,
      determinant: determinant,
      equal: equal,
      inverse: inverse,
      multiply: multiply,
      set: set,
      subtract: subtract,
      transpose: transpose,

      zero: new M2( 0, 0,
                    0, 0 ),
      one: new M2( 1, 1,
                   1, 1 ),
      identity: new M2( 1, 0,
                        0, 1 )
    };
    
    return matrix2;

  };

});