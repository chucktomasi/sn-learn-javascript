//
// L24S02 - join(string)
//
var list = ['Chuck', 'Kreg', 'Stacey'];
gs.info('join: list=' + list.join(', '));

// push(value1, value2, ..., valueX)
list.push('Dave');
list.push('Andrew');
gs.info('push: list=' + list.join(', '));

// pop()
list.pop();
gs.info('pop: list=' + list.join(', '));