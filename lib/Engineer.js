const Employee = require('./Employee');

function Engineer(name, id, email, github) {
    Employee.call(this, name, id, email, github);
    this.github = github;
}

Engineer.prototype = Object.create(Engineer.prototype);
Engineer.prototype.constructor = Engineer;
Engineer.prototype.getRole = function() {
    return "Engineer";
}

Engineer.prototype.getGitHub = function() {
    return this.github;
}

module.exports = Engineer;