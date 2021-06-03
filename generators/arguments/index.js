var Generator = require('yeoman-generator');
module.exports = class extends Generator {
    // note: arguments and options should be defined in the constructor.
    constructor(args, opts) {
        super(args, opts);
        this.argument()

    }
    method(){
        this.log('method 2 just ran');
        this.options[name];
    }
};