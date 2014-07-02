'use strict';

function RESTAPIBlueprintAddon(project) {
  this.project = project;
  this.name    = 'Ember CLI REST API Blueprint Addon';
};

RESTAPIBlueprintAddon.prototype.blueprintsPath = function() {
  return __dirname + '/blueprints';
}

module.exports = RESTAPIBlueprintAddon;
