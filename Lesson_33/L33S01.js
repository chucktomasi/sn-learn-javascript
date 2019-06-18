//
// L33S01 - Classes, Objects, and Prototypes
//

var person = Class.create();
person.prototype = {
    initialize: function() {
      this.firstName = '';
      this.lastName  = '';
    },

    setFirstName : function(str) {
      this.firstName = str;
    },

    setLastName : function(str) {
      this.lastName = str;
    },

    getDisplayName : function() {
      return this.firstName + ' ' + this.lastName;
    },

    type: person
};

var me = new person();
me.setFirstName('Chuck');
me.setLastName('Tomasi')
gs.info('me=' + me.firstName + ' ' + me.lastName); // Not advised
var name = me.getDisplayName();
gs.info(name);