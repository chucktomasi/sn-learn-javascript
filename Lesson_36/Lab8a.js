//
// Lab 8a - Rebuild the previous lab as a scripted REST API
//
// Get table record display values and sys_ids
//
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
 
    var queryParams = request.queryParams; 
    var tableName   = queryParams.tableName;
    var limit       = queryParams.limit;

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
    
    response.setBody(answer);
    
})(request, response);