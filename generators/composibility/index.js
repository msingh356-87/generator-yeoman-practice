// Import generator-node's main generator
const NodeGenerator = require('generator-node/generators/app/index.js');

// Compose with it
this.composeWith({
  Generator: NodeGenerator,
  path: require.resolve('generator-node/generators/app')
});