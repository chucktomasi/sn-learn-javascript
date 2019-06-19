var SNJS = Class.create();
SNJS.prototype = {
    initialize: function() {
    },

    getRecords : function(tableName, limit) {
    
        var answer = [];
        var recGr = new GlideRecord(tableName);
    
           if (limit && limit > 0) {
            recGr.setLimit(limit);
        }
        recGr.query();
    
        while (recGr.next()) {
            var obj = {};
            obj.display_value = recGr.getDisplayValue();
            obj.sys_id = recGr.getUniqueValue();
            answer.push(obj);
        }
        
        return answer;

    },

    type: 'SNJS'
};