//
// Lab 6a: Create a script to accept a table name and
// return a list records display values.
// Hint: use GlideRecord.getDisplayValue()
//
// @param tableName - name of table to query
// @return array - list of record display values
//
function listRecords(tableName) {

    var answer = [];
    var recGr = new GlideRecord(tableName);
    recGr.query();
    
    while (recGr.next()) {
        answer.push(recGr.getDisplayValue());
    }
    
    return answer;
}

gs.info(listRecords('incident').join('\n'));
