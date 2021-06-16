const Employee = require('./Employee');

function Manager(name, id, email, officeNumber) {
    Employee.call(this, name, id, email, officeNumber);
    this.officeNumber = officeNumber;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Employee;
Manager.prototype.getRole = function() {
    return "Manager";
}

Manager.prototype.getOfficeNumber = function() {
    return this.officeNumber;
}

module.exports = Manager;