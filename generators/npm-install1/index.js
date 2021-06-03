var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    
        // This method adds support for a `--coffee` flag
        this.option("coffee");
        this.npmInstall(['lodash'], { 'save-dev': true });

        // And you can then access it later; e.g.
        this.scriptSuffix = this.options.coffee ? ".coffee" : ".js";
      }
    installingLodash() {
        this.npmInstall(['lodash'], { 'save-dev': true });
    }
}

// this isnt working