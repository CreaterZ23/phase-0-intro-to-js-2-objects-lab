// Write your solution in this file!
let employee = {
    name:'anthony johnson', 
    streetAddress: '606 Harmony St'
 };

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key] :value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {   
    //Object.assign({employee}, {[name] :"Sam", [streetAddress] :"12 Broadway"});
    employee[key]= value;
    return employee;
}

function deleteFromEmployeeByKey(employee, name) {
    let newEmployee = {...employee}
    delete newEmployee[name];
    return newEmployee;
}


function destructivelyDeleteFromEmployeeByKey(employee, name) {
    
    delete employee[name];
    return employee;
}
