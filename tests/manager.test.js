const Manager = require('../lib/manager');

describe("Manager", () => {
    describe("constructor", () => {
      it("should create an instance of Manager, and  taking a name, an id number, an email address, and an office number as arguments", () => {
       //arrange
        const fred = new Manager(`Fred`, 37, `Fred@Fredmail.com`, `5D`);
       //act

       //assert
       expect(fred instanceof Manager).toEqual(true);
      });
    });

    describe("Office", () => {
        it("should return an office of '5D'", () => {
         //arrange
         const fred = new Manager(`Fred`, 37, `Fred@Fredmail.com`, `5D`);
         //act
         const office = fred.office;
         //assert
         expect(office).toEqual(`5D`);
        });
      });
  
    describe("getRole", () => {
      it("should return 'Manager'", () => {
       //arrange
       const fred = new Manager(`Fred`, 37, `Fred@Fredmail.com`, `5D`);
       //act
       const role = fred.getRole();
       //assert
       expect(role).toEqual(`Manager`);
      });
    });
});
  