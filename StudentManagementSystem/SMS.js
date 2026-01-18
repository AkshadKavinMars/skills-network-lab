document.getElementById("addStudent").addEventListener("click", () => {
  return addStudent();
});

let studentArray=[]

class FetchStudent {
    constructor(studentName,studentClass,admnid) {
        this.studentName = studentName
        this.studentClass = studentClass
        this.admnid = admnid
    }
}

function addStudent() {
    const studentName = document.getElementById("studentName").value
    const studentClass = document.getElementById("studentClass").value
    const admnid = parseInt(document.getElementById("admnid").value)

    if(studentName && studentClass && !isNaN(admnid)) {
        const student = new FetchStudent(studentName,studentClass,admnid)
        studentArray.push(student)
        console.log("Fetch successfull....")
    }
    else {
        alert("Enter all the specific details....")
    }


}

document.getElementById("showStudent").addEventListener("click", () => { return showStudent() });

function showStudent() {
    document.getElementById("showstudentfull").innerHTML = student.studentName;
}