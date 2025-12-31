const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
      //... More employee records can be added here
    ];

function displayEmployees(){
    const employee = employees.map((emp)=> `<p>${emp.id}: ${emp.name} - ${emp.department} - $${emp.salary}</p>`).join(' ');
    document.getElementById("employeesDetails").innerHTML = employee;}

function calculateTotalSalaries(){
    const total_s = employees.reduce((acc,emp) => acc + emp.salary, 0);
    document.getElementById("total").innerHTML = total_s;
}

function displayHREmployees() {
    const HRemp = employees.find(emp => emp.department === 'HR');
    console.log(HRemp);
    document.getElementById('HRinfo').innerHTML = `${HRemp.name}`;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
     }
 }
