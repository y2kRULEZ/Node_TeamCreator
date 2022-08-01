const Manager = require("../lib/Manager")

describe("Manager",()=>{
    describe("test Manager's properties",()=>{
        it("tests all properties",()=>{
            const manager = new Manager("iman",11,"imanpace7@gmail.com",253)
            expect(manager.name).toEqual("iman")
            expect(manager.id).toEqual(11)
            expect(manager.email).toEqual("imanpace7@gmail.com")
            expect(manager.officeNumber).toEqual(253)

        })
      
    })
    describe("test Manager's methods",()=>{
        it("tests all methods",()=>{
            const manager = new Manager("iman",11,"imanpace7@gmail.com",253)

            expect(manager.getRole()).toEqual("Manager")
            expect(manager.getEmail()).toEqual("imanpace7@gmail.com")
            expect(manager.getId()).toEqual(11)
            expect(manager.getName()).toEqual("iman")
            
        })



    })
})