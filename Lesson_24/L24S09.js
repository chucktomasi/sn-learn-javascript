//
// L24S09 - Getting the value
//
var list = [];
var incGr = new GlideRecord('incident');
incGr.addQuery('priority', '1');
incGr.query();

while (incGr.next()) {
    list.push(incGr.getValue('sys_id'));
}

gs.info('list=\n' + list.join('\n'));