const Intern = require('../lib/intern');

describe("Intern", () => {
    describe("constructor", () => {
      it("should create an instance of Intern, and  taking a name, an id number, an email address, and a school as arguments", () => {
       //arrange
        const fred = new Intern(`Fred`, 37, `Fred@Fredmail.com`, `FredU`);
       //act

       //assert
       expect(fred instanceof Intern).toEqual(true);
      });
    });

    describe("getSchool", () => {
        it("should return 'FredU'", () => {
         //arrange
         const fred = new Intern (`Fred`, 37, `Fred@Fredmail.com`, `FredU`);
         //act
         const school = fred.getSchool();
         //assert
         expect(school).toEqual(`FredU`);
        });
      });
  
    describe("getRole", () => {
      it("should return 'Intern'", () => {
       //arrange
       const fred = new Intern(`Fred`, 37, `Fred@Fredmail.com`, `FredU`);
       //act
       const role = fred.getRole();
       //assert
       expect(role).toEqual(`Intern`);
      });
    });
});