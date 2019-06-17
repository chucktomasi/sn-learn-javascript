//
// L34S01 - Passing objects to functions
//
var item = Class.create();
item.prototype = {
    initialize: function() {
    },

    debugObject : function(obj) {

      gs.info('object=' + JSON.stringify(obj, null, 4));
    },

    type: 'item'
};

var myObj = {
  "type"   : "vehicle",
  "engine" : true,
  "wheels" : 4,
  "state"  : "allocated"
};
var myItem = new item();
myItem.debugObject(myObj); // Loosely coupled