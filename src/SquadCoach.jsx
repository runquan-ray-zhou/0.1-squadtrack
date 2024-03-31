import StudentsListItem from "./StudentsListItem"

function SquadCoach ({students}) {

    const filtered = students.filter(ele => ele.squad === "Coach")
    let total = 0
    for (let student of filtered){
        total +=student.grades[0].score
    }

    return (
        <div className="squad">
            <h1>Coaches</h1>
            <span>Total CodeTrack Points: </span><span className="score">{total}</span>
            <ul>
            {students.filter(ele => ele.squad === "Coach").map(ele => <StudentsListItem key={ele.firstName}list={ele} />)}
            </ul>
        </div>
    )
}

export default SquadCoach