import students from './students'
import Squad1 from './Squad1'
import Squad2 from './Squad2'
import Squad5 from './Squad5'
import Squad6 from './Squad6'
import Squad7 from './Squad7'
import SquadCoach from './SquadCoach'

function SquadList () {

    return (
        <div className="squadList"> 
        <ul>
        <Squad2 students={students}/>
        <Squad7 students={students}/>
        <Squad5 students={students}/>
        <SquadCoach students={students}/>
        <Squad1 students={students}/>
        <Squad6 students={students}/>
        </ul>
        </div>
    )

}

export default SquadList