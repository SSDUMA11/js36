export function totalSalary(employees) {
    let allSalary = 0;
  
    for (let i = 0; i < employees.length; i++) {
        allSalary += employees[i].salary;
    }
    return allSalary;
}

export function departamentQuantity(employees) {
    const departments = employees.reduce((acc, employee) => {
      acc[employee.departament] = true;
      return acc;
    }, {});
    return Object.keys(departments).length;
}

export function departamentSalary (employees){
    let result = {};
    employees.forEach((employee) => {
      if (result[employee.departament]) {
        result[employee.departament] += employee.salary;
      } else {
        result[employee.departament] = employee.salary;
      }
    });
    return result;
}
