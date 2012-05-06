define(
    [],
    function() {
      return function( _Math ) {

        module( 'Quaternion', {
          setup: function() {
            this.math = new _Math();
          },
          teardown: function() {
            this.math = null;
          }
        });

      };
    }
);
