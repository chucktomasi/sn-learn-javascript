//
// L36S03 - Scripted REST API with path parameters
//
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
 
  // Example path parameters
  // https://instance.service-now.com/api/now/myservice/{tableName}/{id}
  // https://instance.service-now.com/api/now/myservice/myApp_table/1234
  var pathParams = request.pathParams; 
  var tableName  = pathParams.tableName; //‘myApp_table’ 
  var id         = pathParams.id; //‘1234’

  var answer = "Response: tableName=" + tableName + " id=" + id;

  return answer;
    
})(request, response);