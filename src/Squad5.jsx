import StudentsListItem from "./StudentsListItem"

function Squad5 ({students}) {

    const filtered = students.filter(ele => ele.squad === 5)
    let total = 0
    for (let student of filtered){
        total +=student.grades[0].score
    }

    return (
        <div className="squad">
            <h1>Squad 5</h1>
            <span>Total CodeTrack Points: </span><span className="score">{total}</span>
            <ul>
            {students.filter(ele => ele.squad === 5).map(ele => <StudentsListItem key={ele.firstName}list={ele} />)}
            </ul>
        </div>
    )
}

export default Squad5