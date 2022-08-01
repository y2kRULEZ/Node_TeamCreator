const Engineer = require("../lib/Engineer")

describe("Engineer",()=>{
    describe("test Engineer's properties",()=>{
        it("tests all properties",()=>{
            const engineer = new Engineer("iman",11,"imanpace7@gmail.com","y2kRULEZ")
            expect(engineer.name).toEqual("iman")
            expect(engineer.id).toEqual(11)
            expect(engineer.email).toEqual("imanpace7@gmail.com")
            expect(engineer.github).toEqual("y2kRULEZ")

        })
      
    })
    describe("test Engineer's methods",()=>{
        it("tests all methods",()=>{
            const engineer = new Engineer("iman",11,"imanpace7@gmail.com","y2kRULEZ")

            expect(engineer.getRole()).toEqual("Engineer")
            expect(engineer.getEmail()).toEqual("imanpace7@gmail.com")
            expect(engineer.getId()).toEqual(11)
            expect(engineer.getName()).toEqual("iman")
            expect(engineer.getGithub()).toEqual("y2kRULEZ")
        })



    })
})