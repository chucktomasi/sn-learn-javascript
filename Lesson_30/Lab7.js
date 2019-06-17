//
// Lab 7: 
// Update your previous lab to return the sys_id and
// display value of the records you found using an array of objects.
// Return an array of objects.
//
// @param tableName - name of table to query
// @param limit - integer > 0
// @return array of objects
//    {
//      "display_value" : <display value>,
//      "sys_id" : <sys_id>
//    }
//
function listRecords(tableName, limit) {

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
}

var list = listRecords('incident', 10);
gs.info(JSON.stringify(list, null, 4));