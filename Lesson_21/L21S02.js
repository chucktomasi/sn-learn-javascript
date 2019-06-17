//
// L21S02 - Get and display numbers on all incidents v2
//
var incGr = new GlideRecord('incident');
incGr.addQuery('active', true);
incGr.orderBy('number');
incGr.setLimit(5);
incGr.query();

while (incGr.next()) {
  gs.info(incGr.getValue('number'));
}