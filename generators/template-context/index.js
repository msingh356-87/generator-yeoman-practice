var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    paths() {
      this.log(this.sourceRoot());
      // returns './templates'
  
      this.log(this.templatePath('index.js'));
      // returns './templates/index.js'
    }
  };