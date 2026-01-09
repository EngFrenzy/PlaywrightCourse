class Employee {
    EmployeeAge: Number = 10;
    EmployeeName: String = "Ahmed Agamy";
    YearsofExperince: Number = 5;

    constructor(employeeAge: number, employeeName: string, yearsOfExperience: number, authorityLevel: string) {
        this.EmployeeAge = employeeAge;
        this.EmployeeName = employeeName;
        this.YearsofExperince = yearsOfExperience;
    
    }

    greetEmployee(): void {
        console.log(`Welcome ${this.EmployeeName} to the Company!`);
    }

    displayEmployeeDetails(): void {
        console.log(`Employee Name: ${this.EmployeeName}`);
        console.log(`Employee Age: ${this.EmployeeAge}`);
        console.log(`Years of Experience: ${this.YearsofExperince}`);

    }

}

class Manager extends Employee {
    department: String = "Sales";
    EmployeeName: String = "Manager Ahmed";
    EmployeeAge: Number = 35;
    YearsofExperince: Number = 10;
    private AuthorityLevel: String = "Senior Manager";

    constructor(employeeAge: number, employeeName: string, yearsOfExperience: number, authorityLevel: string, department: string) {
        super(employeeAge, employeeName, yearsOfExperience, authorityLevel);
        this.department = department;
    }

    greetEmployee(): void {
        console.log(`Welcome ${this.EmployeeName}, the Manager of ${this.department} department!`);
    }

    displayEmployeeDetails(): void {
        console.log(`Employee Name: ${this.EmployeeName}`);
        console.log(`Employee Age: ${this.EmployeeAge}`);
        console.log(`Years of Experience: ${this.YearsofExperince}`);
        console.log(`Authority Level: ${this.AuthorityLevel}`);
        console.log(`Department: ${this.department}`);
    }
}

class Junior extends Manager{
    EmployeeName: String = "Junior Ahmed";
    EmployeeAge: Number = 22;
    YearsofExperince: Number = 1;

    AcademicDegree: String = "Bachelor's Degree";

    constructor(employeeAge: number, employeeName: string, yearsOfExperience: number, authorityLevel: string, department: string, academicDegree: string) {
        super(employeeAge, employeeName, yearsOfExperience, authorityLevel, department);
        this.AcademicDegree = academicDegree;
    }
    greetEmployee(): void {
        console.log(`Welcome ${this.EmployeeName}, the Junior Employee with ${this.AcademicDegree}!`);
    }
    displayEmployeeDetails(): void {
        console.log(`Employee Name: ${this.EmployeeName}`);
        console.log(`Employee Age: ${this.EmployeeAge}`);
        console.log(`Years of Experience: ${this.YearsofExperince}`)
        console.log(`Academic Degree: ${this.AcademicDegree}`);
    }
}

const employee = new Employee(30, "Ahmed Agamy", 5, "Staff");
employee.greetEmployee();
employee.displayEmployeeDetails();

const manager = new Manager(35, "Manager Omar", 10, "Senior Manager", "Sales");
manager.greetEmployee();
manager.displayEmployeeDetails();

const junior = new Junior(22, "Junior Sayed", 1, "Junior", "Sales", "Bachelor's Degree");
junior.greetEmployee();
junior.displayEmployeeDetails();