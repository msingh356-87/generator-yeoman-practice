var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    writing() {
        const pkgJson = {
            devDependencies: {
                eslint: '^3.15.0'
            },
            dependencies: {
                react: '^16.2.0'
            }
        };

        // Extend or create package.json file in destination path
        this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
    }
    install2() {
        this.npmInstall;
    }
}
