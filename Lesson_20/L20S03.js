// 
// L20S03 - And finally…
//
try {
  for (var i = 0; i < 5; i++) {
    gs.info('i=' + i + ' answer=' + answer);
  }
} catch (e) {
  gs.error('Uh-oh ' + e.message);
} finally {
  gs.info('done');
}
