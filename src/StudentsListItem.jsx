import Grade from './Grade'

function StudentsListItem ({list}) {

    return (
        <div className="student">
            <h1>{list.firstName} {list.lastName}</h1>
            <ul>
            {list.grades.map((ele, i) => <Grade key={ele.toString() + i} grade={ele}/>)}
            </ul>
        </div>

    )



}

export default StudentsListItem