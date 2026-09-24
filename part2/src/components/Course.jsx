const Course = ({course}) => {
    const sum = course.patrs.reduce((sum,part.exercises) => {
        return sum + part.exercises
    })

    return (
        <div>
            {course.parts.map(part => (
                <p key={part.id}>
                    {part.name} {part.exercises}
                </p>
            ))}
            <p>total of {sum} exercises</p>
        </div>
    )
}

export default Course