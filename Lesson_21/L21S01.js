//
// L21S01 - Simple Database query
//

// Get and display numbers on all incidents
var incGr = new GlideRecord('incident');
incGr.query();

while (incGr.next()) {
  gs.info(incGr.getValue('number'));
}
