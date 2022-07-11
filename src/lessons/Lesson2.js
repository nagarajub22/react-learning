

function Lesson2() {

    const tags = ['React', 'Learning', '100DaysofCode'];

    return (
        <div>
            <h2>Create React Elements</h2>
            <p>Example show case creating react elements without jsx</p>
            <ul>
                {
                    tags.map(tag => <li key={tag}>{tag}</li>)
                }
            </ul>
        </div>
    )
}

export default Lesson2;