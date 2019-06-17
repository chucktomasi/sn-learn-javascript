//
// L21S04 - getting a single record quickly
// Just need one record? Use .get(SYSID) or .get('fieldName', fieldValue)
//
var incGr = new GlideRecord('incident');

if (incGr.get('965c9e5347c12200e0ef563dbb9a7156')) {
  gs.info(incGr.getValue('number'));
}

// or...
var incGr = new GlideRecord('incident');

if (incGr.get('number', 'INC0000059')) {
  gs.info(incGr.getValue('sys_id'));
}