import Grade from './Grade'

function StudentsListItem ({list}) {

    return (
        <div className="student">
            <li>
            {list.firstName} {list.lastName} {list.grades.map((ele, i) => <Grade key={ele.toString() + i} grade={ele}/>)}
            </li>
        </div>

    )



}

export default StudentsListItem