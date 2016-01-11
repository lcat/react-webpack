document.getElementById('async').onclick = function() {
  require.ensure([], function(require) {
    var content = require('./async.js');
    alert(content);
  })
}