//
// L36S02 - Scripted REST API with query parameters
//
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
 
  // Example Query parameters
  // https://<instance_rest_endpoint>?active=true&name=now
  var queryParams   = request.queryParams; 
  var isActiveQuery = queryParams.active; //true
  var nameQueryVal  = queryParams.name; //‘now’

  var answer = "Response: active=" + isActiveQuery + " name=" + nameQueryVal;

  return answer;
    
})(request, response);