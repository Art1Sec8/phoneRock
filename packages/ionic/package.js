Package.describe({
  summary: "Ionic css framework",
  version: "1.0.2"
});

Package.onUse(function (api) {

  var path = Npm.require('path');

  api.addFiles(path.join('css', 'ionic.css'), 'web');
  api.addFiles(path.join('fonts', 'ionicons.eot'), 'web');
  api.addFiles(path.join('fonts', 'ionicons.svg'), 'web');
  api.addFiles(path.join('fonts', 'ionicons.ttf'), 'web');
  api.addFiles(path.join('fonts', 'ionicons.woff'), 'web');
});