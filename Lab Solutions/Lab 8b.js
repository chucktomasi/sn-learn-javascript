//
// Lab 8b - Rebuild the previous lab using a script include for the core logic
//  Use Query parameters to accept the table name and limit
//  Return the array of objects in the response body
//
// Get table record display values and sys_ids
//
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
 
    var queryParams = request.queryParams; 
    var tableName   = queryParams.tableName;
    var limit.      = queryParams.limit;

    var list = new SNJS().getRecords(tableName, limit);
        
    response.setBody(list);
    
})(request, response);