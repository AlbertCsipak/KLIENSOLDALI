import { Student } from './student.js'

async function createStudentArray() {
    
   let resp = await fetch('https://practiceapi.nikprog.hu/Student')
   let data = await resp.json()
   
   return data.map(i => {
      return new Student(
         i.id,
         i.name,
         i.isActive,
         i.birthYear,
         i.connections,
         i.completedCredits,
         i.activeSemesterCount,
         i.image
      )
   })
}

export { createStudentArray }