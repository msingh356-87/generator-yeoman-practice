// Given destination root is ~/projects
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    paths() {
      this.log(this.destinationRoot());
      // returns '~/projects'
  
      this.log(this.destinationPath('index.js'));
      // returns '~/projects/index.js'
    }
  }