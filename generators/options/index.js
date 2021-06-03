var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    // note: arguments and options should be defined in the constructor.
    constructor(args, opts) {
      super(args, opts);
  
      // This method adds support for a `--coffee` flag
      this.option("coffee");
  
      // And you can then access it later; e.g.
      this.scriptSuffix = this.options.coffee ? ".coffee" : ".js";
    }
    method1(){
        this.log("Yeoman rocks")
    }  
};

  