const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    describe("constructor", () => {
      it("should create an instance of Engineer, and  taking a name, an id number, an email address, and a Github account as arguments", () => {
       //arrange
        const fred = new Engineer(`Fred`, 37, `Fred@Fredmail.com`, `Freddy123`);
       //act

       //assert
       expect(fred instanceof Engineer).toEqual(true);
      });
    });

    describe("getGithub", () => {
        it("should return 'Freddy123'", () => {
         //arrange
         const fred = new Engineer (`Fred`, 37, `Fred@Fredmail.com`, `Freddy123`);
         //act
         const github = fred.getGithub();
         //assert
         expect(github).toEqual(`Freddy123`);
        });
      });
  
    describe("getRole", () => {
      it("should return 'Engineer'", () => {
       //arrange
       const fred = new Engineer(`Fred`, 37, `Fred@Fredmail.com`, `Freddy123`);
       //act
       const role = fred.getRole();
       //assert
       expect(role).toEqual(`Engineer`);
      });
    });
});