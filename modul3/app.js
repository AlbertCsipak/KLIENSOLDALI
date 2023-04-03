import { Student } from './student.js'
import { createStudentArray } from './arrayCreator.js'
import { Renderer } from './renderer.js'

let mainWrapper = document.querySelector('.main-wrapper')

let students = await createStudentArray()
let renderer = new Renderer()
render()

document.querySelector('#add-new-student-btn').addEventListener('click', addNewStudent)
document.querySelector('#update-student-btn').addEventListener('click', updateStudent)



function render () {
    mainWrapper.innerHTML = renderer.renderCards(students)

    document.querySelectorAll('.delete-student-btn').forEach(x => {
        x.addEventListener('click', deleteStudent)
    })
}

function deleteStudent (e) {
    let idToDelete = e.target.dataset.studId

    fetch("https://practiceapi.nikprog.hu/Student/" + idToDelete, {
            method: "DELETE",
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data)
            
            let index = students.findIndex(x => x.id === idToDelete)
            students.splice(index, 1)

            render()
        })
        .catch((error) => {
            console.error("Error:", error)
        })
}

function updateStudent () {

    let index = students.findIndex(x => x.name == document.querySelector('#input-name').value)

    let stud = new Student(
        students[index].id,
        document.querySelector('#input-name').value,
        document.querySelector('#input-isActive').value == 'true',
        document.querySelector('#input-birthYear').value,
        document.querySelector('#input-connections').value,
        document.querySelector('#input-completedCredits').value,
        document.querySelector('#input-activeSemesterCount').value,
        document.querySelector('#input-image').value
    )

    fetch("https://practiceapi.nikprog.hu/Student", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(stud),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data)

            students[index] = stud
            
            console.log("STUDENTS:",students)
            
            render()
        })
        .catch((error) => {
            console.error("Error:", error)
        })
}



function addNewStudent () {

    let json = document.querySelector('#input-area').value

    fetch("https://practiceapi.nikprog.hu/Student", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: json,
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data)

            students.push(new Student(
                data.id,
                data.name,
                data.isActive,
                data.birthYear,
                data.connections,
                data.completedCredits,
                data.activeSemesterCount,
                data.image
            ))
                        
            render()
        })
        .catch((error) => {
            console.error("Error:", error)
        })
}

