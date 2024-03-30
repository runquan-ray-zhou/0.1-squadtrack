import StudentsListItem from "./StudentsListItem"

function StudentList ({students}) {

    console.log(students)
    return  (
        <div className="studentList">
            <ul>
            {/* {students.sort((a, b) => a.lastName.localeCompare(b.lastName)).map((ele) => <StudentsListItem key={ele.firstName}list={ele} />)} */}
            {students.sort((a, b) => b.grades[0].score - a.grades[0].score).map((ele) => <StudentsListItem key={ele.firstName}list={ele} />)}
            </ul>
        </div>

    )


}

export default StudentList