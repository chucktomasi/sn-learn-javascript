//
// L36S05 - Scripted REST API with POST and response
//
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
 
    var name  = request.body.data.name;
    var id    = request.body.data.id;
    var color = request.body.data.color;
    
    // Do some processing here
    
    var answer = {};
    answer.status = "OK";
    answer.author = "system";
    answer.item = {"name" : "Rome", "owner" : "Chuck Tomasi", "count" : 12};
    answer.active = true;
    response.setBody(answer);

    return response;
    
})(request, response);