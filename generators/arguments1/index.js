var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    // note: arguments and options should be defined in the constructor.
    constructor(args, opts) {
        super(args, opts);

        // This makes `appname` a required argument.
        this.argument("appname", { type: String, required: true });

        // And you can then access it later; e.g.
        this.log(this.options.appname);
        
    }
    method1(){
        this.log("I love Yeoman")
    }
};