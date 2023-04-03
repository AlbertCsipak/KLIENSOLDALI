export class Renderer {

    renderCards(studentArray) {
        let s = '<div class="row row-cols-6 row-cols-md-6 g-6">'
        studentArray.forEach(stud => {
            s+='  <div class="col">'
            s += '<div class="card" style="'+this.isActive(stud.isActive)+'">'
            s+='<img class="card-img-top" style="height: 100px;width:100%" src="'+stud.image+'" alt="Card image cap">'
            s+='<div class="card-body">'
            s+='<h5 class="card-title" style="font-size: 16px"> '+stud.name+'</h5>'
            s+='<p class="card-text">'
            +stud.birthYear+'<br>'
            +stud.connections+'<br>'
            +stud.completedCredits+'<br>'
            +stud.activeSemesterCount+'<br>'
            +'</p>'
            s+='<a href="#" data-stud-id="'+stud.id+'" class="btn btn-primary delete-student-btn" style="width:100%;background:red;  font-size:0.5rem">Delete</a>'
            s+='</div>'
            s+='</div>'
            s+='</div>'
        })
        s+='</div>'
        return s
    }

    isActive(status) {
        return status
            ?
            'border: 2px solid lightgreen !important;'
            :
            'border: 2px solid red !important;'
    }
}