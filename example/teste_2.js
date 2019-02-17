'use strict';

var tokenSimulation = require('../lib/viewer2');

var BpmnViewer = require('bpmn-js/lib/NavigatedViewer').default;

import exampleXML from './resources/teste_2.bpmn';

var viewer = new BpmnViewer({
  container: '#canvas',
  additionalModules: [
    tokenSimulation
  ],
  keyboard: {
    bindTo: document
  }
});

viewer.importXML(exampleXML, function(err) {
  if (!err) {
    viewer.get('canvas').zoom('fit-viewport');
  } else {
    console.log('something went wrong:', err);
  }
});

window.viewer = viewer;