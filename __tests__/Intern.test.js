const Intern = require("../lib/Intern")
describe("Intern",()=>{
    describe("test Intern's properties",()=>{
        it("tests all properties",()=>{
            const intern = new Intern("iman",11,"imanpace7@gmail.com","OSU")
            expect(intern.name).toEqual("iman")
            expect(intern.id).toEqual(11)
            expect(intern.email).toEqual("imanpace7@gmail.com")
            expect(intern.school).toEqual("OSU")

        })
      
    })
    describe("test Intern's methods",()=>{
        it("tests all methods",()=>{
            const intern = new Intern("iman",11,"imanpace7@gmail.com","OSU")

            expect(intern.getRole()).toEqual("Intern")
            expect(intern.getEmail()).toEqual("imanpace7@gmail.com")
            expect(intern.getId()).toEqual(11)
            expect(intern.getName()).toEqual("iman")
            expect(intern.getSchool()).toEqual("OSU")
        })



    })
})