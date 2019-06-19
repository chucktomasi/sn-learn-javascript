//
// Lab 6b: Update your previous script to accept a limit parameter.
// Hint: use GlideRecord.setLimit()
//
// @param tableName - name of table to query
// @param limit - integer > 0
// @return array - list of record display values
//
function listRecords(tableName, limit) {

    var answer = [];
    var recGr = new GlideRecord(tableName);
    if (limit && limit > 0) {
        recGr.setLimit(limit);
    }
    recGr.query();
    
    while (recGr.next()) {
        answer.push(recGr.getDisplayValue());
    }
    
    return answer;
}

gs.info(listRecords('incident', 10).join('\n'));