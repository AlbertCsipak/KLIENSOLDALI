export default {
    props: ['id', 'name', 'isactive', 'birthyear','connections','completedcredits','activesemestercount','image'],
    
    methods: {
            deleteStudent(studentId) {
            let index = this.$parentstudents.findIndex(x => x.id === studentId)
            this.$parent.students.splice(index, 1)
            fetch("https://practiceapi.nikprog.hu/Student/" + studentId, {
                method: "DELETE",
            })
            },

            updateStudent () {

                let index = this.$parent.students.findIndex(x => x.name == this.name)
                this.id = this.$parent.students[index].id
                this.$parent.students[index] = this
                console.log(JSON.stringify(this))
                fetch("https://practiceapi.nikprog.hu/Student", {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(this),
                    })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log("Success:", data)

                        this= {
                        id: '',
                        name: '',
                        isActive: false,
                        birthYear: '',
                        connections: '',
                        completedCredits: '',
                        activeSemesterCount: '',
                        image: ''
                    }
                        console.log("STUDENTS:",this.students)
                    })
                    .catch((error) => {
                        console.error("Error:", error)
                        this.newStudent= {
                        id: '',
                        name: '',
                        isActive: false,
                        birthYear: '',
                        connections: '',
                        completedCredits: '',
                        activeSemesterCount: '',
                        image: ''}
                    })
                },

            isActiveImg()
            {
                if (this.isActive){
                    return 'border-success border-3'    
                }
                else
                {
                    return 'border-danger border-3'
                }
            },
            isActiveText()
            {
                if (this.isActive){
                    return 'text-success'    
                }
                else
                {
                    return 'text-danger'
                }
            },
    },

    template: `
    <tr class="mb-5">
        <td>
            {{ name }}
        </td>
        <td>
            {{ isActive }}
        </td>
        <td>
            {{ birthYear }}
        </td>
        <td>
            {{ connections }}
        </td>
        <td>
            {{ completedCredits }}
        </td>
        <td>
            {{ activeSemesterCount }}
        </td>

        <td>
        <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
        @click="deleteStudent(id)"
    >
        <span aria-hidden="true">&times;</span>
    </button>
        </td>

    </tr>
    `
}