import './NavigationPane.css';

function NavigationPane({currentLesson, lessons, changeLesson}) {

    console.log(changeLesson);

    return (
        <aside>
            <ul className="navigation-list">
                {
                    lessons.map(item => {
                        return <li onClick={() => { changeLesson(item) }} className={currentLesson.id === item.id ? 'active' : ''} title={item.label} key={item.id}>{item.label}</li>
                    })
                }
            </ul>
        </aside>
    )
}

export default NavigationPane;