var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    initializing() {
        this.composeWith(require.resolve('../turbo'));
        this.composeWith(require.resolve('../electric'));
    }
};