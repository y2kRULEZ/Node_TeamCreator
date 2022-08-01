const Employee = require("../lib/Employee")
describe("Employee",()=>{
    describe("test Employee's properties",()=>{
        it("tests all properties",()=>{
            const employee = new Employee("iman",11,"imanpace7@gmail.com")
            expect(employee.name).toEqual("iman")
            expect(employee.id).toEqual(11)
            expect(employee.email).toEqual("imanpace7@gmail.com")

        })
      
    })
    describe("test Employee's methods",()=>{
        it("tests all methods",()=>{
            const employee = new Employee("iman",11,"imanpace7@gmail.com")

            expect(employee.getRole()).toEqual("Employee")
            expect(employee.getEmail()).toEqual("imanpace7@gmail.com")
            expect(employee.getId()).toEqual(11)
            expect(employee.getName()).toEqual("iman")
        })



    })
})