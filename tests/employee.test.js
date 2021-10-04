const Employee = require('../lib/employee');

describe("Employee", () => {
    describe("constructor", () => {
      it("should create an instance of employee, taking a name, an id number, an email address, and an office number as arguments", () => {
       //arrange
        const fred = new Employee(`Fred`, 37, `Fred@Fredmail.com`, `5D`);
       //act

       //assert
       expect(fred instanceof Employee).toEqual(true);
      });
    });
  
    describe("getName", () => {
      it("should return employee name", () => {
       //arrange
       const fred = new Employee(`Fred`, 37, `Fred@Fredmail.com`, `5D`);
       //act
       const name = fred.getName();
       //assert
       expect(name).toEqual(`Fred`);
      });
    });
  
    describe("GetId", () => {
      it("should return employee ID", () => {
        //arrange
        const fred = new Employee(`Fred`, 37, `Fred@Fredmail.com`, `5D`);
        //act
        const id = fred.getId();
        //assert
        expect(id).toEqual(37);
       });
    });

    describe("getEmail", () => {
        it("should return employee email", () => {
        //arrange
        const fred = new Employee(`Fred`, 37, `Fred@Fredmail.com`, `5D`);
        //act
        const email = fred.getEmail();
        //assert
        expect(email).toEqual(`Fred@Fredmail.com`);
       });
      });

      describe("getRole", () => {
        it("should return 'Employee'", () => {
       //arrange
       const fred = new Employee(`Fred`, 37, `Fred@Fredmail.com`, `5D`);
       //act
       const role = fred.getRole();
       //assert
       expect(role).toEqual(`Employee`);
        });
      });
  });
  