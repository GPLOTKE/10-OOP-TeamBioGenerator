const Employee = require('./Employee');

function Intern(name, id, email, school) {
    Employee.call(this, name, id, email, school);
    this.school = school;
}

Intern.prototype = Object.create(Employee.prototype);
Intern.prototype.constructor = Employee;
Intern.prototype.getRole = function() {
    return "Intern";
}

Intern.prototype.getSchool = function() {
    return this.school;
}

module.exports = Intern;