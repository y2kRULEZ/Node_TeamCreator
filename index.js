const inquirer = require ("inquirer")
const fs = require("fs")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const generateHTML= require("./src/generateHTML")
const managerCard = require("./src/managerHtml")
const internCard = require("./src/internHTML")
const engineerCard = require("./src/engineerHTML")



const employeeArray = []

const managerQuestions=[
    {type: "input",
    message:"What is the manager's name?",
    name: "managerName"
},
{type: "input",
message:"What is the manager's id?",
name: "managerId"
},
{type: "input",
message:"What is the manager's email?",
name: "managerEmail"
},
{type: "input",
message:"What is the manager's office number?",
name: "managerOffice"
},
]

const internQuestions=[
    {type: "input",
    message:"What is the intern's name?",
    name: "internName"
},
{type: "input",
message:"What is the intern's id?",
name: "internId"
},
{type: "input",
message:"What is the intern's email?",
name: "internEmail"
},
{type: "input",
message:"What is the intern's school?",
name: "internSchool"
},
]


const engineerQuestions=[
    {type: "input",
    message:"What is the engineer's name?",
    name: "engineerName"
},
{type: "input",
message:"What is the engineer's id?",
name: "engineerId"
},
{type: "input",
message:"What is the engineer's email?",
name: "engineerEmail"
},
{type: "input",
message:"What is the engineer's github?",
name: "engineerGithub"
},
]



function init(){
    inquirer.prompt(managerQuestions)
    .then(response=>{
        const manager = new Manager(response.managerName,
            response.managerId,
            response.managerEmail,
            response.managerOffice)
            employeeArray.push(manager)

            confirmNext()

    })
}

function confirmNext(){
    inquirer.prompt([{
        type:"confirm",
        message: "Would you like to add more employees?",
        name:"addMore"
    }])
    .then(response=>{
        if(response.addMore===true){
            addEmployee()
        }
        else{
            createHTML()
        }

    })

}
function addEmployee(){
    inquirer.prompt([{
        type:"list",
        message:"Engineer or Intern?",
        choices:["Engineer","Intern"],
        name:"selection"
    }])
    .then(response=>{
        if(response.selection === "Engineer"){
            addEngineer()
        }
        else{
            addIntern()
        }
    })
}

function addEngineer(){
    inquirer.prompt(engineerQuestions)
    .then(response=>{
        const engineer = new Engineer(response.engineerName,
            response.engineerId,
            response.engineerEmail,
            response.engineerGithub)
            employeeArray.push(engineer)
            confirmNext()
    })

}

function addIntern(){
    inquirer.prompt(internQuestions)
    .then(response=>{
        const intern = new Intern(response.internName,
            response.internId,
            response.internEmail,
            response.internSchool)
            employeeArray.push(intern)
            confirmNext()
    })


}

function createHTML(){
    console.log(employeeArray)

    let cards = ""

    for (let i = 0; i < employeeArray.length; i++) {
        if (employeeArray[i].getRole() === "Manager") {
            cards = cards + managerCard(employeeArray[i])
        }
        else if (employeeArray[i].getRole() === "Engineer") {
            cards = cards + engineerCard(employeeArray[i])
        } else {
            cards = cards + internCard(employeeArray[i])
        }
    }
    fs.writeFileSync("./dist/team.html", generateHTML(cards))


}

init()