define( function ( require ) {

  function equal( arg1, arg2, e ) {
    e = e || 0.000001;

    return Math.abs( arg1 - arg2 ) < e;
  }

  return equal;

});